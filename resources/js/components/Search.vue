<template>
    <!-- <div class="flex inline-flex">
        <div>
            <input type="text" class="text-blue-500 w-full w-5/6" />
        </div>
        <div>
            <button
                type="button"
                class=" flex text-blue-500 w-1 text-align-right"
            >
                OK
            </button>
        </div>
    </div> -->
    <div class="p-4 bg-indigo-900">
        <div class="bg-white flex items-center rounded-full shadow-l">
            <input
                class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                id="search"
                type="text"
                placeholder="Rechercher une ville"
                v-model="city"
                v-on:keyup.enter="addNewCity"
            />

            <div class="p-4">
                <button
                    class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
                    v-on:click="addNewCity"
                >
                    GO
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "search-bar",
    data() {
        return {
            city: ""
        };
    },
    methods: {
        addNewCity() {
            const city = this.city;
            this.$emit("city-added", city);
            this.city = "";
        }
    }
};
</script>
