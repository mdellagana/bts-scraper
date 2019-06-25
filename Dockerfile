FROM node:alpine
MAINTAINER mdellagana@gmail.com

WORKDIR /bts-scraper

#Adding relevant folders to image
# ADD dist ./bts-scraper/express-server/dist
# ADD node_modules ./bts-scraper/express-server/dist/node_modules

COPY start.sh /bts-scraper

RUN chmod u+x start.sh

ENTRYPOINT ["/bts-scraper/start.sh"]
