const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

//create
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save().then(() => res.status(200).json({ list }));
      existingUser.list.push(list);
      await existingUser.save();
    }
  } catch (err) {
    console.log(err);
  }
});

//update
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      const list = await List.findByIdAndUpdate(req.params.id, { title, body });
      list.save().then(() => res.status(200).json({ message: "Task updated" }));
    }
  } catch (err) {
    console.log(err);
  }
});

//delete
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOneAndUpdate(
      { email: email },
      { $pull: { list: req.params.id } }
    );
    if (existingUser) {
      await List.findByIdAndDelete(req.params.id).then(() =>
        res.status(200).json({ message: "Task Deleted" })
      );
    }
  } catch (err) {
    console.log(err);
  }
});

//get task
router.get("/getTasks/:id", async (req, res) => {
  const list = await List.find({ user: req.params.id }).sort({ createdAt: -1});
  if(list.length !== 0){
    res.status(200).json({ list: list });
  }
  else{
    res.status(200).json({ message: "No tasks found" });
  }
});

module.exports = router;
