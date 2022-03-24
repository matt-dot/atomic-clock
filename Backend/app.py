from audioop import cross
import os
import hashlib

from flask import Flask, render_template, request
from flask_socketio import SocketIO, send
from flask_cors import CORS, cross_origin
import sqlite3

import clock

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/')
@app.route('/home')
@cross_origin(origin="*")
def index():
    """
    """
    return render_template('index.html')


# @sock.route('/logged-in', methods=["GET"])
# @app.route('/logged-in', methods=["GET"])
@socketio.on("message")
def display_time(msg):
    """
    ----------
    Returns:
        current_time: the current time
        last_log_in: time of previous log in
    """
    print(msg)
    send(str(clock.get_time()))

    # ip_addr = request.environ.get("HTTP_X_REAL_IP", request.remote_addr)
    # hash_IP = hashlib.sha256((ip_addr.encode('utf-8'))).hexdigest()

    # time = clock.get_time()

    # log_in = sqlite3.connect('LogInData.db')
    # c = log_in.cursor()

    # #get previous log in time for hashed IP
    # cursor = c.execute("SELECT log_in_time FROM LOG_IN_DATA WHERE hashIP=?", (hash_IP,))
    # last_log_in = c.fetchone()
    
    # #if there is a previous log in
    # if last_log_in is not None:
    #     last_log_in = last_log_in[0]

    #     #update log in record for hashed IP
    #     log_in.execute("UPDATE LOG_IN_DATA SET log_in_time=? WHERE hashIP=?", [time, hash_IP])
    #     log_in.commit()
    #     log_in.close()

    #     return render_template('loggedin.html', current_time = time, last_log_in = last_log_in)
        
    # #no previous log in
    # else:
    #     #add first log in record for hashed IP
    #     log_in.execute("INSERT INTO LOG_IN_DATA (hashIP, log_in_time) VALUES (?, ?)", (hash_IP, time))
    #     log_in.commit()
    #     log_in.close()

    #     return render_template('loggedin.html', current_time = time)

            
if __name__ == "__main__":
    # app.run(debug=True, host="0.0.0.0")
    socketio.run(app, debug=True, host="localhost", port=5000)



