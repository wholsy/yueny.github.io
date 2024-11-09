# cloudflare & github

## 构建和部署
### 框架预设
VUE

### 构建命令
```
node --version 
&& rm -rf ./dist && pwd && ls -lh 
&& cd ./docs 
&& pnpm install && pnpm docs:build
```

### 构建输出目录
```text
/dist
```

### 根目录
```text
/
```

### Env 变量
NODE_VERSION: 20.5.1

### 自定义域名
```text
doc.rszone.me
```