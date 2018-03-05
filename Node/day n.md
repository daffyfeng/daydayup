Node中踩坑之旅
========================

最近有个项目，需要将一个.Net应用迁移到Node上，.Net上正常情况下都是同步执行，

但是转移到Node上，因为Node本身就是异步，结果撸起代码来非常不适应，非常难受。

以前在.Net下非常容易完成的功能，到了Node，抠了半天脑壳，才搞定。

谨以此文记录我踩的那些坑

>## 第一个坑，框架哪家强
我想要一个restful风格的API，网上找了一圈，看到两个号称对于我这种初学者很友善的框架

**Express和Koa**

**Express**官网上的描述：Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用

**Koa**官网上的描述：koa 是由 Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的 Web 框架。 使用 koa 编写 web 应用，通过组合不同的 generator，可以免除重复繁琐的回调函数嵌套， 并极大地提升错误处理的效率。koa 不在内核方法中绑定任何中间件， 它仅仅提供了一个轻量优雅的函数库，使得编写 Web 应用变得得心应手。

光凭这个描述，emmmmm 感觉koa要好些，就这么愉快的决定了
此处省略一万字

>## 第二个坑，我需要连接mssql
emmmmm 最后我选了mssql这个模块，没啥好说的，就是用起来不习惯
此处省略一万字


>## 第三个坑，我需要对zip文件进行压缩解压
最开始找了jszip这个模块，用起来感觉也挺好的，我把压缩包里面的数据都拿出来了，等我想要解压的时候
emmmm 才发现不支持解压。。。。。。。。
此处省略一万字

>## 第四个坑，因为上面几个坑，我用了不少异步的方法
到头来我发现，我以前代码里面好好的同步流程，变成异步了
我发现，按照以前那样写代码，写出来的完全用不了

无奈之下，找了个async这个库
目前就用了async.connect(coll, iteratee, callback)，能把我那些变成异步的流程最后给掰回来
此处省略一万字


先写到这了，后面再想想怎么写吧。。。。



