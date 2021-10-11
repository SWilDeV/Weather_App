<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Weather</title>
        <link rel="stylesheet" href="/css/main.css">
        <script src="https://maxdow.github.io/skycons/skycons.js"></script>
        <script src="/js/app.js" defer ></script>

    </head>
    <body>
        <div id="app" >
         <weather-app></weather-app>  
        </div>
    </body>
</html>
