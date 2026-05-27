# 智慧蜂箱特殊氣候監測平台

## 專案介紹

本 Repository 整合兩個期末作業成果：

1. **台灣特殊氣候蜜蜂監測分析 Skill**
2. **智慧蜂箱特殊氣候監測網站**

作品以台灣各地特殊氣候為基礎，結合即時天氣資料，分析不同地區蜂箱可能面臨的環境風險。使用者選擇縣市後，網站會顯示該地特殊氣候、即時溫度、即時風速、即時濕度、蜜蜂影響、風險等級與監測建議。

網站左側加入 Google 地圖蜂場連動面板，會依照所選地區顯示對應蜂場搜尋結果；其中屏東以「陳家蜂蜜」作為範例。

## 網站連結

- GitHub Repository：<https://github.com/jayyi0972186245/bee-climate-monitoring>
- GitHub Pages：<https://jayyi0972186245.github.io/bee-climate-monitoring/>

## 專案特色

- 整合台灣 13 個地區特殊氣候
- 顯示即時溫度、風速、濕度
- 加入 Google 地圖蜂場查詢與左側嵌入地圖
- 選擇縣市時，天氣資料、風險結果與蜂場地圖會同步更新
- 屏東以「陳家蜂蜜」作為蜂場範例
- 分析蜜蜂活動與蜂箱環境風險
- 提供智慧蜂箱監測與控制建議
- 內含可說明個人工作流程的 Skill

## 使用技術

- HTML
- CSS
- JavaScript
- Open-Meteo 即時天氣 API
- Google Maps 搜尋與嵌入地圖
- AI 輔助規則設計

## 網站功能

1. 選擇縣市
2. 顯示地區特殊氣候
3. 取得即時溫度、風速、濕度
4. 顯示 Google 地圖蜂場查詢
5. 左側嵌入 Google 地圖，並依縣市連動更新
6. 顯示蜜蜂可能受到的影響
7. 顯示蜂箱風險等級
8. 顯示監測建議與控制設備

## 支援地區

- 屏東
- 高雄
- 台南
- 嘉義
- 雲林
- 台中
- 新竹
- 台北
- 宜蘭
- 花蓮
- 台東
- 南投
- 澎湖

## Skill 工作流程

本專案的 Skill 是「台灣特殊氣候蜜蜂監測分析 Skill」，主要流程如下：

1. 收集各地氣候特色
2. 分析氣候對蜜蜂活動的影響
3. 轉換成蜂箱監測規則
4. 判斷風險等級
5. 產生網站可顯示的監測建議文字

## 檔案結構

```text
bee-climate-monitoring/
├── README.md
├── index.html
├── style.css
├── script.js
├── assets/
│   └── smart-beehive-climate-hero.png
└── skill/
    ├── README.md
    ├── SKILL.md
    ├── climate_rules.json
    └── examples/
        ├── pingtung_example.md
        ├── yilan_example.md
        └── taitung_example.md
```

## 即時天氣資料

本作品使用 Open-Meteo API 取得即時資料：

- `temperature_2m`：即時溫度
- `relative_humidity_2m`：即時相對濕度
- `wind_speed_10m`：即時 10 公尺風速

## 風險判斷概念

- 高溫：啟動霧化器、遮陰與溫度警報
- 高濕：加強防潮與病害監測
- 強風：降低蜜蜂外勤活動判斷，加入風速警示
- 低溫：提醒蜂箱保溫並減少開箱

## 參考資料

- 交通部中央氣象署南區氣象服務網：台灣的氣候
- 交通部中央氣象署南區氣象服務網：焚風與落山風
- Open-Meteo Weather Forecast API
- Google Maps
