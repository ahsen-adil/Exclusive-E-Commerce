"use client";

import { useState, useEffect } from "react";
import Button from "../Button";
import ProductCard from "../ProductCard";
import { db } from "@/firebase/app";
import { collection, DocumentData, getDocs } from "firebase/firestore";

const ThisMonth = () => {
  // const [products, setProducts] = useState<DocumentData[]>([]);

  // getDocs(collection(db, "products")).then((snap) => {
  //   snap.docs.forEach((doc) => {
  //     setProducts((prev) => [...prev, doc.data()]);
  //   });
  // });

  return (
    <div className="">
      <div className="mb-16 flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-text-2">
          Best Selling Products
        </h2>
        <Button variant="secondary">View All</Button>
      </div>
      <div className="">{/* <ProductCard /> */}</div>
    </div>
  );
};

export default ThisMonth;
