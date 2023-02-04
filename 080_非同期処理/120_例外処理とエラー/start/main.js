// エラーが発生した際に飛ぶ特別な処理

// try {
//   console.log("s");
//   throw new Error("eです");
//   console.log("e");
// } catch (e) {
//   console.log(e);
// } finally {
//   console.log("bye");
// }
async function fetchUsers() {
  const response = await fetch("users.json");
  if (response.ok) {
    const json = await response.json();
    if (!json.length) {
      throw new NoDataError("np data found");
    }
    return json;
  }
}

class NoDataError extends Error {
  constructor(message) {
    super(message);
    this.name = "NoDataError";
  }
}

async function init() {
  try {
    const users = await fetchUsers();
    for (const user of users) {
      console.log(`I'm ${user.name}, ${user.age} years old`);
    }
  } catch (e) {
    // 条件分岐とかでカスタムエラーを判定するこができるようになる
    if (e instanceof NoDataError) {
      console.log(e);
    }
  } finally {
    console.log("bye");
  }
  console.log("end");
}
init();
