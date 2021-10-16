<template>
    <div>
        <canvas
            ref="iconCurrent"
            :id="`iconCurrent`"
            width="96"
            height="96"
        ></canvas>
    </div>
</template>

<script>
export default {
    name: "skycon",
    props: {
        city: String,
        weatherId: Number,
        icon: String
    },
    mounted() {
        this.setCurrentIcon();
    },
    watch: {
        icon: {
            handler(newValue, oldValue) {
                this.setCurrentIcon();
            },
            deep: true
        }
    },
    methods: {
        async setCurrentIcon() {
            const skycons = new Skycons({ color: "white" });
            skycons.set("iconCurrent", this.icon);
            skycons.play();
        }
    }
};
</script>
