import type { Product } from "./SearchableProductList";

interface ProductRowProps {
  product: Product;
}

const ProductRow = ({ product }: ProductRowProps) => {
  return (
    <tr>
      <td style={{
          color: !product.isStocked ? 'red': ''
      }}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
