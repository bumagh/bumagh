# I'm learning buildadmin to build website
# buildadmin安装
```sh
php think run -p 8000
web目录npm run dev
```
# 数据库迁移失败
```sh
php think migrate:run
安装创建数据库名为buildadmin
```
# 500 内部服务器error

thinkphp打开调试
查看trace输出的错误日志

```sh
chmod -R 777 runtime/
```

# nginx配置

```sh
root   /usr/share/nginx/html/qvie/public;
    index  index.html index.htm index.php error/index.html;
    location / {
        if (!-e $request_filename) {
            rewrite  ^(.*)$  /index.php?s=/$1  last;
            break;
        }
    }
    location ~ \.php$ {
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_split_path_info  ^((?U).+\.php)(/?.+)$;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        fastcgi_param  PATH_INFO  $fastcgi_path_info;
        fastcgi_param  PATH_TRANSLATED  $document_root$fastcgi_path_info;
        include fastcgi_params;
    }
```

# thinkphp .env配置
```sh
APP_DEBUG = true

[APP]
DEFAULT_TIMEZONE = Asia/Shanghai

[LANG]
default_lang = zh-cn

[DATABASE]
TYPE = mysql
HOSTNAME = 127.0.0.1
DATABASE = qvie
USERNAME = root
PASSWORD = 123456
HOSTPORT = 3306
CHARSET = utf8mb4
DEBUG = true

~              
```