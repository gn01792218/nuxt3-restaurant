<template>
    <div class="container text-center">
    <NuxtLayout name="error">
        <template #title>
            <h1 class="mt-5 ">Page Not FFFFFound</h1>
        </template>
        <template #redirect>
            <a  href="/">Go to Back</a>
        </template>
    </NuxtLayout>
    </div>
</template>
<script setup lang="ts">
useHead({
  title:'404 Not Found',
  viewport:'width=device-width, initial-scale=1, maximum-scale=1',
  charset:'utf-8',
  meta:[
    {name:'description',content: '404 Not Found'}
  ],
})
</script>
