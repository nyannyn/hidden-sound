# 📋 靜態網站表單設定指南

## 🎯 當前方案：智能 Mailto 表單

✅ **已完成**：您的聯絡頁面現在有一個智能表單系統  
✅ **無需設定**：直接可用，無需任何後端或第三方服務  
✅ **用戶友善**：自動開啟郵件應用程式並預填內容  

## 🔧 可選設定：Google Forms

### 步驟 1：建立 Google 表單
1. 前往 [Google Forms](https://forms.google.com/)
2. 點擊「建立新表單」
3. 設定表單標題：「聲音藏在聯絡表單」

### 步驟 2：設計表單欄位
建立以下欄位：
- **姓名** (簡答)：必填
- **電子郵件** (簡答)：必填
- **主旨** (單選)：企業合作/人才招募/志工服務/媒體採訪/其他
- **訊息內容** (段落)：必填

### 步驟 3：設定回應
1. 點擊「回應」分頁
2. 設定回應接收到您的 Gmail
3. 自定義確認訊息：「感謝您的聯絡，我們會盡快回覆！」

### 步驟 4：取得連結並更新程式碼
1. 點擊「發送」→「連結」→ 複製連結
2. 在 `Contact.tsx` 中找到：
```typescript
href="https://forms.gle/your-google-form-id"
```
3. 替換為您的實際連結

## ⚡ 其他靜態網站表單選項

### Formspree（免費 50 次/月）
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

設定步驟：
1. 前往 [Formspree.io](https://formspree.io/)
2. 註冊並建立新表單
3. 取得 Form ID 並替換到程式碼中

### Netlify Forms（如果改用 Netlify 託管）
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

### Typeform（專業版）
```html
<div data-tf-widget="YOUR_TYPEFORM_ID" style="width:100%;height:400px;"></div>
<script src="//embed.typeform.com/next/embed.js"></script>
```

## 📊 方案比較

| 解決方案 | 免費額度 | 設定難度 | GitHub Pages 相容 | 推薦度 |
|---------|---------|----------|-------------------|--------|
| **Mailto 表單** | 無限 | ⭐ 簡單 | ✅ 完美 | 🏆 最推薦 |
| **Google Forms** | 無限 | ⭐⭐ 容易 | ✅ 完美 | ⭐⭐⭐⭐ |
| **Formspree** | 50次/月 | ⭐⭐ 容易 | ✅ 完美 | ⭐⭐⭐ |
| **EmailJS** | 200次/月 | ⭐⭐⭐ 中等 | ✅ 完美 | ⭐⭐⭐ |

## 🎯 建議

對於您的情況，我建議：

1. **保持當前設計** - Mailto 表單已經非常好用
2. **可選設定 Google Forms** - 作為備用選項給偏好網頁表單的用戶
3. **無需複雜設定** - 避免 EmailJS 等需要 API 金鑰的服務

## 🔍 測試步驟

1. 前往聯絡頁面
2. 填寫表單內容
3. 點擊「使用郵件應用程式發送」
4. 確認郵件應用程式正確開啟並預填內容
5. 測試複製郵件地址功能

## 📞 需要協助？

如果有任何問題，歡迎聯絡：hiddensoundproject@gmail.com 