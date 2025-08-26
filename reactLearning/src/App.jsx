import ProductDetails from "./components/ProductDetails";

export default function App() {
  return (
    <div className="productMain">
      <ProductDetails name="Cotton socks" price={10.90} discountPrice={5.45} />
      <ProductDetails name="Tennis balls" price={6.00} />
      <ProductDetails name="Plain T-shirt" price={7.99} />
    </div>
  );
}
