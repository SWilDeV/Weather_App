<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    public function index(){
        //Keys
        //$keyAPILocation=config('services.location.key');
        $keyAPIWeather=config('services.openweather.key');

        $latitude=request('latitude');
        $longitude=request('longitude');
        error_log($latitude);

        //Get Weather with location Info
        $Weather = Http::get("https://api.openweathermap.org/data/2.5/onecall?lat=$latitude&lon=$longitude&exclude=daily,minutely&appid=$keyAPIWeather");

        $WeatherJson = json_decode($Weather);
        
        return $WeatherJson;
    }
}
