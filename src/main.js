import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../dist/main.css'

createApp(App).use(router).mount('#app')

/* const {mongoClient}=require('mongodb ')
let dbConnection
module.export={
    connectToDb:(cb)=>{
        mongoClient.connect('mongodb://localhost:27017/cosmas')
        .then((client)=>{
            dbConnection=client.db()
            return cb()

        })
        .catch(err=>{
            console.log(err);
            return cb(err)
        })

    },
    getDb:()=>{dbConnection}} */