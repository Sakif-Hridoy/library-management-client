const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const mongoUri = 'mongodb://localhost:27017';
const dbName = 'library';

app.post('/api/borrow/:bookId', async (req, res) => {
  const { bookId } = req.params;
  const { returnDate } = req.body;

  try {
    const client = await MongoClient.connect(mongoUri, { useUnifiedTopology: true });
    const db = client.db(dbName);

    const booksCollection = db.collection('books');
    const book = await booksCollection.findOne({ _id: ObjectId(bookId) });

    if (!book) {
      client.close();
      return res.status(404).json({ error: 'Book not found' });
    }

    if (book.quantity === 0) {
      client.close();
      return res.status(400).json({ error: 'No available copies to borrow' });
    }

    // Update book quantity
    await booksCollection.updateOne(
      { _id: ObjectId(bookId) },
      { $set: { quantity: book.quantity - 1 } }
    );

    // Add book to Borrowed Books collection (not implemented here)

    client.close();
    res.status(200).json({ message: 'Book borrowed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
