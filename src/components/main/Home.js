import React from "react";
import Banner from "../banners/Banner";
import Promo from "../banners/Promo";
import FeaturedProducts from "../product/FeaturedProducts";

export default function HomePage() {
  return (
    <>
      <Banner />
      <div>
        <Promo />
        <FeaturedProducts />
      </div>
    </>
  );
}
