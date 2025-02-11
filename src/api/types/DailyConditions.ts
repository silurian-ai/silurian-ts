/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Earth from "../index";

export interface DailyConditions {
    timestamp: string;
    temperature?: number;
    precipitation_accumulation?: number;
    precipitation_probability?: number;
    precipitation_type?: Earth.PrecipitationType;
    snowfall_accumulation?: number;
    cloud_cover?: number;
    humidity?: number;
    wind_speed?: number;
    wind_direction?: number;
    dewpoint_temperature?: number;
    pressure?: number;
    downward_solar_radiation?: number;
    wind_speed_100m?: number;
    wind_direction_100m?: number;
    feels_like_temperature?: number;
    weather_code?: Earth.WeatherCode;
    max_temperature?: number;
    min_temperature?: number;
}
