import React, { useState } from "react";

const data = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/81Sw0DpbowL._UX369_.jpg",
    title: "Family Romance: John Singer Sargent and the Wertheimers",
    price: "$28.80"
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/71yPHgMXDnL._UX246_.jpg",
    title:
      "2025 Vision Board Clip Art Book: Pictures, Quotes, Affirmations and Words For All Life Aspects Such as Health, Money and More. With Reflection Questions. For all Women and Men.",
    price: "$7.99"
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/71sTIp-AYDL._UX369_.jpg",
    title:
      "Unwind In COZY GIRL MOMENTS:: A Coloring Book with Mindfulness & Gratitude Prompts",
    price: "$6.99"
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/71P6mfDXJVL._UX246_.jpg",
    title:
      "Cozy Hunnies: Coloring Book for Adults and Teens Featuring Cute and Bold Designs of Fuzzy Animals Characters and Hygge Moments for Relaxation",
    price: "$7.99"
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/81FslNXL0UL._UX369_.jpg",
    title: "Easy Watercolor Flowers: 45 Beautiful Paintings for Beginners",
    price: "$20.69"
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/81Sw0DpbowL._UX369_.jpg",
    title: "Hardcover",
    price: "$28.80"
  }
];

const Books = () => {
  const [books, setBooks] = useState(data);
  const [editBook, setEditBook] = useState(null); // Track which book is being edited
  const [formData, setFormData] = useState({ title: "", price: "", img: "" });

  const handleEdit = (book) => {
    setEditBook(book.id); // Set the book being edited
    setFormData({ title: book.title, price: book.price, img: book.img });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === editBook ? { ...book, ...formData } : book
      )
    );
    setEditBook(null); // Reset the edit state
  };

  return (
    <div>
      <h1>Books List</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px"
        }}
      >
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px"
            }}
          >
            <img
              src={book.img}
              alt={book.title}
              style={{ width: "100%", height: "auto" }}
            />
            {editBook === book.id ? (
              <div>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="img"
                  value={formData.img}
                  onChange={handleInputChange}
                />
                <button onClick={handleSave}>Save</button>
              </div>
            ) : (
              <>
                <h3>{book.title}</h3>
                <p>{book.price}</p>
                <button onClick={() => handleEdit(book)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
