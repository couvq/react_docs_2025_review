import ProductRow from "./ProductRow";
import type { Product } from "./SearchableProductList";

interface FilteredProductsProps {
  products: Product[];
  searchText: string;
  isInStockOnly: boolean;
}

const FilteredProducts = ({
  products,
  searchText,
  isInStockOnly,
}: FilteredProductsProps) => {
  const matchingProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (isInStockOnly ? product.isStocked : true)
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {matchingProducts.map((product) => (
          <ProductRow product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default FilteredProducts;
