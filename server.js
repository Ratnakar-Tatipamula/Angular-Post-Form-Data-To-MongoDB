
// // const express = require('express');
// // const bodyparser = require('body-parser');
// // const path = require('path');

// //  const api = require('./server/router/api');

// const port = 3000;

// // const app = express();


// // app.use(express.static(path.join(__dirname,'dist')));

// // app.use(bodyparser.urlencoded({extended:true}));
// // app.use(bodyparser.json());

// // app.use('',api);

// // app.get('*',(req,res)=>{
// //     res.sendFile(path.join(__dirname,'dist/index.html'));
// // });


// // app.listen(port,function(){
// //     console.log("Server running on localhost:" + port);
// // })



// var express = require('express');//imp
// //const bodyparser = require('body-parser');
// var app = express();//imp

// const path = require('path');

//  //app.use(express.static(path.join(__dirname,'dist')));


// const api = require('./server/routes/api');//imp

// // app.get('/api', function(req, res){
// // //    res.send("helloworldssss....yyyyy");
// //       res.sendFile('./server/router/api');
// // });

// // app.use(bodyparser.urlencoded({extended:true}));
// // app.use(bodyparser.json());


// // app.use('/api',api);//imp
// app.use('',api);//imp

// app.get('*',(req,res)=>{
//         //  res.sendFile(path.join(__dirname,'dist/index.html'));
//        // res.sendFile(path.join(__dirname, 'dist/mongo-app/index.html'));
//    });
    

// app.listen(port,function(){
//     console.log("Server running on localhost:" + port);
// });//imp

// //app.listen(3000);//imp




const port = 3000;
var express = require('express');
var app = express();
const path = require('path');

var cors = require('cors')

app.use(cors()) 

const bodyparser = require('body-parser');

 const api = require('./server/routes/api');



//app.use(express.static(path.join(__dirname,'dist/my-app')))

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

//USE app.use() bodyparser BEFORE app.use() routes ------ IMPORTANT

app.use('/api',api);

app.get('*',(req,res)=>{
         //res.sendFile(path.join(__dirname,'dist/my-app/index.html'));
        // res.sendFile(path.join(__dirname, 'dist/my-app/index.html'));
        // res.sendFile(path.join(__dirname, './src', 'index.html'));
   });

app.post('/api/upload', (req, res) => {
   
   console.log('you can see url');
   console.log("req baseUrl is - "+ req.baseUrl);
   
   //res.send(req.param.names);
   console.log("req.body consists of whatever the data we have passed as second argument in http.post() method - "+ req.body);

   //you can individually access the values beacuse req.body  is Javascript Object.
   console.log("individually access the values beacuse req.body  is Javascript Object - " + req.body.names);

   //let us check the type of req.body
   console.log("check the type of req.body - " + typeof req.body);

   //let us check the type after parsing the req.body to JSON.
   console.log("check the type after parsing the req.body to JSON - " + JSON.stringify(req.body));
   
   //Before sending the response you need to convert the javascript object to JSON format.
   //The difference between javascript object and JSON is their types are OBJECT and STRING respectiively.
   res.send(JSON.stringify(req.body.names));
    
  // res.send(req.body.name);
   // res.send(req.body.email);
   // res.send(req.body.password);
});

// app.get('/sendData',(req,res)=> console.log('Data is sent'));
    

app.listen(port,function(){
    console.log("Server running on localhost:" + port);
});

