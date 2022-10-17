<template>
        <Form  @submit.prevent="handleSubmit" class="  m-2 py-2 flex justify-center items-center flex-col mx-auto max-w-xl gap-y-2 bg-slate-800 border border-emerald-400 rounded-md">
    
    <div class="flex-row items-center justify-center   text-cyan-200">
   <div class="flex justify-center items-center sm:flex-row flex-col">
    <label class=""> enter your first name</label></div>
     <input type="text" placeHolder="first name" class=" px-6 py-2 rounded-lg p-1 text-black m-1 " v-model="fname" required/>
     <div class="flex justify-center items-center sm:flex-row flex-col">
        <label class=""> enter your second name</label></div>
    <input type="text" placeHolder="second name" class=" px-6 py-2 rounded-lg p-1 text-black m-1 " v-model="sname" required/>
    <div class="flex justify-center items-center sm:flex-row flex-col">
        <label class="">enter your email</label></div>
    <input type="email" placeHolder="enter email" class=" px-6 py-2 rounded-lg p-1 text-black m-1 " v-model="email"/>
    <div class="flex justify-center items-center sm:flex-row flex-col">
        <label class=""> enter your password</label></div>
    <input type="text"  placeHolder="password" class=" px-6 py-2 rounded-lg p-1 text-black m-1 " v-model="password">
    <div class="flex justify-center items-center sm:flex-row flex-col">
        <label class="">confirm your password</label></div>
    <input type="text"  placeHolder="confirm password" class=" px-6 py-2 rounded-lg p-1 text-black m-1 " v-model="confirmPassword" >
    <div class="flex justify-center items-center sm:flex-row flex-col">
        <label class=" text-amber-900"></label></div>
        <input type="submit" value="submit" class="px-12  py-3 rounded-lg p-1 text-white m-1 bg-blue-700">
    </div>
    </Form>

</template>
<script>
/* import { body, validationResult } from 'express-validator'; */

    export default{
        name:'sign',
        components: {},
        data(){
            return{
                fname:"",
                sname:"",
                email:"",
                password:"",
                confirmPassword:" ",
                data:false

            }
        },
        methods:{
       async handleSubmit(){
            const user={
                fname:this.fname,
                sname:this.sname,
                email:this.email,
                password:this.password,
                confirmPassword:this.confirmPassword
            }
       let res=await fetch('http://localhost:7000/register/',{
        method:"POST",
        body:JSON.stringify(user),
        headers:{
            "Content-type":"application/json"
        }
       })
       if(res.ok){
        let data=res.json()
          alert(data.message);
       }
        
}
    }}
</script>