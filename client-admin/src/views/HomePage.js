import Navbar from "../components/Navbar";
import Table from "../components/Table";
import ItemForm from "../components/ItemForm";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setproduct] = useState([]);
  const [pageLoad, setPageLoad] = useState(false);
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

  const pageLoadHandler = () => {
    setPageLoad(true);
  };
  return (
    <div className="flex flex-row">
      <div className="basis-2/12">
        <Navbar></Navbar>
      </div>
      <div className="basis-10/12 bg-sky-100 h-screen pt-6">
        <div>
          <button
            onClick={pageLoadHandler}
            type="button"
            className="ml-5 bg-cyan-800 py-2 px-3 rounded-md text-sm leading-4 font-medium text-white hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add New Item
          </button>
        </div>
        {!pageLoad && (
          <div className="p-4 flex justify-center pt-6 relative overflow-x-auto  sm:rounded-lg">
            <table className=" table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Main Image
                  </th>
                </tr>
              </thead>
              {products.map((product) => (
                <Table product={product} key={product.id}></Table>
              ))}
            </table>
          </div>
        )}
        {pageLoad && (
          <div className="">
            <ItemForm></ItemForm>
          </div>
        )}
      </div>
    </div>
  );
}
