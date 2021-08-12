// How to use redis to act like mqtt

const redis=require('redis')
const subsriber=redis.createClient({
    port:6379,
    host:"127.0.0.1"
})

subsriber.on('connect',()=>console.log('Connected to redis server'))

subsriber.on('message',(channel,message)=>{
    console.log('message : '+message+' on channel :'+channel)
})

subsriber.subscribe('notification')
