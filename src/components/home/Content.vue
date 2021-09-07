<template>
    <div class="content-wrapper">
        <img :src="require('@/assets/images/3622.jpg')" alt="">
        <a href="http://www.freepik.com">Designed by macrovector / Freepik</a>
        <!-- <h1 class="content-description"> description </h1>
        <div class="cards-wrapper"> cards </div> -->
    </div>
</template>

<style lang="scss">
.content-wrapper {
    width:100%;
    min-height:calc(100% - 80px);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
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
