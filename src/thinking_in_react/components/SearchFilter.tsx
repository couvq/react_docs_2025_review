const SearchFilter = ({
  searchText,
  setSearchText,
  isInStockOnly,
  setIsInstockOnly,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "200px",
      }}
    >
      <input
        type="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          gap: "2px",
        }}
      >
        <input
          type="checkbox"
          id="in_stock_checkbox"
          value={isInStockOnly}
          onChange={(e) => setIsInstockOnly(e.target.checked)}
        />
        <label htmlFor="in_stock_checkbox">Only show products in stock</label>
      </div>
    </div>
  );
};

export default SearchFilter;
