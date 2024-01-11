import "./styles/sellBooksStyles.css";

function SellBooks() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form SUbmitted");
  };
  return (
    <section id="sellbooks-section">
      <div className="sellbooks-container">
        <h2>Sell Your Book</h2>

        <form className="sellBooks-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            required
          />

          <input
            type="text"
            id="author"
            name="author"
            placeholder="Author"
            required
          />

          <input
            type="number"
            min="1950"
            max="2050"
            id="edition"
            name="edition"
            placeholder="Edition(yyyy)"
          />

          <input type="email" id="contact" name="contact" placeholder="Contact info" />

          <div className="condition-container">
            <label for="condition">Condition:</label>
            <select id="condition" name="condition" required>
              <option value="like-new">Like New</option>
              <option value="very-good">Very Good</option>
              <option value="good">Good</option>
              <option value="acceptable">Acceptable</option>
            </select>
          </div>

          <button type="submit">Submit Listing</button>
        </form>
      </div>
    </section>
  );
}

export default SellBooks;
