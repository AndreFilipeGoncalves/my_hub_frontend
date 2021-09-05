<template>
    <button @click="handler">click me to test fetch</button>
    <div v-if="loadComplete"> {{t('message')}} </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, inject } from 'vue'
const { t } = useI18n()
const axios = inject('axios')

const loadComplete = ref(false)

const handler = async () => {
    try {
        await axios.get('https://my-hub-backend.herokuapp.com/users')
        loadComplete.value = true
    } catch (err) {}
}
</script>
