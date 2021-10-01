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
        this.useLocalData();
        //this.getFakeAPI();
    },
    methods: {
        async getWeatherData() {
            try {
                const APIKey = process.env.MIX_LOCATIONKEY;

                if (localStorage.getItem("testObject") === null) {
                    this.WeatherItems = await getWeather(APIKey);
                    const testObject = this.WeatherItems;
                    localStorage.setItem(
                        "testObject",
                        JSON.stringify(testObject)
                    );
                }
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
        },
        async useLocalData() {
            this.WeatherItems = await JSON.parse(
                localStorage.getItem("testObject")
            );
            console.log(this.WeatherItems);
        }
    }
};
</script>
