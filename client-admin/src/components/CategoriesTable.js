import useFetch from "../hooks/useFetch";
import ListCategories from "./ListCategories";

export default function Table() {
  const {
    data: products,
    isLoading,
    isError,
  } = useFetch("http://localhost:8080/products?_expand=user");

  return (
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
              Created At
            </th>
            <th scope="col" className="px-6 py-3">
              Updated At
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
          products[0].categories.map((category) => (
            <ListCategories
              category={category}
              key={category.id}
            ></ListCategories>
          ))}
      </table>
    </div>
  );
}
