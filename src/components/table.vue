<template>
    <div class=" ">
      <!-- component -->
      <div class="overflow-x-auto">
        <div class="min-w-screen flex items-center justify-center bg-black font-sans overflow-hidden grid-rows-3 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-1 mx-auto pt-5 pb-7 flex-wrap">
          <div class="w-full lg:w-5/6">
            <div class="bg-white shadow-md rounded flex-wrap">
              <table class="min-w-max w-full table-auto">
                <thead>
                  <tr
                    class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
                  >
                    <th class="py-3 px-6 text-left">product</th>
                    <th class="py-3 px-6 text-left">amount</th>
                    <th class="py-3 px-6 text-center">mode of tansaction</th>
                    <th class="py-3 px-6 text-center">mode of transport</th>
                    <th class="py-3 px-6 text-center" @click="pay" >pay here</th>
                  </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light" >
  
                  <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class=" px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2">
                        </div>
                        <span class="font-medium">meat in kilos
                            <select name="age" id="age">
                            <option value=" " class=" text-black">1kg</option>
                            <option value=" " class=" text-black">2kg</option>
                            <option value=" " class=" text-black">3kg</option>
                            <option value=" " class=" text-black">4kg</option>

                            </select>
                        </span>
                      </div>
                    </td>
                    <td class="py-1 px-6 text-left">
                      <div class="flex items-center">
                        <div class="mr-2">
                       <!--    <img
                            class="w-6 h-6 rounded-full"
                            
                          /> -->
                        </div>
                        <span>mode
                            <strong> <select name="age" id="age">
                            <option value="10" class=" text-black">101</option>
                            <option value="20" class=" text-black">200</option>
                            <option value="30" class=" text-black">300</option>
                            <option value="40" class=" text-black">400</option>
                            </select></strong>
                        </span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex items-center justify-center">
                        <strong> <select name="age" id="age">
                            <option value="10" class=" text-black">cash</option>
                            <option value="20" class=" text-black">mpesa</option>
                            <option value="30" class=" text-black">paypall</option>
                            <option value="40" class=" text-black">bank agent</option>
                            </select></strong>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <span
                        class=" text-black py-1 px-3  text-xs">
                           <select name="age" id="age">
                            <option value="10" class=" text-black">stage</option>
                            <option value="20" class=" text-black">premises</option>
                            <option value="30" class=" text-black">delivery</option>
                            <option value="40" class=" text-black">station</option>
                            </select></span
                      >
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex item-center justify-center">
                        <div
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        
                          
                        </div>
                        <div
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" >
                      <button class="pay"> pay{{pay}}</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </template>
  
  <script>
  // @ is an alias to /src
  
  
  export default {
    name: "HomeView",
    components: {},
    data(){
      return{
      
       
  
      }
    },
      methods:{
        pay:function(){
          window.location="https://www.paypal-mobilemoney.com/m-pesa/register"
        }
  

      },
      mounted(){
       
  
      },
    };
  </script>