<template>
    <div class="">
        <form  @submit.prevent="handleSubmit" class="  flex justify-center items-center flex-col mx-auto max-w-xl gap-y-2 bg-slate-200 border border-emerald-400 rounded-md">
    
    <div class="flex-row items-center justify-center bg-black text-cyan-200">
   <div class="flex justify-center items-center sm:flex-row flex-col">
    <label class=""> enter your first name</label></div>
     <input type="text" placeHolder="first name" class=" px-6 py-2 rounded-lg p-1 text-black m-1 " v-model="fname">
     <div class="flex justify-center items-center sm:flex-row flex-col">
        <label class=""> enter your second name</label></div>
    <input type="text" placeHolder="second name" class=" px-6 py-2 rounded-lg p-1 text-black m-1 " v-model="sname">
    <div class="flex justify-center items-center sm:flex-row flex-col">
        <label class="">enter your email</label></div>
    <input type="text" placeHolder="enter email" class=" px-6 py-2 rounded-lg p-1 text-black m-1 " v-model="email">
    <div class="flex justify-center items-center sm:flex-row flex-col">
        <label class=""> enter your password</label></div>
    <input type="text"  placeHolder="password" class=" px-6 py-2 rounded-lg p-1 text-black m-1 " v-model="password">
    <div class="flex justify-center items-center sm:flex-row flex-col">
        <label class="">confirm your password</label></div>
    <input type="text"  placeHolder="confirm password" class=" px-6 py-2 rounded-lg p-1 text-black m-1 " v-model="confirmPassword" >
    <div class="flex justify-center items-center sm:flex-row flex-col">
        <label class=" text-amber-900"></label></div>
        <input type="submit" value="submit" class="px-6 py-2 rounded-lg p-1 text-black m-1 bg-blue-700">
    </div>
    </form>
    </div>

</template>
<script>
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
            let url="http://localhost:5000/register"
          const res=await fetch(url,{
            method:'POST',
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(user)
          })
          if(res.ok){
            const data=await res.json()
            alert(data.message)
          }
            this.data=true 
            console.log(user)
/*             this.$router.push('/login') */

        }
        }
    }
</script>