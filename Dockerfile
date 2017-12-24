FROM debian:jessie
MAINTAINER Kevin <work.didelotkev.ovh>

RUN mkdir -p /var/www/mycv
COPY / /var/www/mycv

VOLUME ["/var/www/mycv", "/var/www/mycv"]
