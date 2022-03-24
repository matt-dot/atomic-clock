import ntplib
from time import ctime
from datetime import datetime, timedelta

def get_time():
    client = ntplib.NTPClient()
    response = client.request('uk.pool.ntp.org', version=3)
    ntp = ctime(response.tx_time)
    time = datetime.strptime(ntp, "%a %b %d %H:%M:%S %Y")
    return time