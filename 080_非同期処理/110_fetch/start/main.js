// jsonの異なる点
// ダブルクォーテーション必須
// オブジェクトはプロパティはダブルクォーテーション
// 最後はカンマをつけない

// fetch("users.json")
//   .then(function (response) {
//     // console.log(response.json());
//     return response.json();
//   })
//   .then(function (json) {
//     console.log(json);
//     for (const user of json) {
//       console.log(`IM ${user.name},${user.age} yaers old`);
//     }
//   });

// Promiseをawaitでまつ
async function fetchFnc() {
  const res = await fetch("users.json");
  const json = await res.json();
  for (const user of json) {
    console.log(`IM ${user.name},${user.age} yaers old`);
  }
}

fetchFnc();
