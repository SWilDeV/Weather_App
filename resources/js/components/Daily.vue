<template>
    <div>
        <div
            class="future-weather text-sm bg-gray-700 px-6 py-8 overflow-hidden"
        >
            <div class="flex items-center">
                <div class="w-1/6 text-lg text-gray-820">{{ DateValue }}</div>
                <div class="w-4/6 px-4 flex items-center">
                    <div>Icon</div>
                    <div class="ml-3">Cloudy with a chance of rain</div>
                </div>
                <div class="w-1/6"></div>
            </div>
            <h1>nuages : {{ clouds }}</h1>
            <h1>{{ temp }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "daily",
    data() {
        return {
            DateValue: ""
        };
    },
    props: {
        clouds: Number,
        temp: Object,
        day: Number
    },
    mounted() {
        this.convertTime();
    },
    methods: {
        convertTime() {
            const dateObject = new Date(this.day * 1000);
            this.DateValue = dateObject.toLocaleDateString("fr-FR");
        }
    }
};
</script>
