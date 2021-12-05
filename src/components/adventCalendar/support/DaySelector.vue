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

<style lang="scss">
.day-selector-wrapper {
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    box-sizing:border-box;
    padding:40px;
    flex-wrap:wrap;
    .day-selector-entry {
        width:75px;
        height:75px;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        text-align:center;
        box-sizing:border-box;
        margin:10px;
        border:2px dashed black;
        box-sizing:border-box;
        padding:10px;
        text-decoration:none;
        &:visited, :hover {
            color: inherit;
        }
        &.router-link-exact-active {
            background-color: black;
            font-weight:bold;
            color:white;
        }
    }
}
</style>
