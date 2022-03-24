import sqlite3
import os 

backend_dir = os.path.dirname(__file__)
os.chdir(backend_dir)

log_in = sqlite3.connect('LogInData.db')
log_in.execute('''CREATE TABLE LOG_IN_DATA 
                (hashIP STRING NOT NULL,
                log_in_time STRING NOT NULL);''')
log_in.commit()
log_in.close()