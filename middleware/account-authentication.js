export default function ({ store, redirect }) {
  // 没登录打开个人中心-跳转到登录页
  if (!store.state.account.loginState) {
    return redirect("/login");
  }
}
