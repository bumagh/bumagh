# set up ssh
```sh
 vim /etc/ssh/sshd_config
 PasswordAuthentication no
 ChallengeResponseAuthentication no
 UsePAM no
 chmod 700 .ssh
 chmod 600 .ssh/*
```

# on windows use psftp
```sh
open root@vmdev
put xxx/id_rsa.pub
cat id_rsa.pub >> ~/.ssh/authorized_keys
```

# use scp
 从本地拷贝到远程服务器
```sh
scp -r xxx root@xxx:/root 
```
从远程服务器下载
```sh
scp -r root@xxx:/root xxx
```

# if you are user group and you have root
```sh
chmod 777 -Rf xxx
```

