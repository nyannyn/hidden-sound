# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Hidden Sound Website

使用 React + TypeScript + Vite + Tailwind CSS 建置的網站。

## 開發環境設置

1. 安裝依賴：
```bash
npm install
```

2. 啟動開發伺服器：
```bash
npm run dev
```

3. 建置專案：
```bash
npm run build
```

## 部署流程

本專案使用 GitHub Actions 自動部署到 GitHub Pages。

### 自動部署流程

1. 當推送到 `master` 分支時，GitHub Actions 會自動觸發部署流程
2. 部署流程包含：
   - 安裝依賴
   - 建置專案
   - 部署到 gh-pages 分支

### 手動更新步驟

1. 進行程式碼修改
2. 本地測試：
   ```bash
   npm run dev
   ```

3. 建置專案：
   ```bash
   npm run build
   ```

4. 提交更改：
   ```bash
   git add .
   git commit -m "描述你的更改"
   git push origin master
   ```

5. 等待 GitHub Actions 自動部署完成

### 注意事項

- 確保 `vite.config.ts` 中的 `base` 設置正確（目前設為 `/hidden-sound/`）
- 所有資源路徑都應該使用相對路徑
- 部署後如遇到 MIME 類型錯誤，檢查 `.nojekyll` 文件是否存在

## 技術堆疊

- React
- TypeScript
- Vite
- Tailwind CSS
- GitHub Pages

## 目錄結構

```
hidden-sound/
├── src/
│   ├── components/
│   │   ├── Header.tsx    # 頁首組件
│   │   ├── Footer.tsx    # 頁尾組件
│   │   └── homepage.tsx  # 首頁組件
│   │
│   ├── App.tsx
│   └── main.tsx
├── public/
│   ├── logo_large.png
│   └── logo_s.png
└── dist/                 # 建置輸出目錄
```

## 開發指南

### 新增或修改組件

1. 在 `src/components` 目錄下創建新的組件文件
2. 使用 TypeScript 和 Tailwind CSS 開發
3. 確保組件是可重用的並有適當的型別定義

### 樣式修改

- 使用 Tailwind CSS 的工具類
- 自定義樣式寫在 `src/index.css`

### 資源文件

- 將靜態資源放在 `public` 目錄
- 在代碼中使用相對路徑引用資源

## Tailwind CSS 故障排除指南

### 問題：Tailwind CSS 樣式無法正常運作

如果遇到 Tailwind CSS 的樣式沒有正確應用，請按照以下步驟檢查：

1. **檢查相依套件版本**
   在 `package.json` 中確認以下套件的版本：
   ```json
   {
     "devDependencies": {
       "tailwindcss": "^3.4.1",
       "postcss": "^8.4.35",
       "autoprefixer": "^10.4.18"
     }
   }
   ```

2. **設置 PostCSS 配置**
   創建或更新 `postcss.config.js`：
   ```js
   export default {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   }
   ```

3. **檢查 index.css**
   確保檔案中包含必要的 Tailwind 指令，並移除可能衝突的自定義 CSS：
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   /* 只保留必要的基本樣式 */
   :root {
     font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
     line-height: 1.5;
     font-weight: 400;
   }

   /* 自定義樣式使用 @layer 來避免衝突 */
   @layer components {
     .custom-style {
       @apply your-tailwind-classes-here;
     }
   }
   ```

4. **配置 tailwind.config.js**
   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
       "./src/components/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

5. **使用明確的 Tailwind 類別**
   避免使用模板字符串動態組合類別名稱，改用明確的類別：
   ```jsx
   // 不建議
   className={`base-class ${condition ? 'active' : 'inactive'}`}

   // 建議
   className="inline-block px-3 py-2 text-sm font-medium tracking-wider transition-all duration-200 ease-in-out text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
   ```

### 故障排除步驟

1. **清除快取並重新安裝**
   ```bash
   # 刪除 node_modules 和 package-lock.json
   rm -rf node_modules package-lock.json

   # 重新安裝依賴
   npm install
   ```

2. **重新啟動開發伺服器**
   ```bash
   npm run dev
   ```

3. **檢查控制台錯誤**
   查看瀏覽器開發者工具中的控制台，是否有與 CSS 或 PostCSS 相關的錯誤訊息。

### 常見問題解決方案

1. **樣式優先級問題**
   - 使用 `@apply` 時要注意類別的優先級
   - 必要時可以使用 `!important` 修飾符（但應謹慎使用）

2. **動態類別不生效**
   - 確保所有可能的類別組合都包含在 `tailwind.config.js` 的 `content` 配置中
   - 使用完整的類別名稱而不是動態組合

3. **PostCSS 配置衝突**
   - 確保 PostCSS 配置使用 ESM 格式（`export default`）
   - 移除不必要的 PostCSS 插件

## 其他資源

- [Tailwind CSS 文檔](https://tailwindcss.com/docs)
- [Vite 文檔](https://vitejs.dev/guide/)
- [React 文檔](https://react.dev)
