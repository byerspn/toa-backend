-- settings.sql
CREATE DATABASE toa;
CREATE USER toauser WITH PASSWORD 'toauserpassword';
GRANT ALL PRIVILEGES ON DATABASE toa TO toauser;