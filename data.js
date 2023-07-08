import mongoose, { Schema } from "mongoose";

mongoose.connect(
  "mongodb+srv://dimanice:dimanice@dimanice.qqa3tdt.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);


let practiceSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  description: { type: String },
  type: { type: String },
  level: { type: Number },
  themes: { type: Array },
  tasks: [
    {
      title: { type: String },
      description: { type: String },
      check: { type: Array },
    },
  ],
  data: {
    html: { type: String },

    css: { type: String },
    js: { type: String },
  },
});

let Practice = mongoose.model("practice", practiceSchema);



let practiceTasks = await Practice.find({});
console.log(practiceTasks)

export default practiceTasks;
