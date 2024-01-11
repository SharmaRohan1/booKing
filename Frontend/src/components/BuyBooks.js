import "./styles/buyBooksStyles.css";
import SearchResults from "./SearchResults";

function BuyBooks() {
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("Buy Form Submitted");
  };

  return (
    <section id="buybooks-section">
      <div className="buybooks-container">
        <h2>Looking for Books?</h2>

        <form className="buybooks-form" onSubmit={onFormSubmit}>
          <div className="buybooks-form-input-section">
            <input type="text" placeholder="Book name" required />
            <input type="text" placeholder="Author name" />
          </div>

          <button type="submit">Search</button>
        </form>

        <div className="search-results"></div>
      </div>

      <SearchResults />
    </section>

  );
}

export default BuyBooks;
