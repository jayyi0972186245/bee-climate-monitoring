const climateData = {
  "屏東": {
    region: "屏東縣",
    coordinates: { latitude: 22.0, longitude: 120.74 },
    specialClimate: "落山風、高溫曝曬",
    farmName: "陳家蜂蜜",
    mapQuery: "陳家蜂蜜 屏東",
    climateFeature: "屏東屬於高溫地區，恆春半島冬季容易受到強勁乾燥的落山風影響。",
    beeImpact: "強風會降低蜜蜂飛行與採集能力，高溫會增加蜂箱內部熱壓力。",
    baseRiskLevel: "高",
    monitoringAdvice: "建議加入風速感測器與溫濕度感測器，強風時提高警示，高溫時啟動霧化器、遮陰與補水提醒。",
    devices: ["風速警報", "溫度警報", "霧化器", "補水提醒"]
  },
  "高雄": {
    region: "高雄市",
    coordinates: { latitude: 22.63, longitude: 120.30 },
    specialClimate: "高溫炎熱、夏季雨季明顯",
    farmName: "高雄蜂場",
    mapQuery: "高雄 蜂場",
    climateFeature: "高雄位於南部，夏季高溫明顯，受西南季風影響時降雨增加。",
    beeImpact: "高溫會造成蜂箱熱壓力，雨季濕度升高可能提高蜂病風險。",
    baseRiskLevel: "中高",
    monitoringAdvice: "加強溫度與濕度監測，必要時啟動遮陰、通風或霧化降溫。",
    devices: ["溫度警報", "濕度警報", "霧化器"]
  },
  "台南": {
    region: "台南市",
    coordinates: { latitude: 22.99, longitude: 120.20 },
    specialClimate: "夏季高溫、乾濕季明顯",
    farmName: "台南蜂場",
    mapQuery: "台南 蜂場",
    climateFeature: "台南乾濕季變化明顯，夏季炎熱，雨季濕度較高。",
    beeImpact: "乾季可能出現水源不足，雨季則可能讓蜂箱濕度過高。",
    baseRiskLevel: "中高",
    monitoringAdvice: "建議加入溫濕度監測、補水提醒與雨季防潮措施。",
    devices: ["溫度警報", "濕度警報", "補水提醒"]
  },
  "嘉義": {
    region: "嘉義縣市",
    coordinates: { latitude: 23.48, longitude: 120.45 },
    specialClimate: "夏季高溫、乾濕季明顯",
    farmName: "嘉義蜂場",
    mapQuery: "嘉義 蜂場",
    climateFeature: "嘉義平原地區夏季炎熱，乾濕季差異會影響蜂箱水分與濕度狀態。",
    beeImpact: "高溫與濕度變化會影響蜜蜂活動穩定性與蜂箱環境。",
    baseRiskLevel: "中",
    monitoringAdvice: "定期追蹤溫度、濕度與水源狀態，雨季加強防潮。",
    devices: ["溫濕度監測", "補水提醒"]
  },
  "雲林": {
    region: "雲林縣",
    coordinates: { latitude: 23.71, longitude: 120.54 },
    specialClimate: "農業區、季節風",
    farmName: "雲林蜂場",
    mapQuery: "雲林 蜂場",
    climateFeature: "雲林農業活動密集，季節風與農作管理可能影響蜂群外勤環境。",
    beeImpact: "農藥暴露與強風都可能造成蜜蜂活動下降或死亡蜂數異常。",
    baseRiskLevel: "中高",
    monitoringAdvice: "加入死亡蜂數異常提醒，並搭配風速與外勤活動監測。",
    devices: ["死亡蜂數提醒", "風速警報"]
  },
  "台中": {
    region: "台中市",
    coordinates: { latitude: 24.15, longitude: 120.67 },
    specialClimate: "盆地型氣候、日夜溫差",
    farmName: "台中蜂場",
    mapQuery: "台中 蜂場",
    climateFeature: "台中受盆地地形影響，早晚與白天溫差可能較明顯。",
    beeImpact: "蜜蜂早晚活動差異較大，若只看單一時段可能誤判蜂群狀態。",
    baseRiskLevel: "中",
    monitoringAdvice: "建議調整攝影巡檢時間，分早、中、晚比較外勤活動。",
    devices: ["攝影巡檢排程", "溫度監測"]
  },
  "新竹": {
    region: "新竹縣市",
    coordinates: { latitude: 24.81, longitude: 120.97 },
    specialClimate: "強風",
    farmName: "新竹蜂場",
    mapQuery: "新竹 蜂場",
    climateFeature: "新竹常有較強風勢，沿海與開闊地區尤其明顯。",
    beeImpact: "強風會讓蜜蜂飛行不穩，採集效率下降，外勤蜂數可能短暫降低。",
    baseRiskLevel: "中高",
    monitoringAdvice: "加入風速監測，風速過高時降低外勤活動判斷權重。",
    devices: ["風速警報", "外勤判斷修正"]
  },
  "台北": {
    region: "台北市",
    coordinates: { latitude: 25.04, longitude: 121.56 },
    specialClimate: "濕冷、多雨",
    farmName: "台北蜂場",
    mapQuery: "台北 蜂場",
    climateFeature: "台北冬季常受東北季風影響，濕冷與降雨會降低戶外活動條件。",
    beeImpact: "低溫與潮濕會使蜜蜂活動下降，蜂箱也較容易潮濕。",
    baseRiskLevel: "中",
    monitoringAdvice: "加強濕度與低溫監測，必要時提醒保溫與防潮。",
    devices: ["濕度警報", "低溫警報"]
  },
  "宜蘭": {
    region: "宜蘭縣",
    coordinates: { latitude: 24.76, longitude: 121.75 },
    specialClimate: "東北季風、多雨潮濕",
    farmName: "宜蘭蜂場",
    mapQuery: "宜蘭 蜂場",
    climateFeature: "宜蘭在冬季與東北季風期間降雨明顯，環境濕度偏高。",
    beeImpact: "蜂箱濕度升高，可能增加病害與真菌風險，也會降低蜜蜂外出活動。",
    baseRiskLevel: "中高",
    monitoringAdvice: "加強濕度監測、防潮設計，並減少雨天開箱。",
    devices: ["濕度警報", "防潮提醒"]
  },
  "花蓮": {
    region: "花蓮縣",
    coordinates: { latitude: 23.99, longitude: 121.60 },
    specialClimate: "焚風、地形影響",
    farmName: "花蓮蜂場",
    mapQuery: "花蓮 蜂場",
    climateFeature: "受中央山脈與氣流影響，特定天氣條件下可能出現乾熱風。",
    beeImpact: "蜂箱溫度可能快速升高，蜜蜂容易承受熱壓力與缺水壓力。",
    baseRiskLevel: "高",
    monitoringAdvice: "啟動高溫警報、補水提醒與霧化降溫，並觀察蜂箱內溫度變化。",
    devices: ["高溫警報", "補水提醒", "霧化器"]
  },
  "台東": {
    region: "台東縣",
    coordinates: { latitude: 22.76, longitude: 121.14 },
    specialClimate: "焚風",
    farmName: "台東蜂場",
    mapQuery: "台東 蜂場",
    climateFeature: "受地形與氣流影響，可能出現乾熱風，使氣溫快速升高。",
    beeImpact: "蜂箱溫度快速升高，蜜蜂容易產生熱壓力，外勤活動也可能受到影響。",
    baseRiskLevel: "高",
    monitoringAdvice: "啟動高溫警報、補水提醒與霧化降溫，必要時加強遮陰。",
    devices: ["高溫警報", "補水提醒", "霧化器"]
  },
  "南投": {
    region: "南投縣",
    coordinates: { latitude: 23.96, longitude: 120.97 },
    specialClimate: "山區低溫、日夜溫差",
    farmName: "南投蜂場",
    mapQuery: "南投 蜂場",
    climateFeature: "南投山區與高海拔地區氣溫較低，日夜溫差可能明顯。",
    beeImpact: "低溫會使蜜蜂外出減少，蜂群需要更穩定的保溫環境。",
    baseRiskLevel: "中",
    monitoringAdvice: "加入低溫警報，低溫時減少開箱並加強蜂箱保溫。",
    devices: ["低溫警報", "保溫提醒"]
  },
  "澎湖": {
    region: "澎湖縣",
    coordinates: { latitude: 23.57, longitude: 119.58 },
    specialClimate: "強風、鹽分",
    farmName: "澎湖蜂場",
    mapQuery: "澎湖 蜂場",
    climateFeature: "澎湖受海島環境影響，風勢強且空氣鹽分較高。",
    beeImpact: "強風使蜜蜂飛行困難，長期環境壓力也可能影響蜂群穩定。",
    baseRiskLevel: "高",
    monitoringAdvice: "加強風速與環境壓力監測，強風時降低外勤活動判斷。",
    devices: ["風速警報", "外勤判斷修正"]
  }
};

const citySelect = document.querySelector("#citySelect");
const regionName = document.querySelector("#regionName");
const riskBadge = document.querySelector("#riskBadge");
const specialClimate = document.querySelector("#specialClimate");
const deviceSummary = document.querySelector("#deviceSummary");
const dockRegion = document.querySelector("#dockRegion");
const dockFarmName = document.querySelector("#dockFarmName");
const dockMapLink = document.querySelector("#dockMapLink");
const dockMapFrame = document.querySelector("#dockMapFrame");
const climateFeature = document.querySelector("#climateFeature");
const beeImpact = document.querySelector("#beeImpact");
const monitoringAdvice = document.querySelector("#monitoringAdvice");
const currentTemp = document.querySelector("#currentTemp");
const currentWind = document.querySelector("#currentWind");
const currentHumidity = document.querySelector("#currentHumidity");
const weatherTime = document.querySelector("#weatherTime");
const weatherStatus = document.querySelector("#weatherStatus");
const activityStatusBadge = document.querySelector("#activityStatusBadge");
const activityRiskSummary = document.querySelector("#activityRiskSummary");
const activityRiskFactors = document.querySelector("#activityRiskFactors");
const actionAdviceList = document.querySelector("#actionAdviceList");
const seasonSelect = document.querySelector("#seasonSelect");
const assistantTemp = document.querySelector("#assistantTemp");
const assistantHumidity = document.querySelector("#assistantHumidity");
const generateAssistantAdvice = document.querySelector("#generateAssistantAdvice");
const assistantAdviceText = document.querySelector("#assistantAdviceText");
const trendStatus = document.querySelector("#trendStatus");
const trendChart = document.querySelector("#trendChart");
const tempTrend = document.querySelector("#tempTrend");
const humidityTrend = document.querySelector("#humidityTrend");
const windTrend = document.querySelector("#windTrend");
const navLocation = document.querySelector("#navLocation");
const heroTemp = document.querySelector("#heroTemp");
const heroWind = document.querySelector("#heroWind");
const heroHumidity = document.querySelector("#heroHumidity");
const heroRisk = document.querySelector("#heroRisk");

let activeCity = citySelect.value;
let activeWeather = null;

function riskClass(level) {
  if (level === "低") return "risk-low";
  if (level === "中") return "risk-medium";
  if (level === "中高") return "risk-mid-high";
  return "risk-high";
}

function riskScore(level) {
  return { "低": 1, "中": 2, "中高": 3, "高": 4 }[level] || 2;
}

function riskLevelFromScore(score) {
  if (score >= 4) return "高";
  if (score === 3) return "中高";
  if (score === 2) return "中";
  return "低";
}

function evaluateLiveRisk(baseLevel, weather) {
  let score = riskScore(baseLevel);
  const notes = [];

  if (weather.temperature >= 35) {
    score = Math.max(score, 4);
    notes.push("即時溫度高於 35 C，蜂箱可能出現熱壓力");
  } else if (weather.temperature < 10) {
    score = Math.max(score, 3);
    notes.push("即時溫度低於 10 C，蜜蜂活動可能明顯下降");
  }

  if (weather.windSpeed >= 30) {
    score = Math.max(score, 4);
    notes.push("即時風速偏高，外勤蜂飛行與採集可能受阻");
  } else if (weather.windSpeed >= 20) {
    score = Math.max(score, 3);
    notes.push("即時風速較強，建議提高風速警示");
  }

  if (weather.humidity >= 85) {
    score = Math.max(score, 3);
    notes.push("即時濕度偏高，蜂箱需注意防潮與病害風險");
  } else if (weather.humidity <= 45) {
    score = Math.max(score, 3);
    notes.push("即時濕度偏低，建議補水並注意乾燥壓力");
  }

  return {
    level: riskLevelFromScore(score),
    notes
  };
}

function evaluateActivityRisk(weather) {
  const factors = [];
  const actions = [];
  let score = 0;

  if (weather.temperature > 35) {
    score += 3;
    factors.push({ title: "高溫壓力", detail: "溫度高於 35 C，蜂箱容易累積熱壓力。" });
    actions.push("建議啟動霧化器並增加遮陰。");
    actions.push("今日不建議正中午開箱檢查。");
  } else if (weather.temperature >= 32) {
    score += 1;
    factors.push({ title: "溫度偏高", detail: "溫度偏高，需觀察蜂箱散熱狀態。" });
    actions.push("建議加強通風並準備補水。");
  }

  if (weather.humidity > 85) {
    score += 2;
    factors.push({ title: "黴菌風險", detail: "濕度高於 85%，蜂箱需注意防潮與病害。" });
    actions.push("建議啟動濕度警報並保持蜂箱乾燥。");
  }

  if (weather.windSpeed > 28.8) {
    score += 2;
    factors.push({ title: "採蜜效率下降", detail: "風速高於 8 m/s，外勤蜂飛行與採集可能下降。" });
    actions.push("建議降低外勤蜂數判斷權重。");
  }

  if (weather.rain > 0) {
    score += 2;
    factors.push({ title: "降雨影響", detail: "目前有降雨訊號，蜜蜂外出採蜜可能減少。" });
    actions.push("今日不建議開箱檢查。");
  }

  if (weather.humidity <= 45 || weather.temperature >= 34) {
    actions.push("建議補充糖水或確認水源充足。");
  }

  if (factors.length === 0) {
    factors.push({ title: "環境穩定", detail: "目前溫度、濕度與風速未觸發主要警示。" });
    actions.push("維持一般監測並觀察外勤蜂活動。");
  }

  if (score >= 4) {
    return { label: "高風險", className: "status-danger", summary: "目前蜂群活動風險偏高，建議採取控制措施。", factors, actions };
  }

  if (score >= 2) {
    return { label: "注意", className: "status-warning", summary: "目前環境條件需要注意，建議加強監測。", factors, actions };
  }

  return { label: "正常", className: "status-normal", summary: "目前環境條件大致穩定，適合一般監測。", factors, actions };
}

function renderActivityRisk(weather) {
  const result = evaluateActivityRisk(weather);
  activityStatusBadge.className = `activity-badge ${result.className}`;
  activityStatusBadge.innerHTML = `<span class="status-dot"></span>${result.label}`;
  activityRiskSummary.textContent = result.summary;
  activityRiskFactors.innerHTML = result.factors
    .map((factor) => `<div class="factor-item"><strong>${factor.title}</strong><span>${factor.detail}</span></div>`)
    .join("");
  actionAdviceList.innerHTML = result.actions
    .map((action) => `<li>${action}</li>`)
    .join("");
}

function generateAdviceText(city, weather, season) {
  const data = climateData[city];
  const temp = Number(assistantTemp.value);
  const humidity = Number(assistantHumidity.value);
  const tempText = temp >= 35 ? "高溫明顯" : temp >= 32 ? "溫度偏高" : temp < 15 ? "溫度偏低" : "溫度穩定";
  const humidityText = humidity > 85 ? "濕度偏高" : humidity < 45 ? "濕度偏低" : "濕度適中";
  const suggestions = [];

  if (temp >= 35) suggestions.push("開啟霧化器", "增加遮陰", "避免正中午開箱");
  if (humidity > 85) suggestions.push("加強防潮", "檢查蜂箱通風");
  if (humidity < 45) suggestions.push("確認水源", "補充糖水");
  if (weather && weather.windSpeed > 28.8) suggestions.push("暫時降低外勤活動判斷");
  if (suggestions.length === 0) suggestions.push("維持一般巡檢", "觀察攝影模組回傳的外勤蜂活動");

  return `${data.region}目前為${season}，${tempText}且${humidityText}。受到「${data.specialClimate}」影響，蜜蜂可能出現活動變化或蜂箱環境壓力。建議${suggestions.join("、")}。`;
}

function renderAssistantAdvice() {
  assistantAdviceText.textContent = generateAdviceText(activeCity, activeWeather, seasonSelect.value);
}

function formatTime(value) {
  if (!value) return "無資料";
  return value.replace("T", " ");
}

function getLast24Hours(hourly, currentTime) {
  if (!hourly || !hourly.time) return [];
  const current = new Date(currentTime);
  const start = new Date(current.getTime() - 24 * 60 * 60 * 1000);

  return hourly.time
    .map((time, index) => ({
      time,
      date: new Date(time),
      temperature: hourly.temperature_2m[index],
      humidity: hourly.relative_humidity_2m[index],
      windSpeed: hourly.wind_speed_10m[index]
    }))
    .filter((point) => point.date >= start && point.date <= current)
    .slice(-24);
}

function normalizePoints(values, width, height, padding) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;

  return values.map((value, index) => {
    const x = padding.left + (innerWidth * index) / Math.max(values.length - 1, 1);
    const y = padding.top + innerHeight - ((value - min) / range) * innerHeight;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}

function summarizeSeries(points, key, unit, digits = 1) {
  if (!points.length) return "無資料";
  const values = points.map((point) => point[key]).filter((value) => Number.isFinite(value));
  if (!values.length) return "無資料";
  const latest = values[values.length - 1];
  const min = Math.min(...values);
  const max = Math.max(...values);
  return `最新 ${latest.toFixed(digits)}${unit}｜低 ${min.toFixed(digits)}｜高 ${max.toFixed(digits)}`;
}

function renderTrendChart(points) {
  if (!points.length) {
    trendChart.innerHTML = `<text x="360" y="130" text-anchor="middle" class="chart-label">目前沒有足夠的 24 小時資料</text>`;
    trendStatus.textContent = "目前無法顯示歷史趨勢。";
    tempTrend.textContent = "無資料";
    humidityTrend.textContent = "無資料";
    windTrend.textContent = "無資料";
    return;
  }

  const width = 720;
  const height = 260;
  const padding = { top: 28, right: 26, bottom: 34, left: 36 };
  const tempPoints = normalizePoints(points.map((point) => point.temperature), width, height, padding);
  const humidityPoints = normalizePoints(points.map((point) => point.humidity), width, height, padding);
  const windPoints = normalizePoints(points.map((point) => point.windSpeed), width, height, padding);
  const firstTime = points[0].time.slice(11, 16);
  const lastTime = points[points.length - 1].time.slice(11, 16);

  trendChart.innerHTML = `
    <line class="chart-grid" x1="36" y1="28" x2="36" y2="226"></line>
    <line class="chart-grid" x1="36" y1="226" x2="694" y2="226"></line>
    <line class="chart-grid" x1="36" y1="94" x2="694" y2="94"></line>
    <line class="chart-grid" x1="36" y1="160" x2="694" y2="160"></line>
    <polyline class="chart-line chart-temp" points="${tempPoints}"></polyline>
    <polyline class="chart-line chart-humidity" points="${humidityPoints}"></polyline>
    <polyline class="chart-line chart-wind" points="${windPoints}"></polyline>
    <text x="36" y="246" class="chart-label">${firstTime}</text>
    <text x="694" y="246" text-anchor="end" class="chart-label">${lastTime}</text>
    <text x="42" y="22" class="chart-label">過去 24 小時</text>
  `;
  trendStatus.textContent = `已載入 ${points.length} 筆 hourly 資料。`;
  tempTrend.textContent = summarizeSeries(points, "temperature", " C");
  humidityTrend.textContent = summarizeSeries(points, "humidity", "%", 0);
  windTrend.textContent = summarizeSeries(points, "windSpeed", " km/h");
}

async function fetchCurrentWeather(data) {
  const { latitude, longitude } = data.coordinates;
  const params = new URLSearchParams({
    latitude,
    longitude,
    current: "temperature_2m,relative_humidity_2m,wind_speed_10m,rain",
    hourly: "temperature_2m,relative_humidity_2m,wind_speed_10m",
    past_days: "1",
    forecast_days: "1",
    timezone: "Asia/Taipei"
  });
  const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("weather request failed");
  }

  const weather = await response.json();
  return {
    temperature: weather.current.temperature_2m,
    humidity: weather.current.relative_humidity_2m,
    windSpeed: weather.current.wind_speed_10m,
    rain: weather.current.rain || 0,
    time: weather.current.time,
    history: getLast24Hours(weather.hourly, weather.current.time)
  };
}

function setLoadingWeather() {
  currentTemp.textContent = "讀取中";
  currentWind.textContent = "讀取中";
  currentHumidity.textContent = "讀取中";
  weatherTime.textContent = "讀取中";
  weatherStatus.textContent = "正在取得即時天氣資料。";
  activityStatusBadge.className = "activity-badge status-warning";
  activityStatusBadge.innerHTML = `<span class="status-dot"></span>讀取中`;
  activityRiskSummary.textContent = "正在依即時天氣資料判斷蜂群活動風險。";
  activityRiskFactors.innerHTML = "";
  actionAdviceList.innerHTML = "<li>等待即時資料更新。</li>";
  trendStatus.textContent = "正在讀取過去 24 小時資料。";
  trendChart.innerHTML = "";
  tempTrend.textContent = "讀取中";
  humidityTrend.textContent = "讀取中";
  windTrend.textContent = "讀取中";
}

function renderBaseResult(data) {
  regionName.textContent = data.region;
  specialClimate.textContent = data.specialClimate;
  deviceSummary.textContent = data.devices.join("、");
  dockRegion.textContent = data.region;
  dockFarmName.textContent = data.farmName;
  navLocation.textContent = data.region;
  dockMapLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.mapQuery)}`;
  dockMapFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(data.mapQuery)}&output=embed`;
  climateFeature.textContent = data.climateFeature;
  beeImpact.textContent = data.beeImpact;
  monitoringAdvice.textContent = data.monitoringAdvice;
  riskBadge.textContent = data.baseRiskLevel;
  riskBadge.className = `risk-badge ${riskClass(data.baseRiskLevel)}`;
  heroRisk.textContent = data.baseRiskLevel;
}

function renderWeather(data, weather) {
  const liveRisk = evaluateLiveRisk(data.baseRiskLevel, weather);
  const liveNotes = liveRisk.notes.length > 0 ? ` 即時補充：${liveRisk.notes.join("；")}。` : " 即時天氣未觸發額外警示。";
  activeWeather = weather;

  currentTemp.textContent = `${weather.temperature.toFixed(1)} C`;
  currentWind.textContent = `${weather.windSpeed.toFixed(1)} km/h`;
  currentHumidity.textContent = `${Math.round(weather.humidity)}%`;
  heroTemp.textContent = `${weather.temperature.toFixed(1)} C`;
  heroWind.textContent = `${weather.windSpeed.toFixed(1)} km/h`;
  heroHumidity.textContent = `${Math.round(weather.humidity)}%`;
  weatherTime.textContent = formatTime(weather.time);
  weatherStatus.textContent = "即時資料已更新，來源為 Open-Meteo。";

  riskBadge.textContent = liveRisk.level;
  riskBadge.className = `risk-badge ${riskClass(liveRisk.level)}`;
  heroRisk.textContent = liveRisk.level;
  monitoringAdvice.textContent = `${data.monitoringAdvice}${liveNotes}`;
  assistantTemp.value = weather.temperature.toFixed(1);
  assistantHumidity.value = Math.round(weather.humidity);
  renderActivityRisk(weather);
  renderTrendChart(weather.history);
  renderAssistantAdvice();
}

function renderWeatherError(data) {
  const fallbackWeather = { temperature: Number(assistantTemp.value) || 30, humidity: Number(assistantHumidity.value) || 70, windSpeed: 0, rain: 0 };
  activeWeather = fallbackWeather;
  currentTemp.textContent = "無法取得";
  currentWind.textContent = "無法取得";
  currentHumidity.textContent = "無法取得";
  weatherTime.textContent = "請稍後再試";
  weatherStatus.textContent = "目前無法取得即時資料，先顯示地區氣候規則判斷。";
  riskBadge.textContent = data.baseRiskLevel;
  riskBadge.className = `risk-badge ${riskClass(data.baseRiskLevel)}`;
  renderActivityRisk(fallbackWeather);
  renderTrendChart([]);
  renderAssistantAdvice();
}

async function updateResult(city) {
  activeCity = city;
  const data = climateData[city];
  renderBaseResult(data);
  setLoadingWeather();

  try {
    const weather = await fetchCurrentWeather(data);
    renderWeather(data, weather);
  } catch (error) {
    renderWeatherError(data);
  }
}

citySelect.addEventListener("change", (event) => {
  updateResult(event.target.value);
});

generateAssistantAdvice.addEventListener("click", renderAssistantAdvice);
seasonSelect.addEventListener("change", renderAssistantAdvice);
assistantTemp.addEventListener("input", renderAssistantAdvice);
assistantHumidity.addEventListener("input", renderAssistantAdvice);

updateResult(citySelect.value);
