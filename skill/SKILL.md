---
name: taiwan-bee-climate-analysis
description: Analyze Taiwan local climate features and live weather values, then convert them into bee activity risks, smart hive monitoring rules, and website-ready recommendation text. Use when a user needs climate-aware bee monitoring advice for Taiwanese cities or counties, especially for smart beehive, IoT agriculture, temperature, humidity, wind, foehn wind, northeast monsoon, or Luoshan wind scenarios.
---

# Taiwan Bee Climate Analysis

Use this skill to turn Taiwan regional climate traits and live weather readings into bee monitoring decisions.

## Workflow

1. Identify the selected city or county.
2. Look up the region profile in `climate_rules.json`.
3. Read regional special climate, bee impact, base risk level, coordinates, and monitoring suggestions.
4. If live sensor or weather values are provided, adjust the risk level with the rule logic below.
5. Output website-ready Traditional Chinese text for:
   - 地區
   - 特殊氣候
   - 即時溫度
   - 即時風速
   - 即時濕度
   - Google 地圖蜂場查詢
   - 氣候特性
   - 蜜蜂影響
   - 風險等級
   - 蜜蜂活動風險指數
   - 24 小時歷史趨勢
   - 蜂農可執行建議
   - 監測建議
   - 是否啟動控制設備

## Sensor Rule Logic

### Temperature

- Below 10 C: mark bee activity as very low; recommend insulation and fewer hive inspections.
- 10-15 C: mark activity as low; recommend reducing hive opening.
- 15-25 C: mark activity as normal; recommend regular monitoring.
- 25-35 C: mark activity as good; recommend normal foraging observation.
- Above 35 C: raise heat-stress risk; recommend misting, shading, water supply, and a temperature alert.

### Wind

- Light wind: keep normal flight monitoring.
- Strong wind above 20 km/h: lower outside-foraging expectations and add wind-speed alerts.
- Very strong wind above 30 km/h, Luoshan wind, or island/coastal strong wind: treat as high flight-disruption risk.

### Humidity

- 45-85%: keep general monitoring.
- Above 85%: raise dampness, fungal, and disease risk; recommend moisture control and high-humidity alert.
- Below 45%: raise dehydration risk; recommend water supply reminders.

### Rain

- Rain detected: reduce outside-foraging expectations and recommend avoiding hive opening.

## Bee Activity Risk Index

Convert sensor values into:

- 正常: stable for regular monitoring.
- 注意: strengthen monitoring and prepare control actions.
- 高風險: avoid hive inspection and activate control devices when needed.

Recommended action examples:

- 今日不建議開箱檢查
- 建議啟動霧化器
- 建議補充糖水
- 建議加強遮陰

## Historical Trend

When hourly data is available, summarize the past 24 hours:

- Temperature trend
- Humidity trend
- Wind speed trend

Use the trend to support whether the current risk is sudden, persistent, or improving.

## Risk Level Guidance

- 低: suitable for bee activity; general monitoring is enough.
- 中: ordinary environmental monitoring is needed.
- 中高: strengthen temperature, humidity, or wind monitoring.
- 高: activate alerts or environmental control devices.

## Output Style

Write concise Traditional Chinese. Use practical recommendations suitable for a smart hive website. Avoid overclaiming exact biological outcomes when only regional climate information is available.

## Data Source

Use `climate_rules.json` as the project dataset. The website can fetch current weather from Open-Meteo using the stored coordinates.
Use `farmName` and `mapQuery` to create a Google Maps search link for a local bee farm or bee farm search result. For Pingtung, use 陳家蜂蜜 as the example farm.
