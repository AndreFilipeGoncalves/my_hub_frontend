<template>
    <h1> Day displayer {{day}}</h1>
</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps({
        day: [String, Number]
    })
</script>

<style></style>
