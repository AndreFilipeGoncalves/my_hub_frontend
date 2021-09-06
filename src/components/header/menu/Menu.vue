<template>
    <nav class="menu-wrapper">
        <router-link
        class="menu-entry"
        v-for="entry in menuEntries"
        :to="entry.route"
        :key="entry.route">
            {{entry.label}}
        </router-link>
    </nav>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    menuEntries: Object
})

</script>

<style lang="scss">
.menu-wrapper {
    width:100%;
    height:40px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
    background-color:transparent;
    .menu-entry {
        box-sizing:border-box;
        padding:12px;
        font-size:24px;
        text-decoration:none;
        &.router-link-active {
            text-decoration: underline;
        }
    }
}
</style>
