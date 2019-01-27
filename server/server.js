var mongoose = require("mongoose");

const dbName = "media";
const url = `mongodb://localhost:27017/${dbName}`;

mongoose.Promise = global.Promise;
mongoose.connect(
  url,
  { useNewUrlParser: true }
);

let Todo = mongoose.model("users", {
  user: {
    type: String,
    trim: true,
    minLength: 2,
    required: true
  },
  email: {
    type: String,
    trim: true,
    default: "avinash2050kumar@gmail.com"
  }
});



var newTodo = new Todo({
  user: "avinash2050kumar",
  completedAt: Date.now()
});

newTodo.save().then(
  doc => {
    console.log("data is", doc);
  },
  e => {
    console.log("Unable to save to do");
  }
);
