>up.txt
>down.txt
for i in {1..254}
do
        ( if ping -c 1 -W 1 192.168.3.$i &>/dev/null ;then
        echo "192.168.3.$i up"|tee -a up.txt
        else
                echo "192.168.3.$i down"
                echo "192.168.3.$i" >>down.txt
        fi )&
done
wait
