import Navbar from "../components/Navbar";
import Table from "../components/Table";
import ItemForm from "../components/ItemForm";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setproduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.message);
        }
        return response.json();
      })
      .then((data) => setproduct(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex flex-row">
      <div className="flex flex-col items-center gap-4 pt-6 basis-1/5 w-full">
        <Navbar></Navbar>
      </div>
      <div className="basis-4/5 bg-sky-100 h-screen pt-6">
        <div>
          <button
            type="button"
            className="ml-5 bg-cyan-800 py-2 px-3 rounded-md text-sm leading-4 font-medium text-white hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add New Item
          </button>
        </div>
        <div className="flex justify-center pt-6">
          <table className="table-auto">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Main Image</th>
              </tr>
            </thead>
            {products.map((product) => (
              <Table product={product} key={product.id}></Table>
            ))}
          </table>
        </div>
        <div className="mt-10 sm:mt-0 flex justify-center">
          <ItemForm></ItemForm>
        </div>
      </div>
    </div>
  );
}
