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

# fakeroot -> root

# vi 键盘成为ABCD
vim/vimrc.tiny
set nocompatible

# 使用libertine
- 创建容器
libertine-container-manager create -i CONTAINER-IDENTIFIER
- 列出容器
libertine-container-manager list
- 销毁容器
libertine-container-manager destroy -i CONTAINER-IDENTIFIER
- 管理应用程序
libertine-container-manager list-apps
- 安装包
libertine-container-manager install-package -p PACKAGE-NAME
- Remove a package
libertine-container-manager remove-package -p PACKAGE-NAME
- Run desktop application
lomiri-app-launch focal_gedit_0.0

- Shortcuts
alias git='libertine-launch -i CONTAINER-IDENTIFIER git'
alias screenfetch='libertine-launch -i CONTAINER-IDENTIFIER screenfetch'


# Using custom Waydroid images
Then copy/move them to the following folder:

Copy
/etc/waydroid-extra/images/
/usr/share/waydroid-extra/images/ used to be the previously preferred path before waydroid --version 1.3.3 (it still is perfectly valid however right now as well).

An example of setting up from downloaded sourceforce zips (assuming terminal open in the directory where they were downloaded):

Copy
sudo mkdir -p /etc/waydroid-extra/images
sudo unzip lineage-*-system.zip -d /etc/waydroid-extra/images
sudo unzip lineage-*-vendor.zip -d /etc/waydroid-extra/images
rm lineage-*-system.zip lineage-*-vendor.zip
Then we need to re-init Waydroid in order for it to use the custom images:

Copy
sudo waydroid init -f
# 空间不足
mount -o bind /userdata/system-data/etc/waydroid-extra /etc/waydroid-extra/

# bak
isolate carbon
cake lock
truth empower
abuse film
soldier pigeon
salmon expect