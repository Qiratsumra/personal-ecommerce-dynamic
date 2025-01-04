import Image from "next/image";
import ProductList from "./products/page";
import Hero from "./components/Hero";

export default function Home() {

  return (
  <>
  <Hero/>
  <ProductList/>
  </>
  );
}
