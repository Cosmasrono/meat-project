<template>
 <main class=" min-h-screen bg-black w-full gap-x-8">
 <main class="bg-cyan-400 flex justify-end items-center gap-x-16 flex-wrap">
  <nav class="  gap-x-2 max-h-3 text-lg text-white py-8 justify-center items-center flex hover:border-green-400 flex-wrap">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/services">services</router-link>|
    <router-link to="/visit">visit</router-link>|
   <router-link to="/login" class=" pr-2">login</router-link>
  </nav>
  <!-- <router-link to="/sign" class=" pr-5">sign</router-link> -->
  
 </main>
  <router-view/>
 </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:white;
}

nav a {
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color:white;
}
</style>
