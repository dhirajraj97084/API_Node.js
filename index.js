const http=require('http');
const url=require('url');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("welcome to home page");
    }else if(req.url=='/about'){
        res.end("welcome to about page");
    }else if(req.url=='/api'){
        fs.readFile(`${__dirname}/apidata.json`,'utf-8',(err,data)=>{
            console.log(data);
           // const objdata=JSON.parse(data);
            res.end(data);
        });
    }else{
        res.writeHead(404,"page does not exit");
        res.end();
    }
})

server.listen(3502,"127.0.0.1" ,()=>{
    console.log('your page successful run');
})