# Home Assistant Windows App

在Home Assistant中安装使用自定义Conversation组件，通过语音文字命令控制智能设备

[![ha_badge](https://img.shields.io/badge/Home-Assistant-%23049cdb)](https://www.home-assistant.io/)
![visit](https://visitor-badge.glitch.me/badge?page_id=shaonianzhentan.ha-windows&left_text=visit)

[![windows](https://img.shields.io/badge/Windows-点击安装-blue?logo=windows&style=for-the-badge)](https://www.microsoft.com/zh-cn/store/productId/9n2jp5z9rxx2)

## 使用方式

在 Home Assistant 中安装启用 `conversation`
https://github.com/shaonianzhentan/conversation

## 应用截图

![screenshot](./screenshot/1.png)
![screenshot](./screenshot/2.png)
![screenshot](./screenshot/3.png)

## 更新日志

- [ ] 增加录音发送到云音乐播放功能

- [ ] 支持多实例切换功能
- [ ] 加入设置页面
- [ ] 支持禁用/启用音效
- [ ] 支持消息通知提醒
- [ ] 磁贴动态显示通知数量
- [ ] 语音唤醒

- [ ] 支持switch、input_boolean的开关
- [ ] 支持light的开关
- [ ] 支持fan的开关
- [ ] 支持climate的开关
- [ ] 支持media_player的开关、播放、暂停、下一曲、上一曲
- [ ] 支持automation的开关、触发
- [ ] 支持script的执行

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
