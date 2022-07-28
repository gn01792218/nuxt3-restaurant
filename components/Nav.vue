<template>
<nav class="navbar navbar-expand-lg"
:class="[{'navbar-dark bg-dark':darkMode},{'navbar-light bg-light':!darkMode}]"
>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Restaurantly</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="w-100 navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end align-items-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/restaurants">Restaurants</a>
        </li>
        <div>
          <i v-show="!darkMode" class="bi bi-lightbulb" @click="toggleDarkMode"></i>
          <i v-show="darkMode" class="bi bi-lightbulb-off" style="color:aliceblue" @click="toggleDarkMode"></i>
        </div>
      </ul>
    </div>
  </div>
</nav>
</template>
<script setup lang="ts">
const { darkMode, toggleDarkMode } = useDarkMode()
</script>