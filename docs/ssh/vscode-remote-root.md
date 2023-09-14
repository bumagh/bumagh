# set up ssh
```sh
 vim /etc/ssh/sshd_config
 PasswordAuthentication no
 ChallengeResponseAuthentication no
 UsePAM no
```

# on windows use psftp
```sh
open root@vmdev
put xxx/id_rsa.pub
cat id_rsa.pub >> ~/.ssh/authorized_keys
```

# if you are user group and you have root
```sh
chmod 777 -Rf xxx
```