FROM nginx:1.25-alpine

EXPOSE 3001

#Deletes the default nginx page.
RUN rm /usr/share/nginx/html/*


COPY configs/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

