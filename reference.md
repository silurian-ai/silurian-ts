# Reference

## Cyclone

<details><summary><code>client.cyclone.<a href="/src/api/resources/cyclone/client/Client.ts">queryForecasts</a>({ ...params }) -> Earth.CycloneForecastResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Query the available cyclone forecasts for a particular time

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cyclone.queryForecasts();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Earth.QueryForecastsCycloneForecastsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Cyclone.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.cyclone.<a href="/src/api/resources/cyclone/client/Client.ts">getForecastTrack</a>(stormId, { ...params }) -> Earth.FeatureCollection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get cyclone tracks in GeoJSON (MF-GeoJSON) format

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cyclone.getForecastTrack("storm_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**stormId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Earth.GetForecastTrackCycloneForecastsStormIdTrackGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Cyclone.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.cyclone.<a href="/src/api/resources/cyclone/client/Client.ts">getForecastCone</a>(stormId, { ...params }) -> Earth.FeatureCollection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get cyclone forecast cone in GeoJSON format

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cyclone.getForecastCone("storm_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**stormId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Earth.GetForecastConeCycloneForecastsStormIdConeGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Cyclone.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Weather Forecast

<details><summary><code>client.weather.forecast.<a href="/src/api/resources/weather/resources/forecast/client/Client.ts">daily</a>({ ...params }) -> Earth.DailyWeatherResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get daily weather forecast for a specific location
Only allowing local timezone aggregations for now since
it is unclear how exactly users will understand "UTC".

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.weather.forecast.daily({
    latitude: 47.6061,
    longitude: -122.3328,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Earth.weather.ForecastDailyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Forecast.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.weather.forecast.<a href="/src/api/resources/weather/resources/forecast/client/Client.ts">hourly</a>({ ...params }) -> Earth.HourlyWeatherResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get hourly weather forecast for a specific location

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.weather.forecast.hourly({
    latitude: 47.6061,
    longitude: -122.3328,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Earth.weather.ForecastHourlyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Forecast.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Weather Experimental

<details><summary><code>client.weather.experimental.<a href="/src/api/resources/weather/resources/experimental/client/Client.ts">extended</a>({ ...params }) -> Earth.HourlyWeatherResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get hourly weather forecast for a specific location and time

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.weather.experimental.extended({
    latitude: 47.6061,
    longitude: -122.3328,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Earth.weather.ExperimentalExtendedRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Experimental.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Weather Experimental Regional

<details><summary><code>client.weather.experimental.regional.<a href="/src/api/resources/weather/resources/experimental/resources/regional/client/Client.ts">usa</a>({ ...params }) -> Earth.GftusHourlyWeatherResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get hourly weather forecast for a specific location and time

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.weather.experimental.regional.usa({
    latitude: 47.6061,
    longitude: -122.3328,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Earth.weather.experimental.RegionalUsaRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Regional.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Weather Past Forecast

<details><summary><code>client.weather.past.forecast.<a href="/src/api/resources/weather/resources/past/resources/forecast/client/Client.ts">daily</a>({ ...params }) -> Earth.DailyWeatherResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get daily weather forecast for a specific location and time

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.weather.past.forecast.daily({
    latitude: 47.6061,
    longitude: -122.3328,
    time: "2024-01-01T00:00:00Z",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Earth.weather.past.ForecastDailyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Forecast.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.weather.past.forecast.<a href="/src/api/resources/weather/resources/past/resources/forecast/client/Client.ts">hourly</a>({ ...params }) -> Earth.HourlyWeatherResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get hourly weather forecast for a specific location and time

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.weather.past.forecast.hourly({
    latitude: 47.6061,
    longitude: -122.3328,
    time: "2024-01-01T00:00:00Z",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Earth.weather.past.ForecastHourlyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Forecast.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
