# 安装与调试

## 安装

首先打开终端安装 typescript

```sh
sudo npm install -g typescript
```

使用命令验证 typescript 是否安装成功

```sh
tsc -v
```

如果报 tsc 命令找不到，可以尝试重启一下终端，如果重启终端还不生效，可以尝试以下方法

以 mac 示例，执行命令查看环境变量

```sh
nano ~/.zshrc
```

查看是否有类似以下的代码

```sh
export PATH="/usr/local/bin:$PATH"
```

如果没有的话，执行以下命令

```sh
npm prefix -g
```

这将显示 npm 全局安装的根路径。假设我们的根路径为：`/Users/LiHua/.npm-global`

然后编辑 `~/.zshrc` 添加

```sh
export PATH="$PATH:/Users/LiHua/.npm-global/bin"
```

再重启运行`tsc -v`就可以看到版本号了

## 调试

新建一个 `demo` 文件夹，新增一个`index.ts`文件，执行以下命令编译 ts 文件

```sh
tsc index.ts
```

执行完命令后会得到一个 `index.js` 文件，然后再运行 `node index.js` 就可以查看到运行结果了

### 调试监听

先执行以下命令初始化，执行完后会创建 `tsconfig.json` 文件

```sh
tsc --init
```

然后执行以下命令监听 ts 文件的变化并实时编译到 js 文件

```sh
tsc -w
```

### ts-node

每次运行都要编译或者监听后执行`node index.js`未免过于繁琐了些，所以可以使用 `ts-node`

打开终端

```sh
sudo npm install -g ts-node
```

然后在 demo 文件夹下执行命令就可以得到调试结果了

```sh
ts-ndoe index.ts
```
