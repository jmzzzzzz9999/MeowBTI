# MeowBTI Netlify 发布说明

## 最快发布方式

1. 打开 https://app.netlify.com/drop
2. 上传本目录对应的 `meowbti-netlify.zip`
3. Netlify 会生成一个临时站点链接
4. 登录 Netlify 后，在 Site settings 里把站点名称改成你想要的名称，例如 `meowbti-jmz`
5. 最终链接会类似：`https://meowbti-jmz.netlify.app`

## 更新网页

以后本地修改完成后，重新生成并上传新的 zip 到同一个 Netlify 站点即可。站点链接不变，网页内容会更新。

## 发布包内容

- `index.html`
- `styles.css`
- `app.js`
- `meowbti-logo-mark.svg`
- `meowbti-logo-lockup.svg`
- `PNG/V2/*.png`

## 注意

卡片导出功能需要页面通过 `https://` 或本地服务打开。部署到 Netlify 后，图片资源会同源加载，卡片导出会比直接打开本地文件更稳定。
