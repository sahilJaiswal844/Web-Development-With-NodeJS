### Login to MySQL (as root)
```shell
mysql -u root -p
# or 
mysql -u root #without password
#or
sudo mysql #on ubuntu
```
### Create Database and User (inside MySQL)
```mysql
CREATE DATABASE mytestdb;

CREATE USER mytestuser IDENTIFIED WITH mysql_native_password BY 'mytestpass';

GRANT ALL PRIVILEGES ON mytestdb.* TO mytestuser;

FLUSH PRIVILEGES;

EXIT
```
### If there is Password policy problems 
```mysql
SET GLOBAL validate_password_policy=LOW;
```
### Login to MySQL (as the new user)
```shell
mysql -u mytestuser -p 

```
### Create Table 
```mysql
CREATE TABLE myfirsttable (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name TEXT
);
```
### DROP 
```mysql
DROP DATABASES database_name;
```
```mysql
DROP USER user_name;
```
### SHOW
```mysql
SHOW databases;
```
```mysql
SHOW tables;
```
```mysql
SELECT * FROM mysql. user;
```
```mysql
select * from table_name;
```
### USE
```mysql
USE database_name;
```
### INSERT
```mysql
insert into table_name values (,'');
insert into table_name (id, name) values (,'');
insert into table_name (name) values('');
```