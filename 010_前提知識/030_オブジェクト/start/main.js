let obj = {
  prop1: "value1",
  prop2: "value2",
  //   メソッド：オブジェクトのプロパティに格納された関数
  prop3: function () {
    console.log("value3");
  },
  prop4: {
    prop5: "value5",
  },
};

// ドット記法
console.log(obj.prop1);
// ブラケット記法
console.log(obj["prop4"]["prop5"]);

obj.prop6 = "value6";

console.log(obj.prop6);
