<template>
    <div class="day-info-wrapper">
        <!-- Brief -->
        <h1 class="heading">{{t('adventCalendar.brief')}}</h1>
        <!-- What it should be able to do -->
        <h3 class="info">{{t('adventCalendar.beAble')}}</h3>
        <!-- Getting started -->
        <h1 class="heading">{{t('adventCalendar.gettingStarted')}}</h1>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
    day: [String, Number]
})
</script>

<style lang="scss">
.day-info-wrapper {
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    padding-left:40px;
    .heading {
        font-size:3.5rem;
        color: rgb(54,67,77);
    }
    .info {
        font-size:1.5rem;
        color: rgb(54,67,77);
    }
}
</style>
