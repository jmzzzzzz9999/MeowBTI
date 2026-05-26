# MeowBTI

MeowBTI 是一个娱乐化猫格测试静态网页，包含问卷、25 种猫格结果、Feline Five 维度图，以及猫格分享卡片生成入口。

## 本地预览

可以用任意静态文件服务器打开项目根目录，例如：

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

然后访问：

```text
http://127.0.0.1:8000/
```

## Netlify 部署

这是纯静态项目。Netlify 设置建议：

- Build command：留空
- Publish directory：`.`

部署后把正式链接写入分享卡二维码配置即可。
