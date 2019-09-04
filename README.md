<p align="center"><a href="http://www.dendoink.com" style="display: flex;
    justify-content: center;" target="_blank" rel="noopener noreferrer"><img style="width: 20%;
    height: 100%;border-radius: 3%;" src="http://ww1.sinaimg.cn/large/88b26e1cly1fz2gxpm5c0j215o0dwjrb.jpg" alt="Align logo"></a></p>

> A beautiful blog generator

### 项目说明

[->项目说明@掘金](https://juejin.im/post/5b53f9c4e51d4513ee6dcd3f)<br>

### 推送配置

1. dist 推送:在目录`@/config/index.js`中配置如下字段:

```javascript
module.exports = {
  // 编译后的目录 对应的远程仓库，默认你有配置过远程仓库的SSH key
  distOriginSSh: 'git@github.com:xxx/xxx-blog-xxx.git'
};
```

> 配置好之后，`npm run build` 将会把`dist`下的代码推送到地址`git@github.com:xxx/xxx-blog-xxx.git`对应的仓库中

2. `commit`记录信息：默认为 `npm run build` 如果你在 `build`后追加了其他信息，那这部分的信息会作为 commit message 被提交。
   > 如果你想自定义提交信息的内容，可以在`@/config/index.js`中配置`commitMessage`属性

```javascript
module.exports = {
  // commit messgae
  commitMessage:
    process.argv.length === 3
      ? `${process.argv[2]}:[${moment().format(
          'dddd, MMMM Do YYYY, h:mm:ss a'
        )}]`
      : `AutoUpdate:[${moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}]`
};
```

3. 评论系统的配置

- 在目录`@/config/index.js`中先配置以下信息

```javascript
comments: {
    // commetsRepo : 'gihub用户名/comments存储的仓库名'
    repo: '',
    // github-light | github-dark 主题
    theme: 'github-light'
  },
```

- 配置[utteranc](https://utteranc.es/)相关信息

4. 个人信息配置

```javascript
userInfo: {
    name: 'name',
    phone: '1XX-XXXX-XXXX',
    site: 'www.yoursite.com',
    email: 'youemail@xmail.com',
    birth: 'December 10,1991',
    skills: [
      { label: 'HTML', percentage: '80%' },
      { label: 'CSS3', percentage: '60%' },
      { label: 'Javascript', percentage: '60%' },
      { label: 'jQuery', percentage: '50%' },
      { label: 'React', percentage: '60%' },
      { label: 'Vue', percentage: '60%' },
      { label: 'Mini-Program', percentage: '60%' },
      { label: 'Git', percentage: '70%' },
      { label: 'Webpack', percentage: '50%' }
    ],
    // 你所在的城市
    location: 'Shanghai,CN',
    // 职位
    jobTitle: 'Frontend Developer',
    // 个人描述
    description: 'Things we do are all for love'
  },
```

5. Landing 页面配置

```javascript
 ladingInfo: {
    // landing 显示的名称
    blogName: 'Dendionk',
    tagA: 'Dreamer',
    tagB: 'Coder',
    tagC: 'Writter',
    github: '',
    twitter: '',
    email: '',
    linkedIn: ''
  },
```

6. 主仓库推送: 未提供配置字段，当前仓库默认为主仓库

7. 服务器配置:自动拉取更新后的代码[待补充]

### 配置完成后预览本地,以及上传测试

```bash
# install dependencies
yarn

# 调试
yarn dev

# 打包推送代码到对应仓库
yarn build
```

### Blog 使用的 Markdown 语法说明

[->语法说明链接](https://github.com/DendiSe7enGitHub/vue-blog-generater/blob/master/markdown.md)

### 开发中的功能

<table>
  <tr>
    <th>功能</th>
    <th>进度</th>
    <th>最近更新时间</th>
  </tr>
  <tr>
    <td>Resume简历页面</td>
    <td>开发完成</td>
    <td>2018-11-30</td>
  </tr>
  <tr>
    <td>评论系统</td>
    <td>已接入[utteranc](https://utteranc.es/)</td>
    <td>2018-12-06</td>
  </tr>
  <tr>
    <td>友链</td>
    <td>样式和形式待定</td>
    <td>2018-12-06</td>
  </tr>
  <tr>
    <td>Reward页</td>
    <td>样式和形式待定</td>
    <td>2018-12-06</td>
  </tr>
  <tr>
    <td>自动化部署</td>
    <td>完成:在npm run build 之后，会自动推送到对应仓库，结合对应的托管平台的hooks，已经实现本地编译->远程服务器更新</td>
    <td>2018-12-06</td>
  </tr>
   <tr>
    <td>photo gallery</td>
    <td>完成</td>
    <td>2019-01-15</td>
  </tr>
  <tr>
    <td>上一篇下一篇取消，改成推荐阅读</td>
    <td>形式样式设计中</td>
    <td>2019-01-15</td>
  </tr>
  <tr>
    <td>权限设置，高级权限可以查看私密图片等</td>
    <td>形式样式设计中</td>
    <td>2019-08-26</td>
  </tr>
</table>
<!--
https://i.loli.net/2019/08/26/ADUeyWXb8lHPYh1.jpg
https://i.loli.net/2019/08/26/IWuGh5F2jBxl37Q.jpg
https://i.loli.net/2019/08/26/PuZxbpAdsCVHLFg.jpg
https://i.loli.net/2019/08/26/KcLPnIV1EpArJv8.jpg
https://i.loli.net/2019/08/26/kV8aYh9Gy2PTsAg.jpg
https://i.loli.net/2019/08/26/qcK98vW14iADCy5.jpg
https://i.loli.net/2019/08/26/fEtRyr3aWLPzANZ.jpg
https://i.loli.net/2019/08/26/8lJK2vhEkLOeQwD.jpg
https://i.loli.net/2019/08/26/rBKeuCsDqgjhR6k.jpg
https://i.loli.net/2019/08/26/7GU4VcEnhHLlrAq.jpg
https://i.loli.net/2019/08/27/apzM26GrilWFweq.jpg
https://i.loli.net/2019/08/27/xrE9cRSmYXihaz7.jpg
https://i.loli.net/2019/08/27/Ydy852murHtTVLv.jpg
https://i.loli.net/2019/08/27/w9oifgYkxBbzRMH.jpg
https://i.loli.net/2019/08/27/1NRPWxYnSmQTO3V.jpg
https://i.loli.net/2019/08/27/F4KUrlSCQBYcdX1.jpg
https://i.loli.net/2019/08/27/5vguTOEHQcpeBUd.jpg
https://i.loli.net/2019/08/27/CwUoPXMecLYhj9v.jpg
https://i.loli.net/2019/08/27/zdSrnNupUEoKWhk.jpg
https://i.loli.net/2019/08/27/p2OLtrY1h3mBJUM.jpg
https://i.loli.net/2019/08/27/zJaKPb5C2LmNW4O.jpg
https://i.loli.net/2019/08/27/iSuAoBdItMmZ8TW.jpg
https://i.loli.net/2019/08/27/weAYUL6QISsgtdF.jpg
https://i.loli.net/2019/08/27/fTtKCn36JOdrQGw.jpg
https://i.loli.net/2019/08/27/yECBskXwYKiVx2h.jpg
https://i.loli.net/2019/08/27/YW93zQslkf2KjTR.jpg
https://i.loli.net/2019/08/27/iSERgA3Zuc5yCLb.jpg
https://i.loli.net/2019/08/27/dfpwt4uqAvYKies.jpg
https://i.loli.net/2019/08/27/wWPyAihdI1c4RxL.jpg -->
