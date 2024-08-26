# user admin
CMCCAdmin
CMCCAdminK7%g^Mvp
# 移动友华PT924光猫获取超级用户方法

Xshiny

于 2021-08-17 22:09:01 发布

阅读量1.5w
 收藏 21

点赞数 5
文章标签： 经验分享
版权
一、电脑有线或无线连接到PT924，用光猫背后的User用户登陆。

二、在登陆后的浏览器地址栏输入：

http://192.168.1.1/cgi-bin/abcdidfope94e0934jiewru8ew414.cgi，

返回200OK信息，成功开启Telnet服务。

三、打开电脑命令提示符界面（CMD），输入Telnet，

        用户名为yhtcAdmin，密码为Cm1@YHfw

        成功登陆后，在#号依次输入：

                #cd /usr/local/ct

                #vi lastgood.xml

                然后查找用户和密码，在vi中，

                                先输入“:”，进入命令模式，

                                然后输入“/SUSER_PASSWORD”，查找密码。

                如成功，则会看到



                这就是超级用户名和密码了，记录下来。

                注，退出VI方法，输入“:"号进入命令模式，接着输入“q!"，回车即可退出。

四、然后在浏览器中，输入http://192.168.1.1，用以上查到的信息可以进入超级用户模式了。

五、随后，您就可以根据自己需要改光猫为桥接模式了。 

感谢https://blog.csdn.net/gsls200808/article/details/106307953提供的telnet开启信息。


# 38F6CF3F9994