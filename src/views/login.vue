<template>
    <Form  @submit.prevent="handleSubmit" class="  m-2 py-2 flex justify-center items-center flex-col mx-auto max-w-xl gap-y-2 bg-slate-800 npm run rounded-md">

<div class="flex-row items-center justify-center   text-cyan-200">
<div class="flex justify-center items-center sm:flex-row flex-col">
    <label class="">enter your email</label></div>
<input type="email" placeHolder="enter email" class=" px-6 py-2 rounded-lg p-1 text-black m-1 " v-model="email"/>
<div class="flex justify-center items-center sm:flex-row flex-col">
    <label class=""> enter your password</label></div>
<input type="password"  placeHolder="password" class=" px-6 py-2 rounded-lg p-1 text-black m-1 " v-model="password">
<div class="flex justify-center items-center sm:flex-row flex-col">
    <label class=" text-amber-900"></label></div>
    <input type="submit" value="submit" class="px-12  py-3 rounded-lg p-1 text-white m-1 bg-blue-700">
</div>
<h1>dont have account ?<a href="/sign"><span class=" text-pink-800 gap-10">Sign Up</span></a></h1>
</Form>

</template>
<script>
/* import { body, validationResult } from 'express-validator'; */

export default{
    name:'sign',
    components: {},
    data(){
        return{
            email:"",
            password:"",
            data:false

        }
    },
    methods:{
   async handleSubmit(){
        const user={

            email:this.email,
            password:this.password,
            
        }
   let res=await fetch('http://localhost:7000/login/',{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify(user),
   })
   if(res.ok){
    let data=await res.json()
      alert(data.message);
      this.$router.push('/Home')
   }else{
    let data=await res.json()
      alert(data.message);
   }
    
}
}}
</script>