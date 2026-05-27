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
const farmName = document.querySelector("#farmName");
const mapLink = document.querySelector("#mapLink");
const climateFeature = document.querySelector("#climateFeature");
const beeImpact = document.querySelector("#beeImpact");
const monitoringAdvice = document.querySelector("#monitoringAdvice");
const currentTemp = document.querySelector("#currentTemp");
const currentWind = document.querySelector("#currentWind");
const currentHumidity = document.querySelector("#currentHumidity");
const weatherTime = document.querySelector("#weatherTime");
const weatherStatus = document.querySelector("#weatherStatus");

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

function formatTime(value) {
  if (!value) return "無資料";
  return value.replace("T", " ");
}

async function fetchCurrentWeather(data) {
  const { latitude, longitude } = data.coordinates;
  const params = new URLSearchParams({
    latitude,
    longitude,
    current: "temperature_2m,relative_humidity_2m,wind_speed_10m",
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
    time: weather.current.time
  };
}

function setLoadingWeather() {
  currentTemp.textContent = "讀取中";
  currentWind.textContent = "讀取中";
  currentHumidity.textContent = "讀取中";
  weatherTime.textContent = "讀取中";
  weatherStatus.textContent = "正在取得即時天氣資料。";
}

function renderBaseResult(data) {
  regionName.textContent = data.region;
  specialClimate.textContent = data.specialClimate;
  deviceSummary.textContent = data.devices.join("、");
  farmName.textContent = data.farmName;
  mapLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.mapQuery)}`;
  climateFeature.textContent = data.climateFeature;
  beeImpact.textContent = data.beeImpact;
  monitoringAdvice.textContent = data.monitoringAdvice;
  riskBadge.textContent = data.baseRiskLevel;
  riskBadge.className = `risk-badge ${riskClass(data.baseRiskLevel)}`;
}

function renderWeather(data, weather) {
  const liveRisk = evaluateLiveRisk(data.baseRiskLevel, weather);
  const liveNotes = liveRisk.notes.length > 0 ? ` 即時補充：${liveRisk.notes.join("；")}。` : " 即時天氣未觸發額外警示。";

  currentTemp.textContent = `${weather.temperature.toFixed(1)} C`;
  currentWind.textContent = `${weather.windSpeed.toFixed(1)} km/h`;
  currentHumidity.textContent = `${Math.round(weather.humidity)}%`;
  weatherTime.textContent = formatTime(weather.time);
  weatherStatus.textContent = "即時資料已更新，來源為 Open-Meteo。";

  riskBadge.textContent = liveRisk.level;
  riskBadge.className = `risk-badge ${riskClass(liveRisk.level)}`;
  monitoringAdvice.textContent = `${data.monitoringAdvice}${liveNotes}`;
}

function renderWeatherError(data) {
  currentTemp.textContent = "無法取得";
  currentWind.textContent = "無法取得";
  currentHumidity.textContent = "無法取得";
  weatherTime.textContent = "請稍後再試";
  weatherStatus.textContent = "目前無法取得即時資料，先顯示地區氣候規則判斷。";
  riskBadge.textContent = data.baseRiskLevel;
  riskBadge.className = `risk-badge ${riskClass(data.baseRiskLevel)}`;
}

async function updateResult(city) {
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

updateResult(citySelect.value);
