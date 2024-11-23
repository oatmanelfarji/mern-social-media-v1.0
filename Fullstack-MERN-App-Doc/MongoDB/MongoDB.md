# [MongoDB](https://www.mongodb.com/docs/manual/)

    MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License (SSPL). MongoDB is a member of the MACH Alliance.

## Installation

    - Hosted: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
    - Local: [MongoDB Community Edition](https://www.mongodb.com/download-center/community)
        - [MongoDB Compass](https://www.mongodb.com/products/compass)
        - [MongoDB Shell](https://www.mongodb.com/docs/manual/reference/mongodb-shell/)

## Documentation

### 1 - Collections & Documents

    - Database
        In MongoDB, a database contains the collections of documents. One can create multiple databases on the MongoDB server.

    - Collection
        A collection is a logical grouping of documents stored in the database. A collection is similar to a table in a relational database. A collection can contain multiple documents.

    - Document
        A document is a logical grouping of fields. A document can contain multiple fields.

    - Fields
        A field is a logical grouping of values. A field can contain multiple values.

### 2 -Create, Read, Update, Delete (CRUD)

    - Create a database: `db.createDatabase(BookStore)`
    - Create a collection: `db.createCollection(Books)`
    - Create a document: `db.collection.insertOne({
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": ["Classic", "Fiction"],
        "publishedDate": "1925-04-10",
        "price": 9.99,
        "pages": 180
        })
    - insert to collection: `db.BookStore.Books.insertMany(
        [
            {
                "title": "The Great Gatsby",
                "author": "F. Scott Fitzgerald",
                "genre": ["Classic", "Fiction"],
                "publishedDate": "1925-04-10",
                "price": 9.99,
                "pages": 180
            },
            {
                "title": "To Kill a Mockingbird",
                "author": "Harper Lee",
                "genre": ["Classic", "Fiction"],
                "publishedDate": "1960-07-11",
                "price": 12.99,
                "pages": 336
            }
        ])` 
    - Read all documents: `db.collection.find()`
    - Read a single author and specific fields: `db.collection.find({"author": "F. Scott Fitzgerald"}, {"title": 1, "genre": 1})`
    - Read a single document: `db.collection.findOne({"title": "The Great Gatsby"})`
    - Update a document: `db.collection.updateOne({ "title": "The Great Gatsby" }, { $set: { "price": 14.99 } })`
    - Delete a document: `db.collection.deleteOne({"title": "The Great Gatsby"})`

    - count all documents: `db.collection.find().count()`
    - limimt number of documents: `db.collection.find().limit(2)`
    - sort documents: `db.collection.find().sort({"price": 1})` # 1 for ascending, -1 for descending
    - skip documents: `db.collection.find().skip(2)`
    -
### 3 - Nested Documents

    - Nested documents are documents that are stored in a document.
    - create a nested document: `db.collection.insertOne({
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": ["Classic", "Fiction"],
        "publishedDate": "1925-04-10",
        "price": 9.99,
        "pages": 180,
        "reviews": [
            {
                "user": "John Doe",
                "rating": 4,
                "comment": "Great book!"
            },
            {
                "user": "Jane Doe",
                "rating": 5,
                "comment": "I loved it!"
            }
        ]
        })` # reviews is a nested document

### 4 - Operators & Complex Queries

    - Operators
        - $gt: greater than # db.collection.find({ "price": { $gt: 10 } })
        - $gte: greater than or equal to 
        - $lt: less than
        - $lte: less than or equal to
        - $eq: equal to
        - $ne: not equal to
        - $in: in # db.collection.find({ "genre": { $in: ["Classic", "Fiction"] } })
        - $nin: not in
        - $and: and # db.collection.find({ $and: [{ "price": { $gt: 10 } }, { "genre": { $in: ["Classic", "Fiction"] } }] })
        - $or: or # db.collection.find({ $or: [{ "price": { $gt: 10 } }, { "genre": { $in: ["Classic", "Fiction"] } }] })
        - $not: not
        - $exists: exists
        - $regex: regular expression # db.collection.find({ "title": { $regex: /great/i } })
        - $options: options # db.collection.find({ "title": { $regex: /great/i, $options: "i" } })
        - $type: type
        - $mod: modulo
        - $all: all
        - $elemMatch: element match
        - $size: size
        - $slice: slice
        - $sort: sort
        - $text: text
        - $near: near

### 5 - Querying Arrays

    - normal query: `db.collection.find({ "genre": "Classic" })`
    - array query: `db.collection.find({ "genre": { $in: ["Classic", "Fiction"] } })`
    - nested array query: `db.collection.find({ "genre": { $all: ["Classic", "Fiction"] } })`
    - nested array query: `db.collection.find({ "genre": { $elemMatch: { $in: ["Classic", "Fiction"] } } })`
    - nested array query: `db.collection.find({ "genre": { $elemMatch: { $in: ["Classic", "Fiction"] }, $size: 2 } })`

### 6 - MongoDB Drivers: mongodb, mongoose

    - [mongodb](https://www.npmjs.com/package/mongodb)
        const { MongoClient } = require('mongodb');
        let dbconnect;
        const uri = "mongodb+srv://<username>:<password>@cluster0.4x2jx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        module.exports = {
            connectToDb:(cb) => {
                MongoClient.connect(uri)
                    .then((client) => {
                        dbconnect = client.db();
                        return cb();
                    })
                    .catch((error) => {
                        console.log(error)
                        return cb(error);
                    });

            },
            getDb:() => dbconnect
        }
    - [mongoose](https://www.npmjs.com/package/mongoose)

### 7 - Cursors & Fetching Data

    - Fetching Data
    ```
        // Route
        app.get('/books', (req, res) => {
            let books = [];
            db.collection()
              .find() # returns a cursor (a cursor is a pointer to a location in a database and exposes only the methods that can be used to navigate the database like toArray, forEach)
              .Sort({author: 1})
              .forEach((book) => books.push(book))
              .then(() => {
                  res.status(200).json(books);
              })
              .catch((error) => {
                  res.status(500).json({ error: 'could not fetch books' });
              })
        });
    ```
### 8 - Finding Single Documents

     ```
     const {ObjectId} = require('mongodb');

        app.get('/books/:id', (req, res) => {
            if (!ObjectId.isValid(req.params.id)) {
                db.collection()
                .findOne({ _id: new ObjectId(req.params.id) })
                .then(doc => {
                    res.status(200).json(doc);
                })
                .catch((error) => {
                    res.status(500).json({ error: 'could not fetch book' });
                })
            } else {
                res.status(500).json({ error: 'invalid book id' });
            }
        });
    ```