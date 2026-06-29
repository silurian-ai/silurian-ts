# Reference
## Portfolios
<details><summary><code>client.portfolios.<a href="/src/api/resources/portfolios/client/Client.ts">features</a>(portfolio_id, { ...params }) -> Earth.FeatureCollection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return a GeoJSON FeatureCollection of features for a portfolio.
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
await client.portfolios.features("my-portfolio", {
    x: 1,
    y: 1,
    z: 1,
    country: "country"
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

**portfolio_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Earth.PortfoliosFeaturesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PortfoliosClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.portfolios.<a href="/src/api/resources/portfolios/client/Client.ts">forecasts</a>(portfolio_id, { ...params }) -> Earth.TimeSeriesFeatureCollectionModel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return a GeoJSON FeatureCollection of forecasts for a portfolio.
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
await client.portfolios.forecasts("my-portfolio", {
    id: ["station_A", "station_B"],
    variables: ["temperature", "wind_speed"],
    init_time: "2024-01-15T09:30:00Z"
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

**portfolio_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Earth.PortfoliosForecastsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PortfoliosClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.portfolios.<a href="/src/api/resources/portfolios/client/Client.ts">observations</a>(portfolio_id, { ...params }) -> Earth.TimeSeriesFeatureCollectionModel</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return a GeoJSON FeatureCollection of observations for a portfolio.
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
await client.portfolios.observations("my-portfolio", {
    id: ["station_A", "station_B"],
    variables: ["temperature", "wind_speed"],
    valid_time_start: "2024-01-15T09:30:00Z",
    valid_time_end: "2024-01-15T09:30:00Z"
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

**portfolio_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Earth.PortfoliosObservationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PortfoliosClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.portfolios.<a href="/src/api/resources/portfolios/client/Client.ts">initTime</a>(portfolio_id, { ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return the latest initialization time for a portfolio.
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
await client.portfolios.initTime("my-portfolio", {
    time: "2024-01-15T09:30:00Z"
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

**portfolio_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Earth.PortfoliosInitTimeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PortfoliosClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Cyclones Forecasts
<details><summary><code>client.cyclones.forecasts.<a href="/src/api/resources/cyclones/resources/forecasts/client/Client.ts">list</a>({ ...params }) -> Earth.CycloneForecastResponse[]</code></summary>
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
await client.cyclones.forecasts.list({
    time: "2024-01-15T09:30:00Z",
    min_storm_category: 1,
    basin_ids: ["basin_ids"],
    model: "OFCL"
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

**request:** `Earth.cyclones.ForecastsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ForecastsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cyclones.forecasts.<a href="/src/api/resources/cyclones/resources/forecasts/client/Client.ts">track</a>(storm_id, { ...params }) -> Earth.FeatureCollection</code></summary>
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
await client.cyclones.forecasts.track("storm_id", {
    time: "2024-01-15T09:30:00Z",
    max_lead_time: "max_lead_time",
    model: "OFCL"
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

**storm_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Earth.cyclones.ForecastsTrackRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ForecastsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cyclones.forecasts.<a href="/src/api/resources/cyclones/resources/forecasts/client/Client.ts">cone</a>(storm_id, { ...params }) -> Earth.FeatureCollection</code></summary>
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
await client.cyclones.forecasts.cone("storm_id", {
    time: "2024-01-15T09:30:00Z",
    max_lead_time: "max_lead_time",
    smooth_cone: true,
    model: "OFCL"
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

**storm_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Earth.cyclones.ForecastsConeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ForecastsClient.RequestOptions` 
    
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
    timezone: "local",
    units: "metric"
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

**requestOptions:** `ForecastClient.RequestOptions` 
    
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
    timezone: "local",
    units: "metric",
    include_past: true
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

**requestOptions:** `ForecastClient.RequestOptions` 
    
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
    timezone: "local",
    units: "metric"
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

**requestOptions:** `ForecastClient.RequestOptions` 
    
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
    timezone: "local",
    units: "metric"
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

**requestOptions:** `ForecastClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

