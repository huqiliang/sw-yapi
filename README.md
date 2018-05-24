## 原理

将 post 的数据存储成一个 json,调用 shell(yapi import)执行导入

## 安装

`git clone project && npm install`

## 使用

提交一个 post json 到 /api/yapi

`{ "type": "swagger", "token": "17fba0027f300248b804", "file": "swagger.json", "merge": false, "server": "http://yapi.local.qunar.com:3000" }`

参考资料：

https://yapi.ymfe.org/documents/data.html#%E9%80%9A%E8%BF%87%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%AF%BC%E5%85%A5%E6%8E%A5%E5%8F%A3%E6%95%B0%E6%8D%AE
