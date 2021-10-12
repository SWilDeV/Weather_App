<template>
    <div>
        <div
            class="current-weather bg-indigo-900 flex items-center justify-between px-10 pb-7"
        >
            <div>
                <div>
                    <div class="pt-2">
                        <h1>{{ time }}</h1>
                    </div>
                    <div class="pt-5">
                        <h1>{{ city }}, {{ country }}</h1>
                    </div>

                    <div>
                        <div class="text-6xl font-semibold pt-4 pb-1">
                            <p>{{ temp }} °C</p>
                        </div>
                        <div class="">
                            <p>Ressenti: {{ feel }}°C</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <canvas
                    ref="iconCurrent"
                    :id="`icon${city}`"
                    width="96"
                    height="96"
                ></canvas>
            </div>
        </div>
        <!--end current weather -->
        <div></div>
    </div>

    <!--end weather container -->
</template>

<script>
import { getSkycon } from "./weatherIcons";
export default {
    name: "current",
    props: {
        time: String,
        temp: Number,
        city: String,
        country: String,
        feel: Number,
        weatherId: Number
    },
    mounted() {
        this.getIcons();
    },
    computed: {},
    methods: {
        getIcons() {
            var skycons = new Skycons({ color: "white" });
            const icon = getSkycon(this.weatherId);
            skycons.add(`icon${this.city}`, icon);
            skycons.play();
        }
    }
};
</script>

<style></style>
