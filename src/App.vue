<template>
    <app-header/>
    <router-view/>
</template>

<script setup>
import AppHeader from '@/components/header/Header'
</script>

<style lang="scss">
html, body, #app {
    width:100%;
    height:100%;
    overflow:hidden;
    background: #ffffff;
    font-family: 'Nunito', sans-serif;
}
</style>
