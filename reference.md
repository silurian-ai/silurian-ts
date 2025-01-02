# Reference

## Forecasts

<details><summary><code>client.forecasts.<a href="/src/api/resources/forecasts/client/Client.ts">createDaily</a>({ ...params }) -> Silurian.DailyWeatherResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get daily weather forecast for a specific location

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
await client.forecasts.createDaily({
    latitude: 1.1,
    longitude: 1.1,
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

**request:** `Silurian.ForecastsCreateDailyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Forecasts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.forecasts.<a href="/src/api/resources/forecasts/client/Client.ts">createHourly</a>({ ...params }) -> Silurian.HourlyWeatherResponse</code></summary>
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
await client.forecasts.createHourly({
    latitude: 1.1,
    longitude: 1.1,
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

**request:** `Silurian.ForecastsCreateHourlyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Forecasts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
