/**
 * 問題：
 * ログインの制御を行うloginController
 * という名前の関数が存在します。
 * この関数はuserインスタンスを渡すと
 *
 * ログイン処理（login）
 * ->ユーザー権限チェック（checkRoll）
 * ->適切なページへのリダイレクト（redirect）
 *
 * を内部で行います。
 *
 * 以下の呼び出し方をした場合に該当のメッセージが
 * コンソールに出るように実装してみてください。
 *
 ****************************************
 * １．一般ユーザーがログインした時。
 * loginController(new User('Bob'));
 *
 * ログイン成功した場合：
 * User: Bob
 * you have normal roll
 * redirect : /
 * login success
 *
 * ログイン失敗した場合：
 * User: Bob
 * you have normal roll
 * login failed <- checkRollで失敗した場合
 *
 ****************************************
 * ２．管理者（AdminUser）でログインした場合
 * loginController(new AdminUser('Bob'));
 *
 * ログイン成功した場合：
 * User: Bob
 * you have admin roll
 * redirect : /admin
 * login success
 *
 * ログイン失敗した場合：
 * User: Bob
 * login failed <- loginで失敗した場合
 */

// どういった処理を踏まえているか機能ごとに分割すると可読性が高い
// 既存のコードに影響を与えず開発することができる
function loginController(user) {
  if (user.login() && user.checkRoll() && user.redirect()) {
    console.log("login success");
  } else {
    console.log("login failed");
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.roll = "normal";
    this.redirectPath = "/";
    this.loginFlg = true;
    this.rollFlg = true;
    this.redirectFlg = true;
  }
  login() {
    console.log(`User: ${this.name}`);
    return this.loginFlg;
  }
  checkRoll() {
    console.log(`you have ${this.roll} roll`);
    return this.rollFlg;
  }
  redirect() {
    console.log(`Redirect: ${this.redirectPath}`);
    return this.redirectFlg;
  }
}

class AdminUser extends User {
  constructor(name) {
    super(name);
    this.roll = "admin";
    this.redirectPath = "/admin";
  }
}

// loginController(new User("bob"));
loginController(new AdminUser("bob"));
