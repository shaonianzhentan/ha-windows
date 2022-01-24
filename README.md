# Home Assistant Windows App

在Home Assistant中安装使用自定义Conversation组件，通过语音文字命令控制智能设备

[![ha_badge](https://img.shields.io/badge/Home-Assistant-%23049cdb)](https://www.home-assistant.io/)
![visit](https://visitor-badge.glitch.me/badge?page_id=shaonianzhentan.ha-windows&left_text=visit)

[![windows](https://img.shields.io/badge/Windows-点击安装-blue?logo=windows&style=for-the-badge)](https://www.microsoft.com/zh-cn/store/productId/9n2jp5z9rxx2)

## 使用方式

在 Home Assistant 中安装启用 `conversation`
https://github.com/shaonianzhentan/conversation

## 众筹开发

由于是个人独立开发，时间精力有限，如果你对这个Windows应用有兴趣，可以联系我付费获取本应用免费兑换码，并加入QQ群`64185969`和大家一起决定这个应用的功能发展

## 应用截图

![screenshot](./screenshot/1.png)
![screenshot](./screenshot/2.png)
![screenshot](./screenshot/3.png)
![screenshot](./screenshot/4.png)

## 更新日志

- [ ] 增加录音发送到云音乐播放功能

- [ ] 支持多实例切换功能
- [ ] 加入设置页面
- [ ] 支持禁用/启用音效
- [ ] 支持消息通知提醒
- [ ] 磁贴动态显示通知数量
- [ ] 语音唤醒

- [x] 支持switch、input_boolean的开关
- [x] 支持light的开关
- [ ] 支持fan的开关
- [ ] 支持climate的开关
- [ ] 支持automation的开关、触发
- [ ] 支持script的执行


- 登录新增返回按钮
- 语音助手页面增加设备面板
- 初始界面默认新增localhost实例
- 设备面板支持media_player的控制

### 1.0.6
- 新增最近使用设备页面
- 优化语音识别逻辑
- 支持部分设备的开关
- 调整初始窗口大小

### 1.0.3

- 支持标题透明
- 支持自动搜索HomeAssistant实例
- 加入音效
- 未授权麦克风权限时跳转申请
- 未开启语音在线识别时跳转申请
- 修复长时间不操作，授权失效的问题
- 完善关于应用信息
- 增加语音识别时，正在聆听的提示
- 修复关闭Windows语音在线识别时，程序异常退出的问题
- 支持快捷键`Ctrl + H`触发语音识别功能
- 检查是否安装配置语音小助手组件

### 1.0.1

- 支持授权登录HomeAssistant
- 支持语音文本控制设备
- 支持浏览器打开HomeAssistant
- 支持退出重新授权登录
