# 安装远程桌面

更新时间：2021-03-18 GMT+08:00

[查看PDF](https://support.huaweicloud.com/prtg-robox-kunpengcps/prtg-robox-kunpengcps.pdf)

分享

1. 安装远程桌面。

`apt install xfce4  xfce4-* xrdp`

2. 打开.xsession文件夹。

`cd /home/ubuntu
vi .xsession`
说明：
“/home/ubuntu”为用户文件夹。

3. 在**.xsession**中添加如下内容。

`xfce4-session`

4. 保存后确认。

`cat .xsession
xfce4-session`

5. 重启xrdp远程桌面。

`/etc/init.d/xrdp restart`

此后，可以通过Windows的远程桌面访问到该华为鲲鹏920处理器所在服务器图形桌面

# vscode无法启动

ApplicationFinder 加上user-dir-data —no-sandbox