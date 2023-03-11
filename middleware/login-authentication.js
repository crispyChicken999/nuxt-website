export default function ({ store, redirect }) {
  // 登录了打开登录页-跳转到个人中心
  if (store.state.account.loginState) {
    return redirect("/account");
  }
}
