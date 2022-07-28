<template>
<div :style="darkMode ? {backgroundColor:'black'} : null ">
  <div class="container text-center" >
      <h1 class="mt-5 ">Welcome to Restaurantly</h1>
      <a  href="/restaurants">Go to restaurants</a>
    </div>
</div>
</template>
<script setup lang="ts">
import useDarkMode from '~~/composables/useDarkMode';
const { darkMode } = useDarkMode()
useHead({
  title:'Restaurantly',
  viewport:'width=device-width, initial-scale=1, maximum-scale=1',
  charset:'utf-8',
  meta:[
    {name:'description',content: 'My First SEO Friendly APP'}
  ],
})
</script>