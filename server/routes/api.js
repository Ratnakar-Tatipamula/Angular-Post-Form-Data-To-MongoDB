
const express = require('express');
// const app = express();
// const bodyparser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
// const Video = require('../models/video');
// const Student = require('../models/Student');

console.log("hello world");

// app.use(bodyparser.urlencoded({extended:false}));
// app.use(bodyparser.json());

//  const db = "mongodb+srv://Ratna10:ratnakar@98@mongoclusterdemo-yqqwx.mongodb.net/test/videoplayer";

 const db = "mongodb+srv://Ratnakar20:ratnakar20@cluster0-oki0l.mongodb.net/college";



// const db = `mongodb://localhost:27017/videoplayer`;
// const db = `mongodb://Ratna10:${encodeURIComponent('ratnakar@10')}@localhost:27017/videoplayer`;




mongoose.Promise = global.Promise;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true },function(err){
    if(err){
        console.error("Error! " + err);
    }
    else{
        console.log("connection successful...");
    }
});






// mongoose.connect("mongodb://localhost:27017/test?authSource=admin",
//                      {user: 'Ratna10', pass: 'ratnakar@10'});


// router.get('/videos',function(req,res){
//     //res.send('api works');
//     console.log('Get request for all videos');
//     Video.find({})
//     .exec(function(err, videos){
//         if(err){
//             console.log("Error retrieving videos");
//         }else {
//             console.log("success");
//             res.json(videos);
//         }
//     });
// });



// router.get('/student-ret',function(req,res){
//     //res.send('api works');
//     console.log('Get request for all videos');
//     Student.find({})
//     .exec(function(err, videos){
//         if(err){
//             console.log("Error retrieving videos");
//         }else {
//             console.log("success");
//             res.json(videos);
//         }
//     });
    
// });

router.get('/user-ret',function(req,res){
    //res.send('api works');
    console.log('Get request for all users');
    User.find({})
    .exec(function(err, users){
        if(err){
            console.log("Error retrieving users");
        }else {
            console.log("successfully retrieved users");
            console.log(users);
            res.json(users);
        }
    });
    
});

router.get('/user-ins',function(req,res){
    //res.send('api works');
    console.log('inserting videos..');
    console.log(req.baseUrl);// Example Dem for req.baseUrl
    var user_instance = new User({ "name": 'David', "email": 'david@gmail.com', "password": 'david@20' });

    user_instance.save(function (err) {
        if (err) return handleError(err);
        // saved!
        else console.log("successfully inserted");
      });
    
});


router.post('/user-ins',function(req,res){
    //res.send('api works');
    console.log('inserting videosssss..');
    console.log(req.baseUrl);// Example Dem for req.baseUrl
    console.log(req.body);
    //var user_instance = new User({ "name": 'David', "email": 'david@gmail.com', "password": 'david@20' });
     var user_instance = new User({ "name": req.body.names, "email": req.body.emails, "password": req.body.passwords });

    user_instance.save(function (err) {
        if (err) return handleError(err);
        // saved!
        else console.log("successfully inserted");
      });
    
     res.send(JSON.stringify("Succesfully registered"));

});


// router.get('/student-del',function(req,res){
//     //res.send('api works');
//     console.log('Get request for all videos');
//     Student.remove({name:"David"})
//     .exec(function(err, videos){
//         if(err){
//             console.log("Error deleting videos");
//         }else {
//             console.log("successfully deleted");
//             res.json(videos);
//         }
//     });
    
// });

// router.get('/student-up',function(req,res){
//     //res.send('api works');
//     console.log('Get request for all videos');
//     Student.update( {name:"David"} , { $set: {name: "Henry"} }  )
//     .exec(function(err, videos){
//         if(err){
//             console.log("Error updating videos");
//         }else {
//             console.log("successfully updated");
//             res.json(videos);
//         }
//     });
    
// });

// var student_instance = new Student({ name: 'David' });

//     student_instance.save(function (err) {
//         if (err) return handleError(err);
//         // saved!
//       });




// router.get('/formsubmit',function(req,res){
//     //res.send('api works');
//     console.log('Get request for all videos');
    
//     Video.find({})
//     .exec(function(err, videos){
//         if(err){
//             console.log("Error retrieving videos");
//         }else {
//             console.log("success");
//             res.json(videos);
//         }
//     });


    
// });


module.exports = router;









// const express = require('express');
// const router = express.Router();

// router.get('/',function(req,res){
//     res.send('api works');
//     console.log("hello");
// });

// module.exports = router;