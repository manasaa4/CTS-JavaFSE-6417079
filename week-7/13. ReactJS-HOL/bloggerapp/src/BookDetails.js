import React from "react";

function BookItem({ book }) {
  return (
    <div>
      <h3>{book.bname}</h3>
      <h4>{book.price}</h4>
    </div>
  );
}


function BookDetails({ books }) {
  return (
    <div className="section">
      <h1>Book Details</h1>
      {books.map((book) => (
        <div key={book.id}>
          <BookItem book={book} />
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
