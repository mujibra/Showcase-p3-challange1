import useFetch from "../hooks/useFetch";
import ListTable from "./ListTable";
import { Link } from "react-router-dom";

export default function Table() {
  const {
    data: products,
    isLoading,
    isError,
  } = useFetch("http://localhost:8080/products?_expand=user");

  return (
    <>
      <div className="flex justify-between px-10">
        <p className="font-medium text-xl">Product List</p>
        <Link
          to="addProduct"
          type="button"
          className="ml-5 bg-cyan-800 py-2 px-3 rounded-md text-sm leading-4 font-medium text-white hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add New Item
        </Link>
      </div>
      <div className="p-4 flex justify-center pt-6 relative overflow-x-auto  sm:rounded-lg">
        <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Created By
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
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {isLoading && (
            <tbody>
              <tr>
                <td>Loading...</td>
              </tr>
            </tbody>
          )}
          {isError && (
            <tbody>
              <tr>
                <td>Error...</td>
              </tr>
            </tbody>
          )}
          {!isLoading &&
            !isError &&
            products.map((product) => (
              <ListTable product={product} key={product.id}></ListTable>
            ))}
        </table>
      </div>
    </>
  );
}
