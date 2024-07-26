步骤 1：在 Ubuntu 22.04|20.04|18.04 LTS 上安装 Samba 服务器

要在 Ubuntu 22.04|20.04|18.04 上安装 Samba，请使用以下命令：

sudo apt -y update
sudo apt -y install samba

如果您使用静态 IP 地址，当要求使用 DHCP 的 WINS 设置时，请回答“否”。

安装软件包后，继续执行步骤 2，我们将在其中进行配置和管理 Samba 服务。
步骤2：在Ubuntu 22.04|20.04|18.04上配置Samba共享

Samba 使用/etc/samba/smb.conf 中的配置文件。 如果更改此配置文件，则更改在重新启动 Samba 守护程序后才会生效。

让我们首先创建一个通过 Samba 共享的目录。该目录必须存在才能在 smb.conf 中进行配置。我们将在 /home 下创建一个。

sudo mkdir -p /home/share

无需身份验证即可访问所有内容（不推荐）

该目录应该对所有用户都可读可写。

sudo chmod 777 /home/share 

在 /etc/samba/smb.conf 文件上配置 Samba 共享。

$ sudo vim /etc/samba/smb.conf

[global]

# Configure correct UTP
  unix charset = UTF-8
# Change this to the workgroup/NT-domain name your Samba server will be part of
   workgroup = WORKGROUP
   bind interfaces only = yes

# Set share configuration at the end
[Docs]
   path = /home/share
   writable = yes
   guest ok = yes
   guest only = yes
   create mode = 0777
   directory mode = 0777

配置详情：

    文档 – Samba 共享名
    path=/home/share – 共享目录
    guest ok=yes – 打开访客共享
    仅访客=是 – 所有访客都受到保护
    writable=yes – 将共享目录设置为可写
    创建模式=0777 & 目录模式=0777 – 允许访问所有内容

配置安全 Samba 共享（推荐）

将 Samba 共享目录的组所有权设置为 sambashare 组。

sudo chgrp sambashare /home/share

创建 samba 共享用户。将 user1 替换为要创建的 samba 共享用户。

sudo useradd -M -d /home/share/user1 -s /usr/sbin/nologin -G sambashare user1
sudo mkdir /home/share/user1
sudo chown user1:sambashare /home/share/user1
sudo chmod 2770 /home/share/user1

设置用户密码并确认。

$ sudo smbpasswd -a user1
New SMB password:
Retype new SMB password:
Added user user1.

使用以下命令设置密码后启用 samba 帐户：

$ sudo smbpasswd -e user1
Enabled user user1.

我们在 Samba 共享父目录中创建了一个用户的主目录，并将所有权设置为 samba 共享组。让我们创建另一个用户。

sudo useradd -M -d /home/share/smbadmin -s /usr/sbin/nologin -G sambashare smbadmin
sudo mkdir /home/share/smbadmin
sudo smbpasswd -a smbadmin
sudo smbpasswd -e smbadmin
sudo chown smbadmin:sambashare /home/share/smbadmin
sudo chmod 2770 /home/share/smbadmin

配置安全 Samba 共享。

[user1]
    path = /home/share/user1
    read only = no
    browseable = no
    force create mode = 0660
    force directory mode = 2770
    valid users = @user1 @sambashare

[smbadmin]
    path = /home/share/smbadmin
    read only = no
    browseable = yes
    force create mode = 0660
    force directory mode = 2770
    valid users = @sambashare @smbadmin

进行更改后重新启动 samba 守护进程。

sudo systemctl restart smbd nmbd

确认服务正在运行。

如果您有活动防火墙，请运行：

sudo ufw allow 'Samba'

步骤 3：配置 Samba 客户端

要在Linux系统上访问Samba共享，需要安装并配置Samba客户端。

### Install Samba client on Ubuntu / Debian ### 
sudo apt update
sudo apt -y install smbclient cifs-utils

### Install Samba client on CentOS / RHEL / Fedora ### 
sudo yum -y install samba-client cifs-utils
sudo dnf -y install samba-client cifs-utils

访问 Samba 共享 – 暂时

$ smbclient //sambaserver/share -U sambausername

Example:

$ smbclient //192.168.122.52/user1 -U user1
WARNING: The "syslog" option is deprecated
Enter WORKGROUP\user1's password: 
Try "help" to get a list of possible commands.
smb: \> list
0: server=192.168.122.52, share=user1
smb: > ls
   .                                   D        0  Sun Jul 14 01:10:39 2019
   ..                                  D        0  Sun Jul 14 00:49:13 2019
   latest.zip                          N 12121295  Tue Jun 18 10:52:03 2019
     9544896 blocks of size 1024. 7918732 blocks available
 smb: > pwd
 Current directory is \192.168.122.52\user1\

您可以使用 mount 和 cifs 类型选项将 samba 共享挂载到本地 Linux 系统中的目录。

$ mkdir -p ~/mounts/shares
$ mount -t cifs -o username=user1 //192.168.122.52/user1 ~/mounts/shares
$ df -h
Filesystem              Size  Used Avail Use% Mounted on
/dev/vda1                40G  2.9G   38G   8% /
devtmpfs                488M     0  488M   0% /dev
tmpfs                   496M     0  496M   0% /dev/shm
tmpfs                   496M  6.7M  489M   2% /run
tmpfs                   496M     0  496M   0% /sys/fs/cgroup
tmpfs                   100M     0  100M   0% /run/user/1000
//192.168.122.52/user1  9.2G  1.6G  7.6G  18% /home/computingforgeeks/mounts/shares

使用 fstab 挂载 Samba 共享。

您可以使用 fstab 文件通过系统重新引导来保持 Samba 共享挂载。在我的示例中，我将以下行添加到 /ect/fstab 文件的末尾。

//192.168.122.52/user1  /mnt/shares cifs credentials=/.sambacreds 0 0

然后我创建了一个凭据文件。

$ cat /.sambacreds
username=user1
password=password
domain=WORKGROUP

测试 ：

$ sudo mkdir -p /mnt/shares
$ sudo mount -a
$ df -hT | grep cifs
//192.168.122.52/user1 cifs      9.2G  1.6G  7.6G  18% /mnt/shares

对于 Windows 桌面计算机，请遵循在 Windows 上安装 Samba 共享的标准流程。这就是如何在 Ubuntu 22.04|20.04|18.04 上安装和配置 Samba。
