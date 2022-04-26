export default function Table({ product }) {
  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="px-6 py-4">{product.id}</td>
        <td className="px-6 py-4">{product.name}</td>
        <td className="px-6 py-4">{product.description}</td>
        <td className="px-6 py-4">{product.category}</td>
        <td className="px-6 py-4">{product.price}</td>
        <td className="px-6 py-4">
          <img className="h-20" src={product.mainImg} alt="productImg"></img>
        </td>
      </tr>
    </tbody>
  );
}
