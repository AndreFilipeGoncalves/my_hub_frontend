<template>
    <header class="header-wrapper">
        <div class="left-side-wrapper">
            <div class="logo">rule-hub</div>
            <app-menu :menuEntries="menuSetup"/>
        </div>
        <div class="right-side-wrapper">
            <user-icon/>
        </div>
    </header>
</template>

<script setup>
import AppMenu from '@/components/header/menu/Menu'
import { menuSetup } from '@/assets/setups/menu'
import UserIcon from '@/assets/icons/user.svg?inline'
</script>

<style lang="scss">
.header-wrapper {
    width:100%;
    height:80px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    box-sizing:border-box;
    padding:10px 20px;
    .left-side-wrapper {
        width:100%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:flex-start;
        .logo {
            font-size:48px;
            font-weight:bold;
            white-space:nowrap;
            font-family: 'Indie Flower', cursive;
            margin-right:30px;
            user-select:none;
            cursor:default;
        }
        .menu-wrapper {}
    }
    .right-side-wrapper {
        svg {
            width:24px;
            height:24px;
            cursor:pointer;
        }
    }
}
</style>
