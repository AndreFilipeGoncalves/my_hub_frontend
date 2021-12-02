<template>
    <nav class="day-selector-wrapper">
        <router-link
        class="day-selector-entry"
        v-for="entry in daysList"
        :to="{name: entry.name, params: {day: entry.day}}"
        :key="entry.route">
            {{entry.label}}
        </router-link>
    </nav>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    daysList: Array
})
</script>

<style></style>
