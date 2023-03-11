<template>
  <div class="login-page">
    <common-header></common-header>
    <div class="login-section">
      <div class="login-main-content">
        <div class="login-background">
          <img
            src="~assets/imgs/login/login-background.png"
            alt="login-background"
          />
        </div>
        <div class="login-left-section">
          <div class="desc">
            <p>灵活多样的EMI购买方案</p>
            <p>满足各规模纺织企业的协同业务融合需求</p>
          </div>
          <img
            src="~assets/imgs/login/login-left-decoration.png"
            alt="login-left-decoration"
          />
        </div>
        <div class="login-right-section">
          <el-tabs
            v-if="operationType === 'login'"
            v-model="loginType"
            @tab-click="switchLoginType"
          >
            <el-tab-pane label="密码登录" name="password">
              <div class="password-login-content">
                <el-form ref="passwordLoginForm" :model="loginForm">
                  <el-form-item
                    prop="phone"
                    :rules="[
                      {
                        required: true,
                        validator: phoneNumberValidator,
                        trigger: 'change',
                      },
                      {
                        required: true,
                        validator: loginPhoneNumberExistValidator,
                        trigger: 'blur',
                      },
                    ]"
                  >
                    <el-input
                      v-model="loginForm.phone"
                      class="phone"
                      placeholder="请输入手机号"
                      clearable
                      maxlength="11"
                    >
                      <template slot="prefix">
                        <i class="iconfont icon-solid-home"></i>
                      </template>
                    </el-input>
                  </el-form-item>
                  <el-form-item
                    prop="password"
                    :rules="{
                      required: true,
                      validator: passwordValidator,
                      trigger: 'change',
                    }"
                  >
                    <el-input
                      v-model="loginForm.password"
                      class="password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      placeholder="请输入密码"
                      maxlength="16"
                      @keyup.native.enter="confirmLogin"
                    >
                      <template slot="prefix">
                        <i class="iconfont icon-password"></i>
                      </template>
                      <template slot="suffix">
                        <i
                          class="iconfont"
                          :class="
                            isPasswordVisible
                              ? 'icon-password-visible'
                              : 'icon-password-invisible'
                          "
                          @click="togglePasswordVisible"
                        ></i>
                      </template>
                    </el-input>
                  </el-form-item>
                </el-form>
                <div class="login-operation-section">
                  <el-checkbox v-model="isRemenberAccount"
                    >记住账号</el-checkbox
                  >
                  <el-button
                    type="text"
                    class="forget-my-password"
                    @click="clickToResetPassword"
                    >忘记密码?</el-button
                  >
                </div>
                <el-button round class="login-btn" @click="confirmLogin"
                  >登录</el-button
                >
                <div class="click-to-register">
                  <el-button
                    type="text"
                    class="register-btn"
                    @click="clickToRegister"
                    >立即注册</el-button
                  >
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="验证码登录" name="sms">
              <div class="sms-login-content">
                <el-form :model="loginForm" ref="smsLoginForm">
                  <el-form-item
                    prop="phone"
                    :rules="[
                      {
                        required: true,
                        validator: phoneNumberValidator,
                        trigger: 'change',
                      },
                      {
                        required: true,
                        validator: loginPhoneNumberExistValidator,
                        trigger: 'blur',
                      },
                    ]"
                  >
                    <el-input
                      v-model="loginForm.phone"
                      class="phone"
                      placeholder="请输入手机号"
                      clearable
                      maxlength="11"
                    >
                      <template slot="prefix">
                        <i class="iconfont icon-sms-phone"></i>
                      </template>
                    </el-input>
                  </el-form-item>
                  <div class="get-sms">
                    <el-form-item
                      prop="code"
                      :rules="{
                        required: true,
                        message: '验证码必填',
                        trigger: 'change',
                      }"
                    >
                      <el-input
                        v-model="loginForm.code"
                        placeholder="请输入验证码"
                        class="sms-code"
                        clearable
                        maxlength="6"
                        @keyup.native.enter="confirmLogin"
                      >
                        <template slot="prefix">
                          <i class="iconfont icon-verification-code"></i>
                        </template>
                      </el-input>
                    </el-form-item>
                    <el-button
                      class="get-sms-btn"
                      :disabled="isDisableCodeBtn"
                      @click="getValidationCode('loginForm')"
                      >{{ codeBtnText }}</el-button
                    >
                  </div>
                </el-form>
                <div class="login-operation-section">
                  <el-checkbox v-model="isRemenberAccount"
                    >记住账号</el-checkbox
                  >
                </div>
                <el-button round class="login-btn" @click="confirmLogin"
                  >登录</el-button
                >
                <div class="click-to-register">
                  <el-button
                    type="text"
                    class="register-btn"
                    @click="operationType = 'register'"
                    >立即注册</el-button
                  >
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div v-if="operationType === 'register'" class="register-area">
            <h1>注册</h1>
            <el-form :model="registerForm" ref="registerForm">
              <!-- <el-form-item
                prop="companyName"
                :rules="{
                  required: true,
                  message: '公司名称必填',
                  trigger: 'change',
                }"
              >
                <el-input
                  v-model="registerForm.companyName"
                  class="companyName"
                  placeholder="请输入公司名称"
                  clearable
                  maxlength="16"
                >
                  <template slot="prefix">
                    <i class="iconfont icon-account"></i>
                  </template>
                </el-input>
              </el-form-item> -->
              <el-form-item
                prop="phone"
                :rules="[
                  {
                    required: true,
                    validator: phoneNumberValidator,
                    trigger: 'change',
                  },
                  {
                    required: true,
                    validator: phoneNumberBlurValidator,
                    trigger: 'blur',
                  },
                ]"
              >
                <el-input
                  v-model="registerForm.phone"
                  class="phone"
                  placeholder="请输入手机号"
                  clearable
                  maxlength="11"
                >
                  <template slot="prefix">
                    <i class="iconfont icon-simple-phone"></i>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item
                prop="password"
                :rules="{
                  required: true,
                  validator: passwordValidator,
                  trigger: 'change',
                }"
              >
                <el-input
                  v-model="registerForm.password"
                  class="password"
                  placeholder="请输入密码"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  maxlength="16"
                >
                  <template slot="prefix">
                    <i class="iconfont icon-password"></i>
                  </template>
                  <template slot="suffix">
                    <i
                      class="iconfont"
                      :class="
                        isPasswordVisible
                          ? 'icon-password-visible'
                          : 'icon-password-invisible'
                      "
                      @click="togglePasswordVisible"
                    ></i>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item
                prop="passwordConfirm"
                :rules="{
                  required: true,
                  validator: passwordValidator,
                  trigger: 'change',
                }"
                maxlength="16"
              >
                <el-input
                  v-model="registerForm.passwordConfirm"
                  class="password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  placeholder="请再次输入密码"
                >
                  <template slot="prefix">
                    <i class="iconfont icon-password"></i>
                  </template>
                  <template slot="suffix">
                    <i
                      class="iconfont"
                      :class="
                        isPasswordVisible
                          ? 'icon-password-visible'
                          : 'icon-password-invisible'
                      "
                      @click="togglePasswordVisible"
                    ></i>
                  </template>
                </el-input>
              </el-form-item>
              <div class="get-sms">
                <el-form-item
                  prop="code"
                  :rules="{
                    required: true,
                    message: '验证码必填',
                    trigger: 'change',
                  }"
                >
                  <el-input
                    v-model="registerForm.code"
                    placeholder="请输入验证码"
                    class="sms-code"
                    clearable
                    maxlength="6"
                  >
                    <template slot="prefix">
                      <i class="iconfont icon-verification-code"></i>
                    </template>
                  </el-input>
                </el-form-item>
                <el-button
                  class="get-sms-btn"
                  :disabled="isDisableCodeBtn"
                  @click="getValidationCode('registerForm')"
                  >{{ codeBtnText }}</el-button
                >
              </div>
            </el-form>
            <div class="register-privacy-confirm-area">
              <el-checkbox
                :class="{ 'apply-shake': isNeedShaking }"
                v-model="isConfirmPrivacyPolicy"
                >同意<nuxt-link to="/privacy"
                  >《隐私保护指引》</nuxt-link
                ></el-checkbox
              >
            </div>
            <div class="register-btn-area">
              <el-button class="register-btn" @click="confirmRegister"
                >立即注册</el-button
              >
            </div>
            <div class="click-to-login">
              <el-button class="register-btn" type="text" @click="clickToLogin"
                >已有账号?立即登录</el-button
              >
            </div>
          </div>
          <div v-if="operationType === 'reset'" class="reset-password-area">
            <h1>重置密码</h1>
            <el-form :model="resetForm" ref="resetForm">
              <!-- <el-form-item
                prop="companyName"
                :rules="{
                  required: true,
                  message: '公司名称必填',
                  trigger: 'change',
                }"
              >
                <el-input
                  v-model="resetForm.companyName"
                  class="companyName"
                  placeholder="请输入公司名称"
                  clearable
                  maxlength="16"
                >
                  <template slot="prefix">
                    <i class="iconfont icon-account"></i>
                  </template>
                </el-input>
              </el-form-item> -->
              <el-form-item
                prop="phone"
                :rules="[
                  {
                    required: true,
                    validator: phoneNumberValidator,
                    trigger: 'change',
                  },
                  {
                    required: true,
                    validator: resetPasswordPhoneNumberExistValidator,
                    trigger: 'blur',
                  },
                ]"
              >
                <el-input
                  v-model="resetForm.phone"
                  class="username"
                  placeholder="请输入手机号"
                  clearable
                  maxlength="11"
                >
                  <template slot="prefix">
                    <i class="iconfont icon-simple-phone"></i>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item
                prop="password"
                :rules="{
                  required: true,
                  validator: passwordValidator,
                  trigger: 'change',
                }"
              >
                <el-input
                  v-model="resetForm.password"
                  class="password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  placeholder="请输入新密码"
                  maxlength="16"
                >
                  <template slot="prefix">
                    <i class="iconfont icon-password"></i>
                  </template>
                  <template slot="suffix">
                    <i
                      class="iconfont"
                      :class="
                        isPasswordVisible
                          ? 'icon-password-visible'
                          : 'icon-password-invisible'
                      "
                      @click="togglePasswordVisible"
                    ></i>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item
                prop="passwordConfirm"
                :rules="{
                  required: true,
                  validator: passwordValidator,
                  trigger: 'change',
                }"
              >
                <el-input
                  v-model="resetForm.passwordConfirm"
                  class="password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  placeholder="请再次输入新密码"
                  maxlength="16"
                >
                  <template slot="prefix">
                    <i class="iconfont icon-password"></i>
                  </template>
                  <template slot="suffix">
                    <i
                      class="iconfont"
                      :class="
                        isPasswordVisible
                          ? 'icon-password-visible'
                          : 'icon-password-invisible'
                      "
                      @click="togglePasswordVisible"
                    ></i>
                  </template>
                </el-input>
              </el-form-item>
              <div class="get-sms">
                <el-form-item
                  prop="code"
                  :rules="{
                    required: true,
                    message: '验证码必填',
                    trigger: 'change',
                  }"
                >
                  <el-input
                    v-model="resetForm.code"
                    placeholder="请输入验证码"
                    class="sms-code"
                    clearable
                    maxlength="6"
                  >
                    <template slot="prefix">
                      <i class="iconfont icon-verification-code"></i>
                    </template>
                  </el-input>
                </el-form-item>
                <el-button
                  class="get-sms-btn"
                  :disabled="isDisableCodeBtn"
                  @click="getValidationCode('resetForm')"
                  >{{ codeBtnText }}</el-button
                >
              </div>
            </el-form>
            <div class="reset-btn-area">
              <el-button class="reset-btn" @click="confirmResetPassword"
                >重置</el-button
              >
            </div>
            <div class="click-to-login">
              <el-button class="register-btn" type="text" @click="clickToLogin"
                >立即登录</el-button
              >
            </div>
          </div>
        </div>
      </div>
      <div class="login-footer">
        <p>
          备案号：<a
            href="https://beian.miit.gov.cn/#/Integrated/index"
            target="_blank"
            >京ICP备2021018631号</a
          >
          | © Copyright 2021 北京中恒智造科技有限公司 版权所有
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "login-authentication",
  head: {
    title: "中恒智造 - 登录",
  },
  data() {
    return {
      loginType: "password",
      loginForm: {
        // 加密
        phone: "",
        password: "",
        code: "",
      },
      registerForm: {
        phone: "",
        password: "",
        passwordConfirm: "",
        code: "",
      },
      resetForm: {
        phone: "",
        password: "",
        passwordConfirm: "",
        code: "",
      },
      isRemenberAccount: false,
      isPasswordVisible: false,
      operationType: "login",
      codeBtnText: "获取验证码",
      reSendCodeTime: 60,
      isDisableCodeBtn: false,
      isSmsLoginPhoneValidate: true,
      isRegisterPhoneValidate: true,
      isResetPhoneValidate: true,
      isConfirmPrivacyPolicy: false,
      isNeedShaking: false,
      phoneReg:
        /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/,
      phoneNumberValidator: (rule, value, callback) => {
        let reg = this.phoneReg;
        if (!value) {
          callback(new Error("手机号必填"));
        } else if (!reg.test(value)) {
          callback(new Error("请输入正确的手机号"));
        } else {
          callback();
        }
      },
      phoneNumberBlurValidator: (rule, value, callback) => {
        this.checkPhoneDuplicated(callback);
      },
      loginPhoneNumberExistValidator: (rule, value, callback) => {
        this.checkPhoneExisted(callback, "loginForm");
      },
      resetPasswordPhoneNumberExistValidator: (rule, value, callback) => {
        this.checkPhoneExisted(callback, "resetForm");
      },
      passwordValidator: (rule, value, callback) => {
        let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
        let currentForm = this[`${this.operationType}Form`];
        if (!value) {
          callback(new Error("密码必填"));
        } else if (!reg.test(value)) {
          callback(new Error("密码长度8-16位，必须包含大小写字母和数字"));
        } else if (
          rule.field &&
          rule.field === "passwordConfirm" &&
          currentForm.password !== currentForm.passwordConfirm
        ) {
          callback(new Error("两次输入的密码不一致，请重新输入"));
        } else {
          callback();
        }
      },
    };
  },
  created() {},
  computed: {
    loginState() {
      return this.$store.state.account.loginState;
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    loginState: {
      handler() {
        if (this.loginState) {
          this.$router.replace("/account");
        }
      },
      immediate: true,
    },
    "$route.query": {
      handler() {
        if (this.$route && this.$route.query && this.$route.query.register) {
          this.operationType = "register";
        } else {
          this.operationType = "login";
          this.loginType = "password";
        }
      },
    },
  },
  methods: {
    // 初始化登录数据
    init() {
      if (sessionStorage.getItem("codeResetTime")) {
        this.isDisableCodeBtn = true;
        this.reSendCodeTime = sessionStorage.getItem("codeResetTime");
        this.reSendCodeTime--;
        let timer = setInterval(() => {
          if (this.reSendCodeTime > 1) {
            this.reSendCodeTime--;
            this.codeBtnText = `${this.reSendCodeTime}s 后重新发送`;
            sessionStorage.setItem("codeResetTime", this.reSendCodeTime);
          } else {
            clearInterval(timer);
            this.codeBtnText = "获取验证码";
            this.isDisableCodeBtn = false;
            this.reSendCodeTime = 60;
            sessionStorage.removeItem("codeResetTime");
          }
        }, 1000);
      }
      if (this.$route && this.$route.query && this.$route.query.register) {
        this.operationType = "register";
      }
      this.getUserInfoFromLocalStorage();
    },

    // 从localStorage中加载用户数据
    getUserInfoFromLocalStorage() {
      if (localStorage.getItem("userInfo")) {
        this.isRemenberAccount = true;
        let target;
        if (localStorage.getItem("userInfo").includes("phone")) {
          target = JSON.parse(localStorage.getItem("userInfo"));
        } else {
          target = JSON.parse(atob(localStorage.getItem("userInfo")));
        }
        Object.keys(target).forEach((key) => {
          this.loginForm[key] = target[key];
        });
      }
    },

    // 切换登录类型
    switchLoginType() {
      this.$nextTick(() => {
        this.$refs[
          `${this.loginType === "password" ? "sms" : "password"}LoginForm`
        ].clearValidate();
      });
      this.loginForm = this.$options.data().loginForm;
      this.getUserInfoFromLocalStorage();
    },

    // 重置表单数据
    resetFormData() {
      this.loginForm = this.$options.data().loginForm;
      this.registerForm = this.$options.data().registerForm;
      this.resetForm = this.$options.data().resetForm;
      this.isPasswordVisible = false;
    },

    // 点击跳转到注册页
    clickToRegister() {
      this.$nextTick(() => {
        this.$refs.passwordLoginForm.clearValidate();
        this.$refs.smsLoginForm.clearValidate();
      });
      this.operationType = "register";
      this.resetFormData();
    },

    // 点击跳转到登录页
    clickToLogin() {
      this.operationType = "login";
      this.loginType = "password";
      this.resetFormData();
      this.getUserInfoFromLocalStorage();
    },

    // 点击跳转到重置密码页
    clickToResetPassword() {
      this.$nextTick(() => {
        this.$refs.passwordLoginForm.clearValidate();
        this.$refs.smsLoginForm.clearValidate();
      });
      this.operationType = "reset";
      this.resetFormData();
    },

    // 切换密码是否可见
    togglePasswordVisible() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },

    // 切换是否记住账户
    toggleRemenberAccount() {
      if (this.isRemenberAccount) {
        let data =
          this.loginType === "password"
            ? {
                phone: this.loginForm.phone,
                password: this.loginForm.password,
              }
            : {
                phone: this.loginForm.phone,
              };
        localStorage.setItem("userInfo", btoa(JSON.stringify(data)));
      } else {
        localStorage.removeItem("userInfo");
      }
    },

    // 校验手机号
    verifyPhoneNumber(type) {
      let phoneReg = this.phoneReg;
      if (!phoneReg.test(this[type].phone)) {
        this.$message({
          message: "请输入正确的手机号",
          type: "warning",
          offset: 90,
        });
        return false;
      } else {
        return true;
      }
    },

    // 检查用户名是否已经存在
    // checkUserNameDuplicated(callback) {
    //   this.$http
    //     .get("api/user/checkUserNameDuplicated", {
    //       username: this.registerForm.username,
    //     })
    //     .then((res) => {
    //       if (res && res.data && res.data.data === "no") {
    //         callback(new Error("用户名已存在，请重新输入"));
    //       } else {
    //         callback();
    //       }
    //     })
    //     .catch((err) => {
    //       console.log("检查用户名是否重复失败：", err);
    //     });
    // },

    // 检查手机号是否已经重复
    checkPhoneDuplicated(callback) {
      if (!this.registerForm.phone) return;
      if (!this.phoneReg.test(this.registerForm.phone)) {
        callback("请输入正确的手机号");
        return;
      }
      this.$http
        .get("api/user/checkPhoneDuplicated", {
          phone: this.registerForm.phone,
        })
        .then((res) => {
          if (res && res.data && res.data.data === "no") {
            this.isRegisterPhoneValidate = false;
            callback(new Error("手机号已存在，请重新输入"));
          } else {
            this.isRegisterPhoneValidate = true;
            callback();
          }
        })
        .catch((err) => {
          console.log("检查手机号是否重复失败：", err);
        });
    },

    // 检查手机号是否存在
    checkPhoneExisted(callback, type) {
      if (!this[type].phone) return;
      if (!this.phoneReg.test(this[type].phone)) {
        callback("请输入正确的手机号");
        return;
      }
      this.$http
        .get("api/user/checkPhoneDuplicated", {
          phone: this[type].phone,
        })
        .then((res) => {
          if (res && res.data && res.data.data === "ok") {
            if (type === "reset") {
              this.isResetPhoneValidate = false;
            } else {
              this.isSmsLoginPhoneValidate = false;
            }
            callback(new Error("手机号未注册，请重新输入"));
          } else {
            if (type === "resetForm") {
              this.isResetPhoneValidate = true;
            } else {
              this.isSmsLoginPhoneValidate = true;
            }
            callback();
          }
        })
        .catch((err) => {
          console.log("检查手机号是否重复失败：", err);
        });
    },

    // 获取验证码
    getValidationCode(type) {
      if (!this[type].phone) {
        this.$message({
          message: "请先输入手机号",
          type: "warning",
          offset: 90,
        });
        return;
      }
      if (!this.verifyPhoneNumber(type)) return;
      if (
        (this.operationType === "login" &&
          this.loginType === "sms" &&
          !this.isSmsLoginPhoneValidate) ||
        (this.operationType === "reset" && !this.isResetPhoneValidate)
      ) {
        this.$message.warning({
          message: "手机号未注册，请重新输入",
          offset: 90,
        });
        return;
      }
      if (this.operationType === "register" && !this.isRegisterPhoneValidate) {
        this.$message.warning({
          message: "手机号已注册，请重新输入",
          offset: 90,
        });
        return;
      }
      this[type].code = "";
      this.$http
        .get("api/getYZM", { phone: this[type].phone })
        .then((res) => {
          if (
            res &&
            res.data &&
            res.data.data &&
            res.data.data.includes("成功")
          ) {
            this.$message.success({
              message: "验证码发送成功",
              offset: 90,
            });
            this.isDisableCodeBtn = true;
            this.reSendCodeTime--;
            this.codeBtnWord = `${this.reSendCodeTime}s 后重新发送`;
            let timer = setInterval(() => {
              if (this.reSendCodeTime > 1) {
                this.reSendCodeTime--;
                this.codeBtnText = `${this.reSendCodeTime}s 后重新发送`;
                sessionStorage.setItem("codeResetTime", this.reSendCodeTime);
              } else {
                clearInterval(timer);
                this.codeBtnText = "获取验证码";
                this.isDisableCodeBtn = false;
                this.reSendCodeTime = 60;
                sessionStorage.removeItem("codeResetTime");
              }
            }, 1000);
          } else {
            console.log("获取验证码失败", res.data.data);
            this.$message.warning({
              message: `获取验证码失败: ${res.data.msg || "未知原因"}`,
              duration: 2000,
              offset: 90,
            });
          }
        })
        .catch((err) => {
          console.log("获取验证码失败", err.response);
          this.$message.error({
            message: `获取验证码失败: ${err.message || "未知原因"}`,
            duration: 2000,
            offset: 90,
          });
        });
    },

    // 确认注册
    confirmRegister() {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          if (
            this.registerForm.password !== this.registerForm.passwordConfirm
          ) {
            this.$message.warning({
              message: "两次输入的密码不一致，请重新输入",
              duration: 2500,
              offset: 90,
            });
            return;
          }
          if (!this.isConfirmPrivacyPolicy) {
            this.$message.warning({
              message: "请先同意隐私保护协议",
              offset: 90,
            });
            this.isNeedShaking = true;
            setTimeout(() => {
              this.isNeedShaking = false;
            }, 1500);
            return;
          }
          let encryptRegisterForm = {
            p: this.$RSA.encrypt(this.registerForm.phone),
            x: this.$RSA.encrypt(this.registerForm.password), // passwordConfirm
            y: this.$RSA.encrypt(this.registerForm.code),
          };
          this.$RSA.encrypt(this.registerForm);
          this.$http
            .post("api/user/register", encryptRegisterForm)
            .then((res) => {
              console.log("注册状态: ", res);
              if (
                res &&
                res.data &&
                res.data.data &&
                res.data.data.includes("成功")
              ) {
                this.$message.success({
                  message: res.data.data || "注册成功",
                  offset: 90,
                });
                this.clickToLogin();
              } else {
                console.log("注册失败", res.data.data);
                this.$message.warning({
                  message: `注册失败: ${res.data.msg || "未知原因"}`,
                  duration: 2000,
                  offset: 90,
                });
              }
            })
            .catch((err) => {
              console.log("注册失败", err.response);
              this.$message.error({
                message: `注册失败: ${err.message || "未知原因"}`,
                duration: 2000,
                offset: 90,
              });
            });
        } else {
          this.$message.warning({
            message: "表单输入有误，请重新输入",
            offset: 90,
          });
        }
      });
    },

    // 确认重置密码
    confirmResetPassword() {
      this.$refs.resetForm.validate((valid) => {
        if (valid) {
          if (this.resetForm.password !== this.resetForm.passwordConfirm) {
            this.$message.warning({
              message: "两次输入的密码不一致，请重新输入",
              duration: 2500,
              offset: 90,
            });
            return;
          }
          let encryptResetForm = {
            p: this.$RSA.encrypt(this.resetForm.phone),
            x: this.$RSA.encrypt(this.resetForm.password), // passwordConfirm
            y: this.$RSA.encrypt(this.resetForm.code),
          };
          this.$http
            .post("api/user/resetPassword", encryptResetForm)
            .then((res) => {
              console.log("重置状态: ", res);
              if (
                res &&
                res.data &&
                res.data.data &&
                res.data.data.includes("成功")
              ) {
                this.$message.success({
                  message: res.data.data || "重置密码成功",
                  offset: 90,
                });
                this.clickToLogin();
              } else {
                console.log("重置密码失败", res.data.data);
                this.$message.warning({
                  message: `重置密码失败: ${res.data.msg || "未知原因"}`,
                  duration: 2000,
                  offset: 90,
                });
              }
            })
            .catch((err) => {
              console.log("重置密码失败", err.response);
              this.$message.error({
                message: `重置密码失败: ${err.message || "未知原因"}`,
                duration: 2000,
                offset: 90,
              });
            });
        } else {
          this.$message.warning({
            message: "表单输入有误，请重新输入",
            offset: 90,
          });
        }
      });
    },

    // 确认登录
    confirmLogin() {
      this.$refs[`${this.loginType}LoginForm`].validate((valid) => {
        if (valid) {
          let encryptLoginParams = this.$RSA.encrypt(
            this.loginType === "password"
              ? {
                  phone: this.loginForm.phone,
                  password: this.loginForm.password,
                }
              : {
                  phone: this.loginForm.phone,
                  code: this.loginForm.code,
                }
          );
          this.toggleRemenberAccount();
          this.$http
            .post("api/user/login", { ttt: encryptLoginParams })
            .then((res) => {
              console.log("登录状态: ", res);
              if (
                res &&
                res.data &&
                res.data.tipInfo &&
                res.data.tipInfo.includes("成功")
              ) {
                this.$message.success({
                  message: "登录成功",
                  offset: 90,
                });
                this.handleLoginSuccess(res.data.data);
              } else {
                console.log("登录失败", res.data.msg);
                this.$message.warning({
                  message: `登录失败: ${res.data.msg || "未知原因"}`,
                  duration: 2000,
                  offset: 90,
                });
              }
            })
            .catch((err) => {
              console.log("登录失败", err.response);
              this.$message.error({
                message: `登录失败: ${err.message || "未知原因"}`,
                duration: 2000,
                offset: 90,
              });
            });
        } else {
          this.$message.warning({
            message: `表单输入有误，请重新输入`,
            offset: 90,
          });
        }
      });
    },

    // 跳转到用户中心
    clickToUserCenter() {
      this.$router.push({
        path: "/account",
      });
    },

    // 登录成功后的处理
    handleLoginSuccess(data) {
      if (data) {
        this.$store.commit("account/setUserInfo", data);
        this.$store.commit("account/setLoginState", true);
        let params = {
          phone: this.loginForm.phone,
        };
        this.$http
          .get("api/userInfo/getUserAvatar", params)
          .then((res) => {
            if (
              res &&
              res.data &&
              res.data.data &&
              res.data.data.includes("picture")
            ) {
              this.$store.commit("account/setUserAvatar", res.data.data);
            }
          })
          .catch((err) => {
            console.log("获取头像失败", err.response);
            this.$message.error({
              message: `获取头像失败: ${err.message || "未知原因"}`,
              duration: 2000,
              offset: 90,
            });
          });
        this.$http
          .get("api/userInfo/getUserCertificate", params)
          .then((res) => {
            if (
              res &&
              res.data &&
              res.data.data &&
              res.data.data.includes("picture")
            ) {
              this.$store.commit("account/setUserCertificate", res.data.data);
            }
          })
          .catch((err) => {
            console.log("获取营业执照失败", err.response);
            this.$message.error({
              message: `获取营业执照失败: ${err.message || "未知原因"}`,
              duration: 2000,
              offset: 90,
            });
          });
      }
      this.clickToUserCenter();
    },
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  height: 100%;
  overflow: hidden;
  background-color: #f3f7fa;
  .login-section {
    height: calc(100vh - 68px);
    display: flex;
    overflow: hidden;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    .login-main-content {
      gap: 100px;
      display: flex;
      width: 1200px;
      height: 600px;
      padding: 60px;
      position: relative;
      border-radius: 10px;
      transition: all 0.3s;
      background-color: #fff;
      box-sizing: border-box;
      box-shadow: 0 2px 12px 0 #dbdbdb;
      .login-background {
        position: absolute;
        top: 0;
        right: 0;
        img {
          width: auto;
          height: 300px;
          border-top-right-radius: 10px;
        }
      }
      .login-left-section {
        transition: all 0.3s;
        .desc {
          p {
            font-size: 24px;
            color: #6d6d6d;
            line-height: 40px;
            transition: all 0.3s;
          }
        }
        img {
          width: 500px;
          height: auto;
          transition: all 0.3s;
        }
      }
      .login-right-section {
        width: 360px;
        display: flex;
        align-items: center;
        .el-tabs {
          width: 100%;
          :deep().el-tabs__header {
            .el-tabs__nav-scroll {
              display: flex;
              .el-tabs__nav {
                flex: 1;
                display: flex;
                .el-tabs__active-bar {
                  background-color: #0076fe;
                }
                .el-tabs__item {
                  flex: 1;
                  padding: 0;
                  color: #a1a6ba;
                  font-size: 18px;
                  text-align: center;
                  &.is-active {
                    color: #3c405d;
                  }
                  &:focus.is-active.is-focus:not(:active) {
                    -webkit-box-shadow: none !important;
                    box-shadow: none !important;
                  }
                }
              }
            }
          }
          .password-login-content,
          .sms-login-content {
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
        }
        :deep().el-form-item {
          &__error {
            padding: 5px 0 0 20px;
          }
        }
        :deep().el-input {
          .el-input__inner {
            height: 45px;
            border-radius: 22.5px;
            padding: 0 45px;
            transition: all 0.3s;
            font-size: 16px;
            s &:focus {
              border-color: #2f83ff;
              outline: 0;
            }
          }
          .el-input__prefix {
            display: flex;
            align-items: center;
            left: 20px;
          }
          .el-input__suffix {
            display: flex;
            align-items: center;
            right: 20px;
            cursor: pointer;
          }
        }
        .login-operation-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 15px;
          .el-checkbox {
            color: #3a405a;
            :deep().el-checkbox__input {
              &.is-checked {
                .el-checkbox__inner {
                  background-color: #0075ff;
                  border-color: #0075ff;
                  color: #3a405a;
                }
              }
            }
          }
          .forget-my-password {
            color: #9da3b1;
            padding: 0;
            &:hover {
              opacity: 0.8;
            }
          }
        }
        .get-sms {
          display: flex;
          gap: 10px;
          margin-bottom: 22px;
          :deep().el-form-item {
            margin-bottom: 0;
            .el-input {
              .el-input_inner {
                width: auto;
              }
            }
          }
          .get-sms-btn {
            flex: 0 0 auto;
            width: 135px;
            transition: all 0.3s;
            border-radius: 22.5px;
            border: none;
            color: #0175fe;
            height: 45px;
            background-color: #e5f1ff;
            &:hover {
              color: white;
              background-color: #3f98ff;
            }
            &.is-disabled {
              color: #bcbec2;
              background-color: #f4f4f5;
              border: 1px solid #e9e9eb;
            }
          }
        }
        .login-btn {
          margin-top: 20px;
          height: 50px;
          color: white;
          font-size: 20px;
          letter-spacing: 10px;
          border-radius: 25px;
          background-color: #0076fe;
          &:hover {
            background-color: #3f98ff;
          }
        }
        .click-to-register,
        .click-to-login {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .register-btn {
            padding: 0;
            color: #0077ff;
            &:hover {
              opacity: 0.8;
            }
          }
        }
        .register-area {
          display: flex;
          flex-direction: column;
          gap: 20px;
          z-index: 1;
          h1 {
            font-size: 24px;
            font-weight: 400;
            letter-spacing: 10px;
            color: #7b7d7b;
            text-align: center;
            margin: 0;
          }
          .get-sms {
            margin-bottom: 10px;
          }
          .register-privacy-confirm-area {
            a {
              color: #55a2ff;
              text-decoration: none;
              &:hover {
                text-decoration: underline;
              }
            }
          }
          .register-btn-area {
            .el-button {
              display: flex;
              width: 100%;
              height: 50px;
              color: white;
              font-size: 20px;
              align-items: center;
              border-radius: 25px;
              letter-spacing: 10px;
              justify-content: center;
              background-color: #0076fe;
              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
        .reset-password-area {
          display: flex;
          flex-direction: column;
          gap: 20px;
          h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 400;
            letter-spacing: 10px;
            color: #7b7d7b;
            text-align: center;
            z-index: 9;
          }
          .reset-btn-area {
            .el-button {
              display: flex;
              width: 100%;
              height: 50px;
              color: white;
              font-size: 20px;
              align-items: center;
              border-radius: 25px;
              letter-spacing: 10px;
              justify-content: center;
              background-color: #0076fe;
              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
    .login-footer {
      color: #67778e;
      font-size: 14px;
      margin-top: 30px;
      p {
        position: relative;
        transition: none;
        a {
          color: #67778e;
          text-decoration: none;
          &:hover {
            color: #91a7c5;
          }
        }
        &::before {
          content: "";
          position: absolute;
          top: 0px;
          left: -24px;
          width: 18px;
          height: 20px;
          background: url("~assets/imgs/login/login-footer-badge.png");
        }
      }
    }
  }
}

@media screen and (max-width: 1249px) {
  .login-page {
    .login-section {
      .login-main-content {
        width: auto;
        gap: 50px;
        justify-content: space-between;
        .login-left-section {
          display: flex;
          flex-direction: column;
          gap: 50px;
          .desc {
            p {
              font-size: 20px;
              color: #6d6d6d;
              line-height: 36px;
            }
          }
          img {
            width: 400px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 999px) {
  .login-page {
    .login-section {
      height: calc(100vh - 60px);
      .login-main-content {
        .login-left-section {
          display: none;
        }
      }
    }
  }
}

@media screen and (max-width: 649px) {
  .login-page {
    .login-section {
      justify-content: center;
      gap: 20px;
      .login-main-content {
        .login-left-section {
          display: none;
        }
      }
      .login-footer {
        padding: 0 30px;
        text-align: center;
        line-height: 26px;
        p {
          &::before {
            top: 4px;
            left: -20px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 499px) {
  .login-page {
    .login-section {
      justify-content: center;
      gap: 20px;
      .login-main-content {
        width: 100%;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        justify-content: center;
        .login-right-section {
          padding: 0 20px;
          :deep().el-input {
            .el-input__inner {
              height: 40px;
              border-radius: 20px;
              padding: 0 45px;
              font-size: 14px;
              &:focus {
                border-color: #2f83ff;
                outline: 0;
              }
            }
          }
          .get-sms {
            display: flex;
            gap: 10px;
            .get-sms-btn {
              height: 40px;
              flex: 0 0 auto;
              width: auto;
              border-radius: 20px;
              border: none;
              color: #0175fe;
              background-color: #e5f1ff;
              &:hover {
                color: white;
                background-color: #3f98ff;
              }
            }
          }
        }
      }
      .login-footer {
        padding: 0 30px;
        text-align: center;
        line-height: 26px;
        p {
          &::before {
            left: -20px;
          }
        }
      }
    }
  }
}
</style>
