<template>
    <NuxtLayout name="restaurant-custom">
        <RestaurantTable/>
    </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  title:'Top 50 Restaurant of the world',
  viewport:'width=device-width, initial-scale=1, maximum-scale=1',
  charset:'utf-8',
  meta:[
    {name:'description',content: 'Top 50 Restaurant of the world'}
  ],
})
</script>