<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    public function index(){
        $Weather = Http::get("https://api.openweathermap.org/data/2.5/onecall?lat=48.58&lon=-7.74&exclude=daily,minutely&appid=859c99b9bc71ec1e13aab389782a03a8");

        $WeatherJson = json_decode($Weather);
        return $WeatherJson;
        
        //return json_decode($Weather);
        //return view("weather", ["weather" => json_decode($Weather)]);
    }

    public function location(){
        $Location = Http::get("http://api.ipstack.com/check?access_key=94ef5268cf9cc8ab31169acc6ab269b3");

        $LocationJson = json_decode($Location);
        return $LocationJson;
    }
}
