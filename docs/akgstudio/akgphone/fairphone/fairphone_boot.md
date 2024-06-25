# 如何进入fastboot
音量减+插入数据线

# fairphone 管理引导加载程序
https://support.fairphone.com/hc/en-us/articles/10492476238865-Manage-the-Bootloader

# postmarketos password
147147

# 恢复fairphone如果不行，多试几次

# 国内镜像
sudo su
vi /etc/apt/sources.list
:%s/ports.ubuntu.com/mirrors.tuna.tsinghua.edu.cn/g

# error dnsmasq
https://forums.ubports.com/topic/9671/libertine-ota-3-always-failed-in-dnsmasq?_=1718932854272&lang=zh-CN

# ssh
adb push ~/.ssh/id_rsa.pub /home/phablet/

mkdir /home/phablet/.ssh
chmod 700 /home/phablet/.ssh
cat /home/phablet/id_rsa.pub >> /home/phablet/.ssh/authorized_keys
chmod 600 /home/phablet/.ssh/authorized_keys
chown -R phablet:phablet /home/phablet/.ssh

sudo service ssh start
ssh phablet@ubuntu-phablet