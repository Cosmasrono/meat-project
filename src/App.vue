<template>
 <main class=" min-h-screen bg-slate-900 w-full gap-x-8">
  <nav class=" bg-cyan-400 gap-x-9 max-h-3 text-lg text-white py-8">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/services">services</router-link>|
    <router-link to="/visit">visit</router-link>
  </nav>
  <router-view/>
 </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color:white;
}
</style>
