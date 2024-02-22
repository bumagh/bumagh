# lwan

lwan.ws
https://github.com/lpereira/lwan

## clone

```bash
git clone git@github.com:lpereira/lwan.git
cd lwan
```

## build

```bash
mkdir build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Debug
make
sudo make install
```
可选

    cmake .. -DCMAKE_BUILD_TYPE=Release
    cmake .. -DCMAKE_BUILD_TYPE=RelWithDebInfo

## issue

https://github.com/lpereira/lwan/issues/361

- zlib?

```bash
sudo apt install zlib1g zlib1g-dev
```

- liblwan.so not found? /usr/local/lib 替换为 liblwan.so 的位置

```bash
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib
```

```fish
set -x LD_LIBRARY_PATH /usr/local/lib
```
