CREATE DATABASE foodreview;

CREATE USER 'foodreview'@'localhost' IDENTIFIED BY 'foodreview';

GRANT ALL PRIVILEGES ON foodreview.* TO 'foodreview'@'localhost';