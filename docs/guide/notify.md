# 消息推送

借助 Windows 消息推送功能，我们无需打开应用，就能在 Home Assistant 中向电脑推送消息。

## 文本消息

```yaml
action: notify.mobile_app_设备
data:
  title: 标题
  message: 正文内容
```

## 图标消息

```yaml
action: notify.mobile_app_设备
data:
  message: 图标消息
  data:
    icon_url: https://www.home-assistant.io/images/favicon-192x192.png
```

## 图片消息

```yaml
action: notify.mobile_app_设备
data:
  message: 图片消息
  data:
    image: https://www.home-assistant.io/images/favicon-192x192.png
```

## 操作按钮

```yaml
action: notify.mobile_app_设备
data:
  title: 标题
  message: 正文内容
  data:
    actions:
      - title: 按钮文本
        action: 按钮标识
```

## 跳转链接

```yaml
action: notify.mobile_app_设备
data:
  title: 标题
  message: 正文内容
  data:
    actions:
      - title: 按钮文本
        action: URI
        uri: https://home-assistant.io
```
`注意：当action为URI时，uri的值才可用`


## 锁屏提醒

```yaml
action: notify.mobile_app_设备
data:
  message: 图标消息
  data:
    scenario: default
```