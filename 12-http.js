const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
    res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our some information')
    }
    res.end(`
    <h1> Oops </h1>
    <h4> Something went wrong!</h4>
    <a href = '/'> Back Home </a>
    
    `)
    

})

server.listen(4000)