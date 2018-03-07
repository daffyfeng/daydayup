function f() { console.log('I am outside!'); }

(function () {
  function f() { console.log('I am inside!'); }
  if (false) {
  }
  f();
}());

/*
    Node 下执行结果 I am inside!
    Chrome 下结果也是 I am inside!

    emmm..... 我还是避免这种骚操作好了
*/