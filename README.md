# angular4-Bootstrap4-admin

项目地址预览地址:

项目介绍:ng4+b4+融云 活动聊天,从零到bulid的过程,以及ng-bootstrap的坑 , 

1,项目暂时不去展示ng4的一些组件,主要展示 Ngb 的用法以及 ng4的简单用法,针对刚学习ng4的同学 

2,项目 , 展示了真实的增删改查 ,分页 ,等

3,项目 展示了 登录 以及工作区域 子路由的配置关系

4,项目 展示了 若何把http封装成 一个公共的  server

5,项目展示了 b4 的引用 以及 他的常用组件的用法

6,项目展示了 b4 的 皮肤制作

7,当你用b4开发后台的时候,不知道该选用什么UI,那么不妨看看 [primeNg](https://v4.bootcss.com/)

项目目前基于

[Angular4](https://angular.cn/docs/ts/latest/quickstart.html) [Angular CLI]

[Angular CLI](https://cli.angular.io/) [Angular CLI]

[Bootstrap4](https://v4.bootcss.com/) version ` ^4.0.0-beta`.[Bootstrap4]

[js-base64](https://github.com/dankogai/js-base64) version `2.1.5`.[js-base64]

[ngx-uploader](https://github.com/jkuri/ngx-uploader) version `^3.0.5`.[ngx-uploader]目前没写

[项目预览]() version `1.1.0`.

## 下载node （下载最新稳定版本即可）
  
 下载 Nodejs( v6 or v7)
Install Nodejs( v6 or v7)

## 下载@angular/cli （目前版本@angular/cli": "^1.5.2"）

npm 下载   npm install -g @angular/cli

如果下载cli失败,`请尝试管理员身份运行CMD` 尝试下载 

npm install  (下载依赖的时候cnpm快,但是直接下载的可能有问题,另外教大家一个,首先用npm下载,若果碰到有个文件下不下来报错,切换成cnpm跑完,那么就可以了)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

如果你想得到更小的包 Run `ng build --prod --aot`

## typings.d.ts(系统模块定义)

  例如 declare var $:any;是全局对$符号的定义，可以全局使用jquery，不必在每个组件定义。

## angular-cli.json(angular脚手架，运行ng的命令首先要执行他里面的code)

 **常用code简述**
    root //根目录
    outDir //打包之后的文件名称
    assets //插件及imasge
    index //主页
    main //ts入口文件
    styles :样式类插件引入，优先加载
    scripts：js插件引入，优先加载
## styles.css（全局css,一般都是公共css）   可用于覆盖 node_modules里的插件模块
    // "../node_modules/bootstrap/dist/css/bootstrap.css",  // "../node_modules/font-awesome/scss/font-awesome.scss",
    优化版本是core.min.css

typesc
## 效果图

![缩略图](src/assets/image/md/2.png)


#### 对于webstorm的朋友如果下下来抱tslint错误,可以把tslint关闭了

![缩略图](src/assets/image/md/3.png)
![缩略图](src/assets/image/md/4.png)

## 更新记录
2017/11/20

1,更新cli版本以及Bootstrap4版本




# 关于


大家若果感觉有帮助,可以帮忙点个star, O(∩_∩)O~~~ ,我会继续更新的

2  欢迎大家来一起学习,我会积极回答大家的问题,一起学习ng以及Bootstrap4的 O(∩_∩)O~~

我的QQ  574495412
