/*import http from 'http'
const server = http.createServer((req,res)=>{
    res.end("you request for something")

});
const port = 1000;
server.listen(port,()=>console.log(`server is runing on port ${port}`))*/

// ++++++++++++++ Routing in Node JS +++++++++++++

/*import http from 'http'
const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end('<h1>your request has been accepted</h1>')
})
const port = 2000;
server.listen(port, () => console.log(`server is runing on port ${port}`))*/


import http from 'http'
const server = http.createServer((req, res) => {
    if(req.url === '/wdm'){
        res.end("Welcome to web dev mastery")
    } else if(req.end === '/srk'){
        res.end("we are not to show anything about srk")

    }
    else{
        res.end("Invalid request")
    }
})
const port = 3000;
server.listen(port, () => console.log(`server is runing on port ${port}`))
