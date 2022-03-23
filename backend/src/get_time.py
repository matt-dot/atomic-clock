import ntplib
from time import ctime
from datetime import datetime, timezone

def get_time():
    """Return a datetime object format  yy/mm/dd hh/mm/ss

    Returns:
        datetime: formatted datetime
    """
    client = ntplib.NTPClient()
    response = client.request('uk.pool.ntp.org', version=3)
    ntp = ctime(response.tx_time)
    # print(datetime.strptime(ntp, "%a %b %d %H:%M:%S %Y"))
    return (datetime.strptime(ntp, "%a %b %d %H:%M:%S %Y"))