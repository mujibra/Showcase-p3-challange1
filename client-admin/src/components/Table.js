export default function Table({ product }) {
  return (
    <tbody>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="px-6 py-4">{product.id}</td>
        <td class="px-6 py-4">{product.name}</td>
        <td class="px-6 py-4">{product.description}</td>
        <td class="px-6 py-4">{product.category}</td>
        <td class="px-6 py-4">{product.price}</td>
        <td class="px-6 py-4">
          <img className="h-20" src={product.mainImg}></img>
        </td>
      </tr>
    </tbody>
  );
}
