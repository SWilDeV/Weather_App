<template>
    <div>
        <div
            class="future-weather text-sm bg-indigo-300 px-6 py-4 overflow-hidden"
        >
            <div class="flex items-center">
                <div class="w-1/6 text-lg">
                    <h1>{{ DateValue }}</h1>
                    <h1>{{ TempDay }}°C</h1>
                </div>
                <div class="w-4/6 px-16 justify-center flex items-center">
                    <canvas
                        ref="iconDaily"
                        :id="`icon${day}`"
                        width="48"
                        height="48"
                    ></canvas>
                </div>
                <div class="w-1/6 text-right">
                    <h1>{{ TempMax }}°C</h1>
                    <h1>{{ TempMin }}°C</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getSkycon } from "./weatherIcons";
export default {
    name: "daily",
    data() {
        return {
            DateValue: "",
            TempDay: "",
            TempMin: "",
            TempMax: "",
            description: "",
            id: ""
        };
    },
    props: {
        clouds: Number,
        temps: Object,
        day: Number,
        weather: Array
    },

    mounted() {
        this.convertTime();
        this.convertTemps();
        this.convertWeather();
        this.getIcons();
    },
    methods: {
        getIcons() {
            var skycons = new Skycons({ color: "white" });
            const icon = getSkycon(this.id);
            skycons.add(`icon${this.day}`, icon);
            skycons.play();
        },
        convertTime() {
            const dateObject = new Date(this.day * 1000);
            this.DateValue = dateObject.toLocaleDateString(
                window.navigator.language,
                {
                    weekday: "short"
                }
            );
            // this.DateValue = dateObject.toLocaleDateString("fr-FR");
        },
        convertTemps() {
            if (this.temps == null) {
                this.TempDay = 0;
                this.TempMin = 0;
                this.TempMax = 0;
            } else {
                const t = Object.values(this.temps);
                this.TempDay = Math.round(t[0] - 273.15);
                this.TempMax = Math.round(t[2] - 273.15);
                this.TempMin = Math.round(t[3] - 273.15);
            }
        },
        convertWeather() {
            this.description = this.weather[0].description;
            this.id = this.weather[0].id;
        }
    }
};
</script>
