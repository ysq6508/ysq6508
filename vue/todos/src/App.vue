<template>
  <div>
      <ul>
        <li v-for="(item, index) in arr" key="index">{{ item }}</li>
      </ul>

      <button @click="handle">push</button>
      <button @click="reverse">reverse</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

let arr = reactive(['html', 'css', 'js', 'vue'])

const handle = () => {
  arr.push('node')
}

const reverse = () => {
  // arr.reverse()
  /*arr = arr.map((item) => {  // map 会返回一个新数组，但新数组不是响应式，此法无用
    return item + '1';
  })*/
  arr.forEach((item, index) => {  // map 会返回一个新数组，但新数组不是响应式，此法无用
    arr[index] = item + '1';
  })
}

</script>

<style lang="css" scoped>

</style>