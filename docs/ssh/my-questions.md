# port 22: Connection refused
 ssh文件夹下没有sshd_config,只安装了客户端，没有安装服务端
 ```sh
    sudo apt install -y openssh-server
 ```

# raw.githubusercontent.com connection refused
https://www.ipaddress.com/ 查询raw.githubusercontent.com的ip地址
编辑hosts

# git 22 port timeout
```bash

ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIMTkjvczUYViarteT2nDHEWJixTkBwVYFGAFpSKCImqk g@g-Aspire-One-522
```
$ vim ~/.ssh/config
```
# Add section below to it
Host github.com
  Hostname ssh.github.com
  Port 443
```
