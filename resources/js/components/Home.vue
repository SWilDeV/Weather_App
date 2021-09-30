<template>
    <div>
        hello you too
    </div>
</template>

<script>
import { getWeather, getFakeAPI } from "./apiVue.js";
export default {
    name: "Home",
    data: function() {
        return {
            WeatherItems: [],
            FakeAPI: []
        };
    },
    beforeMount() {
        this.getWeatherData();
        //this.getFakeAPI();
    },
    methods: {
        async getWeatherData() {
            try {
                const APIKey = process.env.MIX_LOCATIONKEY;
                this.WeatherItems = await getWeather(APIKey);
                console.log(this.WeatherItems);
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

