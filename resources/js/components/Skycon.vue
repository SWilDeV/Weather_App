<template>
    <div>
        <canvas
            ref="iconCurrent"
            :id="`icon${city}`"
            width="96"
            height="96"
        ></canvas>
    </div>
</template>

<script>
import { getSkycon } from "./weatherIcons";
export default {
    name: "skycon",
    props: {
        city: String,
        weatherId: Number
    },
    mounted() {
        this.getIcons();
    },
    methods: {
        getIcons() {
            const skycons = new Skycons({ color: "white" });
            const icon = getSkycon(this.weatherId);
            console.log(this.weatherId);
            skycons.add(`icon${this.city}`, icon);
            skycons.play();
        }
    }
};
</script>
