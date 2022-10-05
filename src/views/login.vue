
<template>
    <form class=" flex text-white flex-col items-center justify-center ">
  <div class="flex justify-center items-center sm:flex-row flex-col">
    <label class="">enter your email</label></div>
<input type="text" placeHolder="enter email" class=" px-6 py-2 rounded-lg p-1 text-black m-1 " v-model="email" required>
<div class="flex justify-center items-center sm:flex-row flex-col">
    <label class=""> enter your password</label></div>
<input type="password"  placeHolder="password" class=" px-6 py-2 rounded-lg p-1 text-black m-1 " v-model="password" required>
<div class="flex justify-center items-center sm:flex-row flex-col">
    <label class="">confirm your password</label></div>
<input type="password" placeHolder="confirm password" class=" px-6 py-2 rounded-lg p-1 text-black m-1 " required >
<div class=" flex justify-center items-center sm:flex-row flex-col">
    <input type="submit" value="login" class="px-6 py-2 rounded-lg p-1 text-black m-1 bg-blue-700">
</div>
<div class="">dont have account?<span><router-link to="/sign" class=" underline text-pink-800">signUp</router-link></span></div>
</form>
</template>

<script>
export default {
    name:'login',
    component:{},

}
</script>

<style>

</style>