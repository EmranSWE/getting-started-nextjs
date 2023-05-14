import Link from "next/link";
import React from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const restCountry = () => {
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <div>
      <h1 className="text-4xl font-bold text-green-300 text-center">
        Shopping
      </h1>
      <section className="grid grid-cols-4 gap-4 ">
        {data.map((product) => (
          <div className="border-4 border-indigo-600 rounded-lg ">
            <div className="flex items-center justify-center">
              <img src={product.image} width={200} height={100} alt="" />
            </div>
            <h1 className="text-2xl">{product.title}</h1>
            <h1>{product.category}</h1>
            <h1 className="text-3xl font-bold">${product.price}</h1>
          </div>
        ))}
      </section>
      <Link href="/">Go to Home</Link>
    </div>
  );
};

export default restCountry;
