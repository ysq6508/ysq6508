<template>
  <div class="app">
    <!--
    <h2>{{ title }}</h2>
    <h2 v-text="title2"></h2>
    <h3 v-html="content"></h3>-->
    <!--
    <button v-on:click="add" @mousemove="move">{{ count }}</button>-->

    <!--有时候url不能直接写死，如果不用v-bind，src里不能直接用url变量-->
    <!-- <img v-bind:src="url" alt="" @click="handle" v-bind:class="{'bd': active}"> -->
    <!-- <img v-bind:src="url" alt="" @click="handle" v-bind:class="name"> -->
    <!-- <img v-bind:src="url" alt="" @click="handle" v-bind:class="state.count >= 3 ? 'bd' : ''"> -->
    <!-- <img v-bind:src="url" alt="" @click="handle" v-bind:class="classObj"> -->
    <!-- <img v-bind:src="url" alt="" @click="handle" v-bind:class="getClass()"> -->
    <img v-bind:src="url" alt="" @click="handle" :style="`border: ${num}px solid red`">
  </div>

  <div class="main">
    <h2 v-if="isEn">{{ title1 }}</h2>
    <!-- <h2 v-else>{{ title2 }}</h2> -->

    <h2 v-show="isEn">{{ title2 }}</h2>

    <button @click="change">切换</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let title1 = 'Hello'
let title2 = '你好'
let isEn = ref(true)

const change = () => {
  isEn.value = !isEn.value
  // if(title.value === 'Hello'){
  //   title.value = '你好'
  // }else{
  //   title.value = 'Hello'
  // }
}
</script>



<!-- <script setup>
  /* 
  const title = 'Hello World'
  // const title2 = '标题'
  // const content = '<p>哈哈哈</p><p>嘻嘻嘻</p>' // 文本的富文本 
  */

  
  import { reactive, ref } from 'vue'
  /*
  let count = ref(0) //将它变成响应式数据，否则执行完js逻辑后，页面也不会重新渲染显示更新后的数据
  const add = () => {
    count.value++
  }
  const move = () => {
    console.log("shubiao ")
  }
  */

  const url = 'https://n.sinaimg.cn/sinakd20117/460/w1030h1030/20230709/9d50-a4470ba204233ed8119ad2527415f585.jpg'
  
  let active = ref(false)
  let name = ref('')
  let state = reactive({
    count: 0
  })
  let classObj = {
    bd: true
  }
let num = 1
  
  const handle = () => {
    // active.value = true  // 变成响应式后获取值要接一个.value
    // name.value = 'bd'
    state.count++
  }
  const getClass = () => {
    return 'bd'
  }
</script> -->

<style lang="css" scoped>
img{
  width: 100px;
  height: 100px;
}
.bd{
  border: 2px solid black;
}
</style>