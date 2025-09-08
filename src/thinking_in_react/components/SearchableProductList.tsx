import { useState } from "react";
import FilteredProducts from "./FilteredProducts";
import SearchFilter from "./SearchFilter";

export interface Product {
  category: string;
  price: string;
  isStocked: boolean;
  name: string;
}

const productList: Product[] = [
  { category: "Fruits", price: "$1", isStocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", isStocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", isStocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", isStocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", isStocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", isStocked: true, name: "Peas" },
];

const SearchableProductList = () => {
  const [searchText, setSearchText] = useState("");
  const [isInStockOnly, setIsInstockOnly] = useState(false);

  return (
    <>
      <SearchFilter
        searchText={searchText}
        setSearchText={setSearchText}
        isInStockOnly={isInStockOnly}
        setIsInstockOnly={setIsInstockOnly}
      />
      <FilteredProducts
        products={productList}
        searchText={searchText}
        isInStockOnly={isInStockOnly}
      />
    </>
  );
};

export default SearchableProductList;
