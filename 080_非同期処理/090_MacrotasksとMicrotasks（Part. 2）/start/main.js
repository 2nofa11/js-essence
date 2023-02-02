//　マイクロタスクとマクロタスクが混ざっている
new Promise(function promise(resolve) {
  console.log("promise");

  setTimeout(function task1() {
    console.log("task1");
    // 非同期処理内にresolveが存在する。
    resolve();
  });
})
  .then(function job1() {
    console.log("job1");
    setTimeout(function task1() {
      console.log("task2");
      queueMicrotask(function job4() {
        console.log("job4");
      });
    });

    const p = Promise.resolve();
    p.then(() => {
      console.log("job5");
    });
  })
  .then(function job2() {
    console.log("job2");
  })
  .then(function job3() {
    console.log("job3");
  });

console.log("global end");
