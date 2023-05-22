// MongoDB commands

// mongosh open the mongo shell

// uses hcode create database

// insert one document
db.clients.insertOne({ name: "Joe Doe", site: "www.hcode.com.br" });

// find all documents
db.clients.find();

// ctrl + l to clear the screen

// show collections

db.products.insertOne({
  _id: 1,
  name: "Macbook Pro",
  price: 10000,
  description: "Notebook Apple",
});

db.products.find();

db.products.insertMany([
  {
    _id: 1,
    name: "Macbook Pro",
    price: 10000,
    description: "Notebook Apple",
  },
  {
    _id: 2,
    name: "Mavic Pro 2",
    price: 2000,
    description: "Drone DJI",
  },
  {
    _id: 3,
    name: "Iphone 11",
    price: 5000,
    description: "Smartphone Apple",
  },
  {
    _id: 4,
    name: "Monitor LG",
    price: 1000,
  },
]);

db.products.find();

db.products.find({ _id: 3 });

db.products.find({ price: 5000 });

db.products.find({ price: { $lt: 5000 } });

db.products.find({ price: { $gt: 5000 } });

db.products.find({ $or: [{ price: { $lt: 5000 } }, { id: { $gt: 2 } }] });

db.products.find({ price: { $gt: 1000 }, price: { $lt: 5000 } });

db.products.updateOne({ _id: 1 }, [
  {
    $set: {
      name: "Macbook Mini",
      price: 7777,
      lastModified: "$$NOW",
    },
  },
]);

db.products.find();

db.products.updateMany({ price: { $lt: 5001 } }, [
  {
    $set: {
      price: 999,
      lastModified: "$$NOW",
    },
  },
]);

db.products.find();

db.products.replaceOne(
  { _id: 1 },
  {
    name: "Macbook Pro Free",
  }
);

db.products.find();

db.products.deleteOne({ _id: 1 });

db.products.find();

db.products.deleteMany({ _id: { $gt: 3 } });

db.products.find();

db.products.deleteMany({});

db.products.find();
