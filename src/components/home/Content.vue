<template>
    <div class="content-wrapper">
        <h1 class="content-description"> description </h1>
        <div class="cards-wrapper"> cards </div>
    </div>
</template>

<style lang="scss">
.content-wrapper {
    background-color:red;
    width:100%;
    min-height:calc(100% - 80px);
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    .content-description {}
    .cards-wrapper {}
}
</style>
