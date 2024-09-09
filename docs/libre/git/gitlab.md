# 如何更改子域名?
安装Gitlab完成后：
Gitlab默认Nginx80端口
如果机器未占有80端口，可以直接替换成域名，解析后就可以直接访问

grep "^external_url" /etc/gitlab/gitlab.rb #查看当前绑定的域名或者IP
vim /etc/gitlab/gitlab.rb   #打开配置文件
# external_url 'http://192.168.100.246'  #替换   #修改成域名访问
external_url 'http://gitlab.new.com'  
gitlab-ctl reconfigure   #重新跑一下配置
1
2
3
4
5
如果机器80端口以占有，需要修改gitlab端口。

grep "'listen_port" /etc/gitlab/gitlab.rb   #查看默认端口
vim /etc/gitlab/gitlab.rb   #打开配置文件
nginx['listen_port'] = 800     #找到取消注释，修改端口
gitlab-ctl reconfigure   #重新跑一下配置
1
2
3
4
由于更改端口，域名解析不到。提供方式使用云服务中的负载均衡。
首先各平台的安全组放通端口 “800”

修改nginx中gitlab配置文件
vi ~git/nginx/conf/gitlab-http.conf


server {
  listen *:800; 保持端口一致
  server_name http://gitlab.new.com;
    ...
}

1
2
3
4
5
6
7
重启gitlab
gitlab-ctl restart
浏览器访问 域名:端口。
————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
                        
原文链接：https://blog.csdn.net/love8753/article/details/107613706