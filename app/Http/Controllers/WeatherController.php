<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    public function index(){
        //Keys
        $keyAPILocation=config('services.location.key');
        $keyAPIWeather=config('services.openweather.key');

        //Get location info
        $Location = Http::get("http://api.ipstack.com/check?access_key=$keyAPILocation");

        $LocationJson = json_decode($Location);

        $latitude=($LocationJson->latitude);
        $longitude=($LocationJson->longitude);

        //Get Weather with location Info
        $Weather = Http::get("https://api.openweathermap.org/data/2.5/onecall?lat=$latitude&lon=$longitude&exclude=daily,minutely&appid=$keyAPIWeather");

        $WeatherJson = json_decode($Weather);
        
        return $WeatherJson;
    }
}
