<template>
  <div>
    <NuxtLayout v-if="restaurant" name="restaurant-custom">
      <div class="restaurant-container">
        <div class="image-container">
          <img :src="restaurant.imageUrl" alt="" />
        </div>
        <div class="info-container">
          <h1>{{ restaurant.name }}</h1>
          <div class="stats-container">
            <h5>Revenue (in billions)</h5>
            <p>${{ restaurant.revenue }}</p>
          </div>
          <div class="stats-container">
            <h5>Number of Stores</h5>
            <p>{{ restaurant.numberOfStores }}</p>
          </div>
          <p class="content">{{ restaurant.content }}</p>
        </div>
      </div>
    </NuxtLayout>
    <div v-else>
      <NuxtLayout name="error">
        <template #title>
          <h1>Restaurant Not Found</h1>
        </template>
        <template #redirect>
           <a href="/restaurants">Go Back</a>
        </template>
      </NuxtLayout>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RestaurantData } from '@/types/gloable'
import restaurants from "@/data.json";
const route = useRoute();
const restaurantName = route.params.name;
const restaurant:RestaurantData= restaurants.find(
  (restaurant) => restaurant.name === restaurantName
);
useHead({
  title:restaurant ? restaurantName as string : '404 Not Found of This Resturant!',
  viewport:'width=device-width, initial-scale=1, maximum-scale=1',
  charset:'utf-8',
  meta:[
    {name:'description',content: `Top 50 Restaurant of the world-${restaurantName}`}
  ],
})
</script>
<style scoped>
.restaurant-container {
  display: flex;
}
.image-container {
  width: 75%;
  height: 95vh;
}
.image-container img {
  width: 100%;
  height: 100%;
}
.restaurant-not-found {
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.info-container {
  padding: 3rem;
  width: 50%;
}
.info-container h1 {
  text-transform: uppercase;
  font-size: 6rem;
  margin-bottom: 3rem;
}
.stats-container {
  display: flex;
  align-items: flex-end;
  margin-bottom: 1rem;
}
.stats-container h5 {
  width: 20rem;
  font-size: 2rem;
  margin: 0;
  margin-right: 5rem;
}
.stats-container p {
  font-size: 2rem;
  margin: 0;
}
.content {
  font-size: 1.5rem;
  margin-top: 4rem;
}
</style>