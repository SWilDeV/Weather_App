<template>
    <div>
        <headerV :city="Location.city" :country="Location.country_name" />
        <current
            v-if="CurrentWeather"
            :time="CurrentWeather.dt"
            :temp="CurrentWeather.temp"
            :humidity="CurrentWeather.humidity"
            :rain="CurrentWeather.rain"
            :sunset="CurrentWeather.sunset"
            :wind="CurrentWeather.wind_speed"
        />
    </div>
</template>

<script>
import { getWeather, getFakeAPI, getLocation } from "./apiVue.js";
import headerV from "./Header";
import current from "./Current";
export default {
    name: "Home",
    components: {
        headerV,
        current
    },
    data: function() {
        return {
            WeatherItems: {},
            CurrentWeather: null,
            Location: {},
            FakeAPI: ""
        };
    },
    created() {
        this.getLocation();
    },
    methods: {
        async getLocation() {
            try {
                if (localStorage.getItem("WeatherData") === null) {
                    const APIKey = process.env.MIX_LOCATIONKEY;
                    const LocationData = await getLocation(APIKey);
                    localStorage.setItem(
                        "LocationData",
                        JSON.stringify(LocationData)
                    );

                    const lat = LocationData.latitude;
                    const long = LocationData.longitude;
                    const WeatherData = await getWeather(lat, long);
                    localStorage.setItem(
                        "WeatherData",
                        JSON.stringify(WeatherData)
                    );
                    this.useLocalData();
                } else {
                    this.useLocalData();
                }
            } catch (e) {
                console.log(e);
            }
        },
        async useLocalData() {
            this.WeatherItems = await JSON.parse(
                localStorage.getItem("WeatherData")
            );
            this.Location = await JSON.parse(
                localStorage.getItem("LocationData")
            );
            this.CurrentWeather = this.WeatherItems.current;
        },
        async getFakeAPI() {
            try {
                this.FakeAPI = await getFakeAPI();
                console.log(this.FakeAPI);
            } catch (e) {
                console.log(e);
            }
        }
    }
};
</script>
