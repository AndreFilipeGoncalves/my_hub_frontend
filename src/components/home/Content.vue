<template>
    <div class="content-wrapper">
        <example></example>
        <img :src="require('@/assets/images/3622.jpg')" alt="">

        <a href="http://www.freepik.com">Designed by macrovector / Freepik</a>
        <h1 class="content-description"> description </h1>
        <div class="cards-wrapper"> cards </div>
    </div>
</template>

<script setup>
import Example from '@/components/example'
</script>

<style lang="scss">
.content-wrapper {
    width:100%;
    min-height:calc(100% - 80px);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    h1 {
        margin-bottom:0px;
    }
    .wrappers {
        width:100%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-around;
        .wrapper {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            input {
                width:60px;
                height:60px;
                margin-right:10px;
            }
            label {
                font-size:40px;
                color:red;
            }
        }
    }
    button {
        margin-top:40px;
        background-color:red;
        color:white;
        border:1px solid pink;
        border-radius:10px;
        width:120px;
        height:60px;
    }

    img {
        max-width:40%;
        height:40%;
    }
    .content-description {}
    .cards-wrapper {}
    @media only screen and (max-width: 850px) {
        img {
            max-width:100%;
            height:100%;
        }
        a {
            color:white;
        }
    }
}
</style>

<a href="http://www.freepik.com">Designed by macrovector / Freepik</a>
