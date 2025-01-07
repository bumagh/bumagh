brotli on;
brotli_comp_level  6;
brotli_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript image/svg+xml;



在某些 Linux 发行版中，特别是 Debian 系列的系统（如 Ubuntu 或 Debian），可能没有预装或提供 `nginx-module-brotli` 包，因此您无法通过 `apt-get` 命令直接安装该模块。在这种情况下，您需要手动安装 **Brotli 模块** 到 Nginx 中。

### 解决方案：手动编译 Nginx 和 Brotli 模块

为了支持 Brotli 压缩，您需要编译 Nginx 和 Brotli 模块。以下是如何在 Debian 系统上手动编译并安装支持 Brotli 的 Nginx 的步骤。

#### 步骤 1：安装编译 Nginx 的必要依赖

首先，您需要安装构建 Nginx 所需的依赖项。

```bash
sudo apt-get update
sudo apt-get install -y build-essential libpcre3 libpcre3-dev libssl-dev zlib1g-dev
sudo apt-get install -y git
```

#### 步骤 2：下载 Nginx 源代码

接下来，您需要下载 Nginx 源代码。

```bash
cd /usr/local/src
sudo wget https://nginx.org/download/nginx-1.22.0.tar.gz
sudo tar -xzvf nginx-1.22.0.tar.gz
cd nginx-1.22.0
```

> 请注意，这里使用的是 Nginx 1.22.0 版本，您可以根据需要选择最新版本，或者从 [Nginx 官方下载页面](https://nginx.org/en/download.html) 获取其他版本。

#### 步骤 3：下载并准备 Brotli 模块

接下来，我们需要下载 **Brotli** 模块。

```bash
cd /usr/local/src
git clone --recursive https://github.com/google/ngx_brotli.git
```

#### 步骤 4：编译 Nginx 和 Brotli 模块

现在，您需要编译 Nginx 并包含 Brotli 模块。首先，进入 Nginx 源代码目录，执行配置和编译过程。

```bash
cd /usr/local/src/nginx-1.22.0
sudo ./configure --with-compat --add-dynamic-module=/usr/local/src/ngx_brotli
sudo make
sudo make install
```

- `--with-compat`：启用动态模块支持。
- `--add-dynamic-module=/usr/local/src/ngx_brotli`：添加 Brotli 模块。

如果编译成功，您将会看到相关输出，并且新的 Nginx 可执行文件将被安装在 `/usr/local/nginx/` 下。

#### 步骤 5：配置 Nginx 加载 Brotli 模块

安装完成后，您需要确保 Nginx 启动时加载 Brotli 模块。编辑 Nginx 的配置文件 `/usr/local/nginx/nginx.conf`，并添加以下内容：

```bash
load_module modules/ngx_http_brotli_filter_module.so;
load_module modules/ngx_http_brotli_static_module.so;
```

您需要将这两行放到 `nginx.conf` 文件的顶部，`http` 块之前。这样，当 Nginx 启动时，它会加载 Brotli 模块。

#### 步骤 6：启动 Nginx

在安装和配置完毕之后，您可以启动 Nginx。

```bash
sudo /usr/local/nginx/sbin/nginx
```

如果您已经有旧的 Nginx 服务在运行，可能需要先停止它，然后再启动新版本。

```bash
sudo service nginx stop
sudo /usr/local/nginx/sbin/nginx
```

#### 步骤 7：验证 Brotli 模块是否工作

启动 Nginx 后，您可以通过以下命令来确认 Brotli 模块是否正确加载：

```bash
/usr/local/nginx/sbin/nginx -V
```

在输出中，您应该看到类似于以下内容，表示 Brotli 模块已经加载：

```bash
--add-dynamic-module=/usr/local/src/ngx_brotli
```

#### 步骤 8：配置 Nginx 使用 Brotli

配置好 Brotli 模块后，按照之前的步骤配置您的 Nginx 文件来启用 Brotli 压缩。确保在 `nginx.conf` 或相应的站点配置文件中启用 `brotli` 压缩：

```nginx
http {
    brotli on;
    brotli_comp_level 6;
    brotli_static on;
    brotli_types text/plain text/css application/javascript application/json application/wasm image/svg+xml;

    gzip on;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/javascript application/json application/wasm image/svg+xml;
}
```

### 总结

1. **安装依赖和工具**：使用 `apt-get` 安装构建所需的工具和库。
2. **下载 Nginx 和 Brotli 模块**：从 Nginx 官网下载源代码，并从 GitHub 下载 Brotli 模块。
3. **编译 Nginx 并启用 Brotli**：通过 `./configure` 命令编译 Nginx，并启用 Brotli 模块。
4. **加载和配置 Brotli 模块**：在 Nginx 配置文件中加载 Brotli 模块，并启用相应的压缩类型。
5. **启动 Nginx**：启动新编译的 Nginx，确认 Brotli 模块已加载，并通过网络请求验证其工作。

通过这些步骤，您可以手动安装和配置 Nginx 以支持 Brotli 压缩，从而更好地支持 Unity WebGL 构建的 Brotli 压缩文件。




    cd /www/server
git clone https://github.com/google/ngx_brotli
cd ngx_brotli && git submodule update --init

-add-module=/www/server/ngx_brotli