const express = require("express");
const Subscriber = require("../models/subscriber");
const router = express.Router();

const getSubscriber = async (req, res, next) => {
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
    res.subscriber = subscriber;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.status(200).json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const subscriber = new Subscriber({
      userName: req.body.userName,
      userChannel: req.body.userChannel,
    });

    const newSubscriber = await subscriber.save();

    res.status(200).json(newSubscriber);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", getSubscriber, (req, res) => {
  res.json(res.subscriber);
});

router.delete("/:id", getSubscriber, async (req, res) => {
  try {
    await res.subscriber.deleteOne();

    res.json({ message: "Subscriber was deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/:id", getSubscriber, async (req, res) => {
  try {
    if (req.body.userName != null) {
      res.subscriber.userName = req.body.userName;
    }

    if (req.body.userChannel != null) {
      res.subscriber.userChannel = req.body.userChannel;
    }

    const updatedSubscriber = await res.subscriber.save();

    res.json(updatedSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
