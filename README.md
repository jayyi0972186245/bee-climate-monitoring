# 智慧蜂箱特殊氣候監測平台

## 專案介紹

本 Repository 整合兩個期末作業成果：

1. **台灣特殊氣候蜜蜂監測分析 Skill**
2. **智慧蜂箱特殊氣候監測網站**

作品以台灣各地特殊氣候為基礎，結合即時天氣資料，分析不同地區蜂箱可能面臨的環境風險。使用者選擇縣市後，網站會顯示該地特殊氣候、即時溫度、即時風速、即時濕度、蜜蜂影響、風險等級與監測建議。

## 專案特色

- 整合台灣 13 個地區特殊氣候
- 顯示即時溫度、風速、濕度
- 加入 Google 地圖蜂場查詢，屏東以陳家蜂蜜為例
- 分析蜜蜂活動與蜂箱環境風險
- 提供智慧蜂箱監測與控制建議
- 可作為智慧農業與 IoT 蜂箱系統前端展示
- 內含可說明個人工作流程的 Skill

## 使用技術

- HTML
- CSS
- JavaScript
- Open-Meteo 即時天氣 API
- AI 輔助規則設計

## 功能

1. 選擇縣市
2. 顯示地區特殊氣候
3. 取得即時溫度、風速、濕度
4. 顯示蜜蜂可能受到的影響
5. 顯示蜂箱風險等級
6. 顯示 Google 地圖蜂場查詢連結
7. 顯示監測建議與控制設備

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

## 使用方式

直接用瀏覽器開啟 `index.html`，選擇縣市即可查看結果。

## 即時天氣資料

本作品使用 Open-Meteo API 取得即時資料：

- `temperature_2m`：即時溫度
- `relative_humidity_2m`：即時相對濕度
- `wind_speed_10m`：即時 10 公尺風速

## 參考資料

- 交通部中央氣象署南區氣象服務網：台灣的氣候
- 交通部中央氣象署南區氣象服務網：焚風與落山風
- Open-Meteo Weather Forecast API
