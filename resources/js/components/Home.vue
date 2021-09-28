<template>
    <div>
        hello you too 
    </div>
</template>

<script>
import { getWeather, getLocationInfo, getFakeAPI } from "./apiVue.js";
export default {
    name: "Home",
    data: function() {
        return {
            WeatherItems: [],
            LocationInfo: [],
            FakeAPI: []
        };
    },
    beforeMount() {
        //this.getWeatherData();
        this.getLocation();
        //this.getFakeAPI();
    },
    methods: {
        async getWeatherData() {
            try {
                this.WeatherItems = await getWeather();
                console.log(this.WeatherItems);
            } catch (e) {
                console.error(e);
            }
        },
        async getLocation() {
            try {
                this.LocationInfo = await getLocationInfo();
                console.log(this.LocationInfo);
            } catch (e) {
                console.error(e);
            }
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

<style></style>
