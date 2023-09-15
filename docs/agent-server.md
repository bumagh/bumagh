---
outline: deep
---

# python2.7 install pip

```sh
curl https://bootstrap.pypa.io/pip/2.7/get-pip.py --output get-pip.py
python get-pip.py
```
# enum

```sh
pip install --upgrade pip enum34
```
# ImportError: No module named wtforms

```sh
pip install wtforms
```
# ImportError: No module named pymysql

```sh
pip install pymysql
```
# install mysql
```sh
ubuntu 20.04
mysql 8.0
apt-get install mysql-server
```
# set password and config
```sh
 sudo systemctl set-environment MYSQLD_OPTS="--skip-networking --skip-grant-tables"
 sudo mysql -u root
 flush privileges;
 USE mysql
ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';
sudo systemctl unset-environment MYSQLD_OPTS
sudo systemctl revert mysql
sudo killall -u mysql
sudo systemctl restart mysql.service
sudo mysql -u root -p
```

# give privileges to all
```sh
flush privileges;
use mysql;
update user set host='%' where user='root';
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
grant all privileges on *.* to 'root'@'%' with grant option;
vim /etc/mysql/mysql.conf.d/mysqld.cnf
open my.cnf and set
listen = 0.0.0.0
port = 3306

```

# change password for user with salt
```sh
update ba_admin set password=md5(concat(md5('123456'),salt));
```
<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
