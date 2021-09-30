<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;
use Illuminate\Support\Facades\Http;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::post('/weather', [WeatherController::class, "index"]);

// Route::post('/weather', function(){
//     $keyAPIWeather=config('services.openweather.key');
//     $latitude=request('latitude');
//     $longitude=request('longitude');
//     error_log($latitude);
    
//     $Weather = Http::get("https://api.openweathermap.org/data/2.5/onecall?lat=$latitude&lon=$longitude&exclude=daily,minutely&appid=$keyAPIWeather");

//     $WeatherJson = json_decode($Weather);
    
//     return $WeatherJson;
// });


