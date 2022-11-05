<!-- <div class=" pt-3  bg-slate-900 mt-3 "> -->
  <template>
      <div class=" flex  flex-col md:flex-row justify-center items-center m-5 ">  
        <div class=" transition-all duration-500 transform hover:opacity-90 pt-1 hover:pb-1">
    <div class=" ">
      <!-- component -->
      <div class="overflow-x-auto md:left-36 md:mt-1 top-1 md:ml-2  md:relative  md:flex">
        <div class=" flex items-center justify-center bg-slate-600 font-sans overflow-hidden grid-rows-3 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 grid-cols-1  mx-auto pt-5 pb-7 ">
          <div class=" w-min md:w-5/6">
            <div class="bg-white shadow-md rounded">
              <table class=" table-auto">
                <thead>
                  <tr
                    class="bg bg-slate-900 "
                  >
                    <th class="py-1 px-3 text-left">product</th>
                    <th class="py-1 px-3 text-left">amount</th>
                    <th class="py-1 px-3 text-center">mode of tansaction</th>
                    <th class="py-1 px-3 text-center">mode of transport</th>
                    <th class="py-5 px-3 text-center" @click="pay" >pay here</th>
                  </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light" >
  
                  <tr class="border-b border-gray-200 ">
                    <td class=" px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2">
                        </div>
                        <span class="font-medium">kilos
                           <!-- < select name="age" id="age"  > -->
                              <input type="number" name="kilo" id="kilo" v-model="selected" placeholder=" ">
                          <!--   <option value=" " class=" text-black"  v-for="kilo in kilos" :key="kilo">{{kilo}}</option> -->
                           <!--  </select> -->
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
                        <span class=" font-medium">amount
                            <strong> <!-- <select name="age" id="age"> -->
                            <input type="number" name="amount" id="amount" class=" " readonly  v-model="selected" placeholder=" ">
                           
                          </strong>
                        </span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex items-center justify-center font-medium">
                        <strong> <select name="age" id="age">
                            <option value="10" class=" text-black " v-for="transaction in transactions" :key="transaction">{{transaction}}</option>
                           
                            </select></strong>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <span
                        class=" font-medium">
                           <select name="age" id="age">
                            <option value="10" class=" text-black" v-for="service in services" :key=" service">{{service}}</option>
                            
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
                      <button class=" no-underline text-black font-medium bg-white shadow-md rounded p-4" @click="btn" ><a href="https://www.paypal-mobilemoney.com/m-pesa/register">Pay</a></button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- <button class=" bg-white p-5">selected</button> -->
            </div>
          </div>
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
        selected:'',
      kilos:[
      "1kg","2kg","3kg","4kg"
      ],
      amounts:[
      "100","200","300","400","500","600","700" ],
      transactions:[
      "cash","paypall","mpesa","bank agent"
      ],
       services:["home","stage","premises"],
      
     sum:null,
      }
      
    },
      methods:{   
 btn(){
   b=4,
      a=2,
  sum=b*a


 }

      },
      mounted(){

  
      },
      
    };
  
  </script>