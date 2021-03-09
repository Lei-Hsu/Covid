# Create-React-App 作品

## 說明：

首頁呈現當天全球疫情的資料，包含新確診人數、死亡人數以及痊癒人數等等。

另外設有搜尋單一國家的頁面，可以用來搜尋想要知道資訊的國家名

如果想要看當天哪個國家疫情相對嚴重的話，可以從排行榜中看到全球各大洲當天新增確診人數的前五名

## 使用技術：

### 1.react SAP 應用

react-hook 的使用，包含 react-router-dom 不重整換頁(SPA),客製 customHooks 重複使用

### 2.fetch API 串接

申請 Rapid API 網站的金鑰，發送 request get 資料回來整理，呈現在畫面中

### 3.chart.js 圖表呈現

將 fetch 回來的資料整理、篩選，利用 chart.js 中的 line , pie 圖表做資料呈現

### 4.styled-component

css-in-js 也利用 props 帶入 media 尺寸做成 RWD 版型

### 5.material-ui

使用 material 的 select 表單
