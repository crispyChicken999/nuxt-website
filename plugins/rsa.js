import Vue from "vue";
import JSEncrypt from "jsencrypt";
import Encrypt from "encryptlong";

let publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDfX5K4BaaJXBtlc5QgDaEAEQLD
Lq5tEilPjcC8TQUaQkbBVovQ6P3dyc5FnWkOLnLMkwtj/RELL04GKkkO5mnOIyhk
x4UYse1c2kd8GeNPbsQuxFdhBSnWU5OorsHdznBktMjQ8hzgEKSfkrOBm0QhVwNH
ZzIdvnb7l6Lv00PJIwIDAQAB
-----END PUBLIC KEY-----`;

let privateKey = `-----BEGIN RSA PRIVATE KEY-----
你干嘛哎哟
-----END RSA PRIVATE KEY-----`;

let Rsa = {
  /* JSEncrypt加密 */
  rsaPublicData(data) {
    if ([Array, Object].includes(data.constructor)) {
      data = JSON.stringify(data);
    }
    var jsencrypt = new JSEncrypt();
    jsencrypt.setPublicKey(publicKey);
    var result = jsencrypt.encrypt(data);
    return result;
  },

  /* JSEncrypt解密 */
  rsaPrivateData(data) {
    if ([Array, Object].includes(data.constructor)) {
      data = JSON.stringify(data);
    }
    var jsencrypt = new JSEncrypt();
    jsencrypt.setPrivateKey(privateKey);
    var result = jsencrypt.encrypt(data);
    return result;
  },

  /* 加密 */
  encrypt(data) {
    if ([Array, Object].includes(data.constructor)) {
      data = JSON.stringify(data);
    }
    const PUBLIC_KEY = publicKey;
    var encryptor = new Encrypt();
    encryptor.setPublicKey(PUBLIC_KEY);
    const result = encryptor.encryptLong(data);
    return result;
  },

  /* 解密 - PRIVATE_KEY - 验证 */
  decrypt(data) {
    if ([Array, Object].includes(data.constructor)) {
      data = JSON.stringify(data);
    }
    const PRIVATE_KEY = privateKey;
    var encryptor = new Encrypt();
    encryptor.setPrivateKey(PRIVATE_KEY);
    var result = encryptor.decryptLong(data);
    return result;
  },
};

Vue.prototype.$RSA = Rsa;
