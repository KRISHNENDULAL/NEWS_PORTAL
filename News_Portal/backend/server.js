const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const mongo_URI = process.env.MONGO_URL;
  

mongoose
  .connect(mongo_URI)
  .then(() => console.log("mongoDB Connected (success)"))
  .catch((err) => console.log(err));

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    default: "Draft",
  },
});

const News = mongoose.model("News", newsSchema);

app.post("/api/news/create", async (req, res) => {
  try {

    const news = new News(req.body);

    await news.save();

    res.json({
      message: "News Created Successfully",
    });

  } catch (err) {

    res.json(err);

  }
});

app.get("/api/news/all", async (req, res) => {
  try {

    const news = await News.find();

    res.json(news);

  } catch (err) {

    res.json(err);

  }
});


app.delete("/api/news/delete/:id", async (req, res) => {

  try {

    await News.findByIdAndDelete(req.params.id);

    res.json({
      message: "News Deleted Successfully",
    });

  } catch (err) {

    res.json(err);

  }
});


app.put("/api/news/update/:id", async (req, res) => {

  try {

    await News.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.json({
      message: "News Updated Successfully",
    });

  } catch (err) {

    res.json(err);

  }
});


app.listen(port, () =>
  console.log("Server is running Successfully in port num 5000")
);




// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());

// const mongo_URI = "mongodb://krishnendulal113_db_user:TIXmEc0igNVVQnyG@ac-bxrk2zo-shard-00-00.4zievqa.mongodb.net:27017,ac-bxrk2zo-shard-00-01.4zievqa.mongodb.net:27017,ac-bxrk2zo-shard-00-02.4zievqa.mongodb.net:27017/?ssl=true&replicaSet=atlas-imcad6-shard-0&authSource=admin&appName=Cluster0"

// mongoose.connect(mongo_URI).then(()=>console.log("mongoDB Connected (success)")
// ).catch((err)=>console.log(err)
// )


// const itemSchema = new mongoose.Schema({
//   name:{type:String,required:true}
// })

// const Item = mongoose.model('Item',itemSchema)


// app.post('/add-item',async(req,res)=>{
//   try{
//     const newItem = new Item({name:req.body.name})
//     await newItem.save();
//     res.json({message:'Item saved successfully'})
//   }catch(err){
//     res.json({err})
//   }
// })

// app.get('/items',async(req,res)=>{
//   try{
//     const items = await Item.find();
//     res.json(items)
//   }catch(err){
//     res.json(err)
//   }
// })


// app.listen(port,()=>console.log("Server is running Successfully in port num 5000")
// )


