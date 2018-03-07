Promise
=========

<pre>
const p1 = new Promise((resolve,rejecy) => {
    if(/* 成功条件 */){
        resolve('success')
    }else{
        reject('err')
    }
})
</pre>

Promise通常就是这样定义了，今天看了大佬的书 [ECMAScript 6 入门](http://es6.ruanyifeng.com/#docs/promise)
好好看了下Promise，发现和以前理解的很不一样。。。。

> Promise在创建后会立马执行

Promise在**新建后会立马执行**，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，

意思就是下一轮事件循环里执行？？？？感觉应该是这样

then方法是在Promise状态**发现变化之后才会执行**的，以前我就想的是，反正是then里面去拿Promise的结果，管它啥
时候执行的

> 几个Promise嵌在一起的时候的运行顺序



这个例子当时第一眼，就看傻了
<pre>
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})

p2
  .then(result => console.log(result))
  .catch(error => console.log(error))
</pre>

resole返回的是另一个Promise，p1，p2依次开始执行，但是p1要3s之后才会reject一个error出来，
p2只需要1s就可以resolve一个p1。这个时候p1还在等待呢

这个时候大佬告诉我，**如果p1的状态是pending，那么p2的回调函数就会等待p1的状态改变**

总共花了3s，p2执行完了之后，等了p1 2s，总的花了3s

> Promise.prototype.catch方法是.then(null, rejection)的别名

catch(errorhandle) 和 .then(null, errorhandle)是一样的
<pre>
p.then((val) => console.log('fulfilled:', val))
  .catch((err) => console.log('rejected', err));

// 等同于
p.then((val) => console.log('fulfilled:', val))
  .then(null, (err) => console.log("rejected:", err));
</pre>
catch还能捕获then中产生的异常
所以，我还是用.catch处理我的异常好了

> 待续