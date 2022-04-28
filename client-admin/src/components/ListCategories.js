import { TrashIcon } from "@heroicons/react/solid";

export default function ListTable({ category }) {
  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="px-6 py-4">{category.id}</td>
        <td className="px-6 py-4">{category.name}</td>
        <td className="px-6 py-4">Now</td>
        <td className="px-6 py-4">Now</td>
        <td className="px-6 py-4">
          <div className="flex flex-col w-2/6">
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
