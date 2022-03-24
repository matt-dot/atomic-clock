import os
import hashlib
import time
from datetime import timedelta
import json

from flask import Flask, render_template, request
from flask_socketio import SocketIO, send
from flask_cors import CORS, cross_origin
import sqlite3

import clock

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/foo": {"origins": "http://localhost:port"}})

@app.route('/')
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def index():
    """
    Returns: home page
    """
    return render_template('index.html')


@socketio.on("message")
def display_time(msg):
    """
    ----------
    Returns:
        current_time: the current time
        last_log_in: time of previous log in
    """
    # get IP and hash
    ip_addr = request.environ.get("HTTP_X_REAL_IP", request.remote_addr)
    hash_IP = hashlib.sha256((ip_addr.encode('utf-8'))).hexdigest()

    # get curremt time
    current_time = str(clock.get_time())

    log_in = sqlite3.connect('LogInData.db')

    #get previous log in time for hashed IP
    c = log_in.cursor()
    cursor = c.execute("SELECT log_in_time FROM LOG_IN_DATA WHERE hashIP=?", (hash_IP,))
    last_log_in = c.fetchone()
    
    #if there is a previous log in
    if last_log_in is not None:
        last_log_in = last_log_in[0]

        #update log in record for hashed IP
        log_in.execute("UPDATE LOG_IN_DATA SET log_in_time=? WHERE hashIP=?", [current_time, hash_IP])
        log_in.commit()
        log_in.close()

    #no previous log in
    else:
        #add first log in record for hashed IP
        log_in.execute("INSERT INTO LOG_IN_DATA (hashIP, log_in_time) VALUES (?, ?)", (hash_IP, current_time))
        log_in.commit()
        log_in.close()

    while True:
        #send current time
        current_time = clock.get_time()
        
        timeoutput = json.dumps({'last_log_in':str(last_log_in),
                                'current_time':str(current_time)})

        send(timeoutput)

        for i in range(60):
            #wait then add one second for 1 minute
            time.sleep(1)
            current_time = current_time + timedelta(seconds=1)

            timeoutput = json.dumps({'last_log_in':str(last_log_in),
                                'current_time':str(current_time)})
            send(timeoutput)



if __name__ == "__main__":
    socketio.run(app, debug=True, host="localhost", port=5000)



