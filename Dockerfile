FROM ubuntu:14.04
MAINTAINER andrewseg@gmail.com

RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN apt-get update && apt-get install -y \
    git \
    python3 \
    python3-dev \
    python3-setuptools \
    python3-pip \
    python-virtualenv \
    nginx \
    sqlite3 \
    npm \
    curl \
    wget

RUN virtualenv /home/docker/code/env -p $(which python3)
COPY . /home/docker/code/
RUN cp /home/docker/code/personal_website/personal_website/settings.py.prod /home/docker/code/personal_website/personal_website/settings.py
RUN printf "SECRET_KEY = '%s'" $(openssl rand -hex 50) >> /home/docker/code/personal_website/personal_website/settings.py
RUN chown www-data:www-data /home/docker/code/config/
RUN mkdir /home/docker/code/web-root
COPY index.html /home/docker/code/web-root/index.html
RUN /bin/bash -c "source /home/docker/code/env/bin/activate; \
                  pip install -r /home/docker/code/requirements.txt; \
                  python /home/docker/code/personal_website/manage.py makemigrations; \
                  python /home/docker/code/personal_website/manage.py migrate; \
                  python /home/docker/code/personal_website/manage.py collectstatic --noinput;"
COPY config/personal_website_nginx.conf /etc/nginx/sites-available/default
COPY config/personal_website_uwsgi.ini /etc/uwsgi/vassals/personal_website_uwsgi.ini
RUN chmod 666 /home/docker/code/config/db.sqlite3
RUN chown www-data:www-data /home/docker/code/config/db.sqlite3

RUN npm install -g n
RUN n 6.2.0
RUN cd /home/docker/code; npm install
RUN cd /home/docker/code; npm run build
RUN cp /home/docker/code/dist/build.js /home/docker/code/personal_website/static/build.js

# COPY config/uwsgi.conf /etc/init/uwsgi.conf
# RUN initctl restart uwsgi
# RUN chmod 666 /home/docker/code/config/mysite.sock
# RUN service nginx restart
EXPOSE 80

# CMD /home/docker/code/env/bin/uwsgi --emperor /etc/uwsgi/vassals --uid www-data --gid www-data --daemonize /var/log/uwsgi-emperor.log --die-on-term
CMD /home/docker/code/env/bin/uwsgi --emperor /etc/uwsgi/vassals --uid www-data --gid www-data --daemonize /var/log/uwsgi-emperor.log --die-on-term; nginx -g 'daemon off;'
