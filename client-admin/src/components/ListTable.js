import { PencilIcon, TrashIcon } from "@heroicons/react/solid";

export default function ListTable({ product }) {
  return (
    <tbody>
      <tr className="text-lg bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="px-6 py-4">{product.id}</td>
        <td className="px-6 py-4">{product.name}</td>
        <td className="px-6 py-4">{product.user.email}</td>
        <td className="px-6 py-4">{product.categories[0].name}</td>
        <td className="px-6 py-4">{product.price}</td>
        <td className="px-6 py-4">
          <img className="h-20" src={product.mainImg} alt="productImg"></img>
        </td>
        <td className="px-6 py-4">
          <div className="flex flex-col w-4/5">
            <button
              type="button"
              className="mb-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PencilIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              Edit
            </button>

            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <TrashIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Delete
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
