# Reference

<details><summary><code>client.<a href="/src/Client.ts">getHourlyForecastPastForecastHourlyGet</a>({ ...params }) -> Earth.HourlyWeatherResponse</code></summary>
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
await client.getHourlyForecastPastForecastHourlyGet({
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

**request:** `Earth.GetHourlyForecastPastForecastHourlyGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EarthClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

##

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
