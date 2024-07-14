# 2.开启SSH Server
postmarketOS 默认不开启sshd，因此我们需要手动开启，在手机上的终端机软件中输入如下的指令：

sudo service sshd start #开启SSH Server 服务

sudo rc-update add sshd # 开机启动SSHD 服务     

# 
postmarketOS使用apk作为包管理

换源前首先看一下PostmarketOS的Alpine Linux版本（cat /etc/alpine-release），目前的PostmarkOS的内核版本应该是3.16： 
然后编辑源配置文件

sudo vi /etc/apk/repositories

增加源地址

http://mirrors.aliyun.com/alpine/edge/main

http://mirrors.aliyun.com/alpine/edge/community

替换源地址后，更新一下

sudo apk update

sudo apk upgrade

# 安装docker
sudo apk add docker

# 启动docker
service docker start

# 安装青龙面板
sudo docker pull whyour/qinglong:latest

# error-response-from-daemon-get-https-registry-1-docker-io-v2-eof-how-to
https://www.ipaddress.com/website/registry-1.docker.io/

# 
sudo docker run -dit \
-v $PWD/ql/config:/ql/config \
-v $PWD/ql/log:/ql/log \
-v $PWD/ql/db:/ql/db \
-p 5700:5700 \
--name qinglong \
--hostname qinglong \
--restart always \
whyour/qinglong:latest