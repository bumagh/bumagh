# mysqldump
```bash
mysqldump -u root -p dbname>a.sql
mysqldump --no-data -u root -p dbname>a.sql
```
# mysql root grant
```bash
[mysqld]
skip-grant-tables
```