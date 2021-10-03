<template>
    <!-- <h1>{{ time }}</h1> -->
    <div>
        <h1>Heure: {{ currentTime }}</h1>
        <h1>Jour: {{ currentDay }}</h1>
        <h1>Temperature (Celcius): {{ temperature }}</h1>
        <h1>Humidite: {{ humidity }} %</h1>
        <h1>Probabilite de pluie: {{ rainn }} %</h1>
        <h1>Coucher de soleil: {{ sunsett }}</h1>
        <h1>Force du vent: {{ windd }} km/h</h1>
    </div>
</template>

<script>
export default {
    name: "current",
    data() {
        return {
            currentTime: "",
            currentDay: "",
            sunsett: "",
            temperature: "",
            rainn: "",
            windd: ""
        };
    },
    props: {
        time: Number,
        temp: Number,
        humidity: Number,
        rain: Object,
        sunset: Number,
        wind: Number
    },
    mounted() {
        this.convertTime();
        this.convertMath();
        this.convertRain();
    },
    methods: {
        convertTime() {
            const dateObject = new Date(this.time * 1000);
            const sunsetTime = new Date(this.sunset * 1000);
            this.currentTime = dateObject.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
            });
            this.currentDay = dateObject.toLocaleDateString("fr-FR");
            this.sunsett = sunsetTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
            });
        },
        convertMath() {
            //temperature
            this.temperature = Math.round(this.temp - 273.15);
            //rain
            const r = Object.values(this.rain);
            this.rainn = r[0] * 100;
            //wind
            this.windd = Math.round(this.wind);
        },
        convertRain() {}
    }
};
</script>

<style></style>
