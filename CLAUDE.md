# CLAUDE.md

## 專案簡介

**自學地圖 (Start-Learn)** — 幫助台灣學生與家長了解自學/實驗教育的資訊平台。提供 AI 問答系統、FAQ 資料庫、四階段學習計畫指引與外部資源推薦。

## 技術棧

- **Framework**: Vue.js 3 (Composition API + Options API)
- **Language**: TypeScript 4.5 (strict mode)
- **Router**: Vue Router 4
- **UI**: Semantic UI CSS 2.5
- **Template**: Pug
- **HTTP**: Axios
- **Markdown**: Marked
- **Build**: Vue CLI 5 / Webpack
- **Package Manager**: Yarn 1.22

## 常用指令

```bash
yarn serve    # 啟動開發伺服器 (http://localhost:8080)
yarn build    # 生產建置，輸出至 dist/
yarn lint     # ESLint 檢查與自動修正
```

## 專案結構

```
src/
├── App.vue              # 根元件（導航列、FAQ 資料載入）
├── main.ts              # 應用程式進入點
├── router/index.ts      # 路由設定（9 個路由）
├── views/               # 頁面元件
│   ├── HomeView.vue     # 首頁
│   ├── FaqView.vue      # FAQ 搜尋與篩選
│   ├── AnsView.vue      # FAQ 答案詳細頁
│   ├── FourStages.vue   # 四階段學習計畫
│   ├── OuterView.vue    # 外部資源
│   ├── SeniorView.vue   # 高中生專區
│   ├── FeedbackView.vue # 回饋表單
│   ├── GithubView.vue   # 原始碼連結
│   └── AIEmbedView.vue  # 嵌入式 AI 介面
├── components/
│   ├── HelloWorld.vue   # 首頁 Hero 元件
│   └── Ad-Be.vue        # 廣告元件
└── data/                # 靜態資料（categories, plan, resource 等）
```

## 後端 API

- 後端部署於 Cloudflare Workers：`members-backend.alearn13994229.workers.dev`
- 用於 AI 問答功能

## 注意事項

- `.cursorignore` 已設定，排除 `node_modules` 與 `dist` 的索引
- PWA 已啟用（`vue.config.js` 中設定 Workbox service worker）
- 路徑別名：`@` → `src/`
