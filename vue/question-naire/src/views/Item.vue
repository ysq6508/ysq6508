<template>
    <ItemContainer parentComponent="item"/>
</template>

<script setup>
import ItemContainer from '@/components/ItemContainer.vue';
import { useQuestionStore } from '@/stores/question.js';

const questionStore = useQuestionStore()
// console.log(questionStore);
questionStore.getQuestionList()

</script>

<style lang="css" scoped>

</style>