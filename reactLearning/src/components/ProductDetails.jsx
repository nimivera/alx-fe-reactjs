export default function ProductDetails({ name, price, discountPrice }) {
  return (
    <div>
      <p>{name}</p>

      {/* If discountPrice exists, cross out the original price */}
      {discountPrice ? (
        <p>
          <del>Price: ${price}</del>
        </p>
      ) : (
        <p>Price: ${price}</p>
      )}

      {/* Only show discount price if it exists */}
      {discountPrice && <p>Discount price: ${discountPrice}</p>}

      <button>Add to Cart</button>
    </div>
  );
}
