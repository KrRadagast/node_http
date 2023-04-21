console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const http = require("http");
const PORT=5000;
// Finish setting up the server
http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    res.setHeader("content-type","text/html")
    console.log(`request method used: ${method}`);
    const dataChunksArr=[];
    req.on('data',(chunk)=>{
        dataChunksArr.push(chunk);
    });
    req.on('end',()=>{ 
        if(method=="GET"){
            const body=JSON.parse(Buffer.concat(dataChunksArr).toString());
            const resbody={method,url,body}
            if(url=="/"){
            res.write("Wildcard")
            res.write(JSON.stringify(resbody))
            console.log("home route")
            res.statusCode=200;
            } else if(url=="/about"){
            res.write("<h2>Welcome to the club Welcome to the club</h2>");
            req.statusCode=200;
            res.end();
            }else if(url=="/echo"){
            res.write("blah")
            req.statusCode=202;
            res.end()
            }else{
            res.write("page not found");
            res.write("<h1>Page Not Found</h1>");
            req.statuscode=404;
            }
            res.end(); 
        }
    })
    
})
.listen(PORT,()=>{
        console.log(`server is listening at the local host ${PORT} port`)
})



// const http = require("http");

// // Finish setting up the server
// http.createServer((req,res)=>{
//     const url=req.url;
//     const PORT=3000;
//     const method=req.method;
//     res.setHeader("content-type","text/html")
//     console.log(`request method used: ${method}`);
//     const dataChunksArr=[];
//     req.on('data',(chunk)=>{
//         console.log(`chunk is: ${chunk}`);
//         dataChunksArr.push(chunk);
//     });
//     req.on('end',()=>{
        
//         if(method=="POST"){
//             const body=JSON.parse(Buffer.concat(dataChunksArr).toString());
//             const resbody={method,url,body}
//             if(url=="/"){
//             res.write("Wildcard")
//             res.write(JSON.stringify(resbody))
//             console.log("home route")
//             res.statusCode=202;
//             } else{
//             res.write("page not found");
//             }
//             res.end(); 
//         }
            
        
//         if(url=="/about"){
//             res.write("<h2>This is the story</h2>");
//             req.statusCode=200;
//             res.end();
//         };
//         if(url=="/echo"){
//             res.write("blah")
//             req.statusCode=202;
//             res.end()
        
//         }
//     })
//     .listen(PORT,()=>{
//         console.log(`server is listening at the local host ${PORT} port`)
// });
// })