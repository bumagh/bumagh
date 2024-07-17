# 如何显示电池电量百分比
export SXMO_BAR_SHOW_BAT_PER=1 在~/.config/sxmo/profile
${alignc}${font goto:size=22:style=Bold}${exec echo "功率： "}${exec upower -d | grep -m1 '百分比：' | awk '{print $2}'} 在~/.config/sxmo/conky.conf


# 将 sxmo 的栏移到手机的凹槽下方
找到栏目入口，~/.config/sxmo/sway并添加间隙配置。

bar { gaps 42 0 }

参见https://todo.sr.ht/~mil/sxmo-tickets/494和https://man.archlinux.org/man/sway-bar.5.en


# 绕过 Notch
通过在缺口区域填充一些无用的东西。如果还没有完成，

cp /usr/share/sxmo/default_hooks/sxmo_hook_statusbar.sh ~/.config/sxmo/hooks/
然后在电池和 wifi 符号之间添加几个 ooooo，就在包含

sxmobar -a -f "$fgcolor" -b "$bgcolor" -t "$style" \
将此行添加到钩子中：

sxmobar -a 缺口 22 oooooooooo
然后在 swaybar 中禁用托盘图标：

nano ~/.config/sxmo/sway

向下滚动到 Status Bar: 部分，然后在下面position top 添加 tray_output none


然后重新启动并享受。

# vi显示中文
vimrc
set fileencodings=utf-8,ucs-bom,gb18030,gbk,gb2312,cp936
set termencoding=utf-8
set encoding=utf-8