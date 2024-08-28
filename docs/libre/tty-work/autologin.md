# bash_profile
```bash
# automatically login into sway
if [ -z $DISPLAY ] && [ "$(tty)" = "/dev/tty1" ]; then
  exec sway
fi

```
# systemctl edit getty@tty1
[Service]
ExecStart=
ExecStart=-/sbin/agetty --autologin $username --noclear %I $TERM
# systemctl set-default multi-user.target
# systemctl set-default graphical.target 
 此步骤是可选 的。如果您不想看到 GRUB 引导 每次计算机启动时的屏幕，请打开 /etc/default/grub 作为 root，然后更改 GRUB_TIMEOUT 到小于 5 的东西。我将其设置为 1。

...
GRUB_TIMEOUT=1
...

然后继续应用更改

sudo update-grub

重启并享受！如果你把 0 对于超时，按 这 Shift 键（用于 BIOS）或 Esc 键（用于 UEFI） 当系统启动时，将调出 GRUB 菜单。

快乐黑客，祝你有美好的一天！ 
