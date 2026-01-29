function SearchBar({ city, setCity, onSearch }) {
  function handleChange(e) {
    setCity(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onSearch();
  }
  return (
    <>
      <form className="w-full" onSubmit={handleSubmit}>
        {/*Wrapping the input inside a form and handling onSubmit allows Enter
        key support automatically and improves accessibility.*/}
        <div className="w-full h-full grid grid-cols-5  gap-2 items-center">
          <input
            className=" col-span-4 h-15  rounded-2xl border-none outline-none text-center bg-linear-to-br from-[#00f2fe] to-[#4facfe]"
            type="text"
            placeholder="city..."
            value={city} //by this react controls what is reflected in the ui as value=react state without value they will may go out of sync
            onChange={handleChange}
          />
          <button
            type="submit"
            className="col-span-1 h-15 rounded-2xl bg-linear-to-br from-[#00f2fe] to-[#4facfe] "
          >
            SEARCH
          </button>
        </div>
      </form>
    </>
  );
}
export default SearchBar;
