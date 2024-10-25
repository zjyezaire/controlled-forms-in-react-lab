import { useState } from 'react';

const Bookshelf = () => {
  // Step 2: Define initial state
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '' });

  // Step 3: Create event handlers
  // 1. Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  // 2. Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Add new book to the books array
    setBooks([...books, newBook]);
    // Reset newBook state to clear the form
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      {/* Form creation */}
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              placeholder="Enter book title"
            />
          </div>
          <div>
            <label>Author:</label>
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              placeholder="Enter author name"
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>

      {/* Step 5: Map through books */}
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
