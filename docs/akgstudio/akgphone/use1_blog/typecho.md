# debian12
2、安装好Debian 10后，打开终端，使用以下命令更新软件包列表和已安装的软件包：

sudo apt-get update
sudo apt-get upgrade
3、安装PHP环境，Typecho是一个基于PHP的博客程序，所以我们需要先安装PHP环境，可以使用以下命令安装：

sudo apt-get install php libapache2-mod-php php-gd php-mysql php-xml php-mbstring php-bcmath php-curl php-json
4、安装Composer，Composer是一个PHP的依赖管理工具，可以帮助我们轻松地安装和管理Typecho所需的依赖包，可以使用以下命令安装：

curl -sS https://getcomposer.org/installer | php ---install-dir=/usr/local/bin --filename=composer
5、创建一个用于存放Typecho博客的目录，在本教程中，我们将创建一个名为“typecho”的目录：

Debian10安装Typecho博客程序教程（debian 10 安装）

sudo mkdir ~/typecho
cd ~/typecho
下载并解压Typecho
1、访问Typecho官方网站(https://www.typecho.org/),找到最新的Typecho版本，复制下载链接，然后在终端中使用wget命令下载：

wget https://download.typecho.org/releases/latest/tp_x64_linux_amd64.tar.gz
2、使用tar命令解压下载的文件：

tar -zxvf tp_x64_linux_amd64.tar.gz
3、将解压后的文件夹重命名为“typecho”，并移动到刚刚创建的目录下：

mv typecho-* ~/typecho/typecho
配置Apache虚拟主机
1、在终端中输入以下命令，打开Apache的虚拟主机配置文件：

Debian10安装Typecho博客程序教程（debian 10 安装）

sudo nano /etc/apache2/sites-available/000-default.conf
2、在文件末尾添加以下内容，用于配置Typecho博客：

<VirtualHost *:80>
    ServerName yourdomain.com  请将yourdomain.com替换为你的域名或IP地址
    DocumentRoot "/home/yourusername/typecho"  请将yourusername替换为你的用户名，并确保路径正确指向刚刚创建的“typecho”目录
    ErrorLog "logs/error_log"  请确保此路径存在且可写，否则会导致错误日志无法记录
    CustomLog "logs/access_log" combined  请确保此路径存在且可写，否则会导致访问日志无法记录
</VirtualHost>
3、保存并退出编辑器，然后重启Apache服务以使配置生效：

sudo systemctl restart apache2
登录后台管理界面并进行基本设置
1、在浏览器中输入你的域名或IP地址，你应该可以看到Typecho的安装向导，按照提示完成安装过程即可，安装完成后，你可以通过浏览器访问后台管理界面，默认的用户名和密码分别为“admin”和“admin”，登录后，你可以对博客进行基本设置，如修改主题、添加插件等，具体操作可以参考Typecho官方文档(https://www.typecho.org/docs/)。






server {
    listen 443 ssl;
    server_tokens off;
    keepalive_timeout 5;
    root /root/typecho; #填写您的网站根目录，例如：/usr/local/lighthouse/softwares/wordpress
    index index.php index.html;
    access_log logs/wordpress.log;
    error_log logs/wordpress.error.log;
    server_name tutlab.tech; #填写您的证书绑定的域名，例如：www.cloud.tencent.com
    ssl_certificate cloud.tencent.com_bundle.crt; #填写您的证书文件名称，例如：cloud.tencent.com_bundle.crt
    ssl_certificate_key cloud.tencent.com.key; #填写您的私钥文件名称，例如：cloud.tencent.com.key
    ssl_session_timeout 5m;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;  # 可参考此 SSL 协议进行配置
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;   #可按照此加密套件配置，写法遵循 openssl 标准
    ssl_prefer_server_ciphers on;
    location ~* \.php$ {
        fastcgi_pass   127.0.0.1:9000;
        include fastcgi.conf;
        client_max_body_size 20m;
        fastcgi_connect_timeout 30s;
        fastcgi_send_timeout 30s;
        fastcgi_read_timeout 30s;
        fastcgi_intercept_errors on;
    }
}

# https://zhuanlan.zhihu.com/p/696878296