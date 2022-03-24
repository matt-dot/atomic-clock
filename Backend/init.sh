#!/bin/sh

ln -s /data/nginx/ /etc/nginx/conf.d
ln -s /data/certbot/conf/ /etc/letsencrypt
mkdir -p /var/www && ln -s /data/certbot/www/ /var/www/certbot
nginx -g 'daemon off;'