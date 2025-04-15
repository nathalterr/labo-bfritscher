<template>
    <div class="container">
        <h1>Donations</h1>
        <input v-model.number="amount" type="number" />
        <button v-on:click="addAmount" v-bind:disabled="amount <= 0">add</button>
        <p v-if="amount != '' && amount <= 0" class="bg-danger text-white mt-3 p-2">Attention...</p>
        <ul>
            <li v-for="(d, index) in donations" v-bind:key="index">
                {{ d }} <btn class="btn btn-danger btn-sm" v-on:click="removeDonation(index)">x</btn>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            amount: "",
            donations: [1234, 34, 234, 234]
        };
    },
    methods: {
        addAmount() {
            this.donations.push(this.amount);
            this.amount = "";
        },
        removeDonation(index) {
            this.donations.splice(index, 1);
        }
    }
};
</script>

<style></style>
