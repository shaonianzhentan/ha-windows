# 磁贴显示

磁贴是 Windows 系统中可动态显示信息的模块，借助这一特性，我们能在 Home Assistant 中通过推送消息轻松更新其显示内容，从而实现个性化的自定义内容展示。


```yaml
action: notify.mobile_app_设备
data:
  title: 标题
  message: 正文内容
  data:
    tile:
      template: TileMedium
      image: https://www.home-assistant.io/images/favicon-192x192.png
      title: 标题
      subtitle: 副标题
      body: 正文
```