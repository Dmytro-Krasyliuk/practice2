import mongoose, { Schema } from "mongoose";

mongoose.connect(
  "mongodb+srv://dimanice:dimanice@dimanice.qqa3tdt.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);


const schema = new Schema({
  firstName: { type: String },
  lastName: { type: String },

  name: { type: String },
  lastName: { type: String },
  days: { type: Array },
  pay: {
    day: { type: String },
    month: { type: String },
    year: { type: String },
    sum: { type: String },
    isPay: { type: Boolean },
  },
  events: { type: Array },
  quiz: {
    allMoney: { type: Number },
    currentMoney: { type: Number },
    lastResultMoney: { type: Number },
  },
  contact: { type: Array },

  idGroup: { type: String },
});

let User = mongoose.model("User", schema);

let students = User.find({});




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

export {practiceTasks, Practice, User, students};
