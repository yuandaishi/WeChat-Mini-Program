// 获取小程序的账号信息
const accountInfo = wx.getAccountInfoSync();
const {
  miniProgram: { envVersion },
} = accountInfo; //获取当前环境

let env = {
  //dev环境
  baseUrl: "",
};
switch (envVersion) {
  // 开发版
  case "develop":
    env.baseUrl = "https://www.thecocktaildb.com";
    break;
  // 体验版
  case "trial":
    break;
  // 正式版
  case "release":
    break;
  default:
    break;
}
export default env;
