<template>
    <div class="home">
        <header class="header">
            <div class="name">图书馆管理系统</div>
            <div class="userInfor">welcome {{user}}</div>
        </header>
        <section class="main">
            <div class="menu">
                <ul>
                    <li class="list-item" v-for="item in menu">
                        <router-link :to="`/home${item.path}`">{{ item.title }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script setup>
    import {menu} from '../menuData'
    const user = localStorage.getItem('user')
</script>

<style lang="css" scoped>
.home{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.header{
    display: flex;
    height: 60px;
    background-color: #56474c;
    color: aliceblue;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
}
.name{
    font-size: 24px;
}
.main {
    flex: 1;
    display: flex;
}
.menu {
    flex: 0 0 200px;
    background-color: #bcabb0;
}
.content {
    flex: 1;
}
.menu-list {
    padding: 0 20px;
}
.list-item {
    height: 40px;
    line-height: 40px;
    font-style: 14px;
}
.list-item a{
    display: block;
    width: 100%;
    height: 100%;
}
</style>