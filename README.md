# Vip 网站实战

## 技术栈

前端：React + react-router + axios + TypeScript + Recoil + Hooks+cssnext
后端：BFF Node Koa Serverless 函数计算  OSS（不需要关注运维，nginx，直接放在OSS就行（最大100m））

## 技术点

### 1.微信扫码登录(多方登录使用一个id认证)
只有登录成功之后才能进入跳转

### 2. markdown 渲染

### 3. 防爬虫（字体方法的设置，需要特殊字体去解密2，增加爬虫的难度；接口返回值是乱码）

瀃巆廞194: var arr =[[‘A’,’B’],[‘a’,’b’],[1,2]] 求二维数组的全排列组合 结果：婨巆1,婨巆2,婨婾1,婨婾2,噕巆1,噕巆2,噕婾1,噕婾2

### 4. pdf渲染

### 5. 字体版权

### 6. 书籍特效

https://tympanus.net/Development/AnimatedBooks/index2.html

思源雅黑

## 前台代码实战

### 1. cli脚手架

### 2. 页面实现

- 写页面
- 完善路由
- 封装一下axios

## 技术点

- 字体加密
  - 请求题目解析内容，markdown 字符串
  - markStr 遍历把 数字，字母 替换为特殊的unicode码 &#x6529;&#x651f;&#x7009;
  - &#x6529;=> A,&#x6529;=> B;  这个对应规则只有字体知道
  - 字体是我们动态生成，去解密

- 服务端返回加密内容与字体
- 然后前端渲染加密内容，这时才去请求字体
- 字体加载完，才能看到正确的内容。

- 这里边如果每次都动态生成字体是非常耗时。
-  提前每隔一段时间生成100套字体。// 几k
- 扫码登录 
    qr+uuid
    https://github.com/yi-ge/weixin-login
    微信开放平台
    unionid统一




https://help.aliyun.com/product/50980.html  函数计算