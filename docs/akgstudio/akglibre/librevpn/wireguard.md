1、准备工作

一台 VPS（本次演示用的是Debian系统）
下载并安装 SSH连接工具Finalshell：【点击进入】
放行端口51820（如果自定义了其它端口，请放行对应端口，嫌麻烦的可以关闭防火墙或者放行所有端口）
2、Wireguard官网：【点击进入】

3、Wireguard VPN安装，开源项目地址：【点击进入】

下载脚本
wget -O wireguard.sh https://get.vpnsetup.net/wg
Copy
安装命令
sudo bash wireguard.sh