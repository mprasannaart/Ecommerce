// pages/CollectionPage.jsx
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CollectionHeader from "../components/collection/CollectionHeader";
import ProductCard from "../components/collection/ProductCard";
import { products } from "../products/data";

const Collection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Collection Header */}
      <CollectionHeader />
      {/* Products Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Collection;
