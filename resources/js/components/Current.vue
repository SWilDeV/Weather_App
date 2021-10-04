<template>
    <!-- <h1>{{ time }}</h1> -->
    <div class="text-white mb-8">
        <div
            class="weather-container font-sans w-128 max-w-lg overflow-hidden bg-gray-900 shadow-lg mt-4"
        >
            <div
                class="current-weather flex items-center justify-between px-6 py-8"
            >
                <div class="flex items-center">
                    <div>
                        <div class="text-6xl font-semibold">
                            <p>{{ temperature }} °C</p>
                        </div>
                        <div>
                            <p>Ressenti: {{ feels }}°C</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>{{ city }}, {{ country }}</h1>
                    <h1>Heure: {{ currentTime }}</h1>
                    <h1>Jour: {{ currentDay }}</h1>

                    <h1>Humidite: {{ humidity }} %</h1>
                    <h1>Probabilite de pluie: {{ rainn }} %</h1>
                    <h1>Coucher de soleil: {{ sunsett }}</h1>
                    <h1>Force du vent: {{ windd }} km/h</h1>
                </div>
            </div>
        </div>
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
            windd: "",
            feels: ""
        };
    },
    props: {
        time: Number,
        temp: Number,
        humidity: Number,
        rain: Object,
        sunset: Number,
        wind: Number,
        city: String,
        country: String,
        feel: Number
    },
    mounted() {
        this.convertTime();
        this.convertMath();
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
            this.feels = Math.round(this.feel - 273.15);
            //rain
            const r = Object.values(this.rain);
            this.rainn = r[0] * 100;
            //wind
            this.windd = Math.round(this.wind);
        }
    }
};
</script>

<style></style>
