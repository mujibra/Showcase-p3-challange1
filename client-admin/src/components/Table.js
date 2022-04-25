export default function Table({ product }) {
  return (
    <tbody>
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td>
          <img className="h-20" src={product.mainImg}></img>
        </td>
      </tr>
    </tbody>
  );
}
