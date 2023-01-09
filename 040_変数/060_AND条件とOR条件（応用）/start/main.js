function hello(name) {
  //   if (!name) {
  //     name = "Tom";
  //   }
  name = name || "Tom"; // 数字0もfalse
  console.log("hello" + name);
}

hello("Bob");
hello();

let name = "";
name && hello(name); //TFで関数の実行を制御している
