import sqlite3

from flask import Flask

import get_time

app = Flask(__name__)

@app.route("/backend")
def main():
    time = get_time.get_time()
    print(time)
    return {"time": time}

if __name__ == "__main__":
    main()
    app.run(debug=True, host="0.0.0.0")