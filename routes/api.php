<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Http;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/weather', function(){
    $keyAPIWeather=config('services.openweather.key');
    $latitude=request('latitude');
    $longitude=request('longitude');
    
    $Weather = Http::get("https://api.openweathermap.org/data/2.5/onecall?lat=$latitude&lon=$longitude&exclude=daily,minutely&appid=$keyAPIWeather");

    $WeatherJson = json_decode($Weather);
    
    return $WeatherJson;
});
