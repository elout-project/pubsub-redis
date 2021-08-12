const redis=require('redis')
const publisher=redis.createClient({
    port:6379,
    host:"127.0.0.1"
})

publisher.on('connect',()=>console.log('Connected to redis server'))
publisher.publish("notification","{\"message\":\"I am using Pub Sub node.js and Redis !!\"}",()=>process.exit(0))

