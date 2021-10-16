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
                <skycon
                    v-if="icon"
                    :city="city"
                    :weatherId="weatherId"
                    :icon="icon"
                />
            </div>
        </div>
        <!--end current weather -->
        <div></div>
    </div>

    <!--end weather container -->
</template>

<script>
import skycon from "./Skycon.vue";
export default {
    name: "current",
    components: {
        skycon
    },
    props: {
        time: String,
        temp: Number,
        city: String,
        country: String,
        feel: Number,
        weatherId: Number,
        icon:String,
        cities: Array
    },
    computed: {
        addedCity() {
            return this.cities.slice(1);
        }
    },
};
</script>

<style></style>
