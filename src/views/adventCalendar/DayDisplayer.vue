<template>
    <day-info :day="day"/>
</template>

<script setup>
import DayInfo from '@/components/adventCalendar/support/DayInfo'
import { defineProps } from 'vue'

const props = defineProps({
    day: [String, Number]
})
</script>

<style></style>
