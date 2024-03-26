const express = require('express')
const connectDB = require('./config/mongodb')
const userRoutes =  require('./routes/userRoutes');;
const path = require("path")
const dotenv = require('dotenv');
const { List } = require('./modals/listModals');
const { Task } = require('./modals/taskModals');
const app = express()



dotenv.config();
connectDB();
console.log(process.env.PORT)
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running..");
});


app.use('/api', userRoutes);

app.get('/lists' , (req , res) =>{
  List.find({}).then((lists)=>{
    res.send(lists);
  });
})

app.post('/lists',(req  , res)=>{
  const title = req.body.title;
  const description = req.body.description
  let newList = new List ({
    title,
    description
  })
  newList.save().then((listDoc) => {
    res.send(listDoc);
  })
})

app.patch('/lists' , (req , res)=>{
  List.findOneAndUpdate({_id : req.params.id},{
    $set: req.body
  }).then(()=>{
    res.sendStatus(200);
  });
})

app.delete('/lists/:id' , (req ,res)=> {
  List.findOneAndDelete({ _id : req.params.id})
  .then((removeLisrDoc)=>{
    res.send(removeLisrDoc);
  })
  })


//   app.get('/lists/:listId/tasks' , (req , res)=>{
//     Task.find({
//       _listId:req.params.listId
//     }).then((Task)=> {
//       res.send(Task);
//     })
//   })

// // app.get('lists/:listId/tasks/:tasksId' , (req , res)=>{
// //   Task.findOne({
// //     _id:req.params.tasksId,
// //     _listId:req.params.listId
// //   }).then((Task)=> {
// //     res.send(Task);
// //   })
// // })

//   app.post('/lists/:listId/tasks' , (req , res) =>{
//     let newTask = newTask({
//       title: req.body.title,
//       _listId:req.params.listId
//     });
//     newTask.save().then((newTaskDoc)=>{
//       res.send(newTaskDoc);
//     })
//   })

//   app.patch('/lists/:listId/tasks/:tasksId' , (req , res)=>{
//     Task.findOneAndUpdate({
//       _id:req.params.tasksId,
//       _listId:req.params.listId
//     },{$set:req.body})
//     .then(()=>{
//       res.sendStatus(200)
    
//     })
//   })

//   app.delete('/lists/:listId/tasks/:tasksId' , (req , res)=>{
//     Task.findOneAndDelete({
//       _id:req.params.tasksId,
//       _listId:req.params.listId
//     },)
//     .then((removeTaskDoc)=>{
//       res.sendStatus(removeTaskDoc);
    
//     })
//   })

// const __dirname1 = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname1, "/frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }

const PORT=process.env.PORT || 8000

app.listen(PORT, console.log(`Server started on port ${PORT}`));
