<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    public function index(){
        $keyAPI=config('services.openweather.key');
        

        $Weather = Http::get("https://api.openweathermap.org/data/2.5/onecall?lat=48.58&lon=-7.74&exclude=daily,minutely&appid=$keyAPI");

        $WeatherJson = json_decode($Weather);
        return $WeatherJson;
        
        //return json_decode($Weather);
        //return view("weather", ["weather" => json_decode($Weather)]);
    }

    public function location(){
        $keyAPI=config('services.location.key');
        

        $Location = Http::get("http://api.ipstack.com/check?access_key=$keyAPI");

        // $Location = Http::get("https://jsonplaceholder.typicode.com/users/1/todos");


        $LocationJson = json_decode($Location);

        $latitude=($LocationJson->latitude);
        $longitude=($LocationJson->longitude);
        // return $LocationJson;

        //
        $keyAPI=config('services.openweather.key');
        

        $Weather = Http::get("https://api.openweathermap.org/data/2.5/onecall?lat=$latitude&lon=$longitude&exclude=daily,minutely&appid=$keyAPI");

        $WeatherJson = json_decode($Weather);
        return $WeatherJson;
        //

        
    }
}
