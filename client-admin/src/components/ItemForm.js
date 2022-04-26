import { useState } from "react";

export default function ItemForm() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("Relax");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [mainImg, setMainImg] = useState("");
  const [category, setCategory] = useState("");
  const [userId, setUserId] = useState("1");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name,
      slug,
      description,
      price,
      mainImg,
      category,
      userId,
    };

    setIsPending(true);

    fetch("http://localhost:8080/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).then(() => {
      console.log("New product add");
      setIsPending(false);
    });
  };
  return (
    <div className="flex justify-center ">
      <div className="pt-6 w-2/5 ">
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="p-2.5 mb-6 mt-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="p-2.5 mb-6 mt-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="country"
              name="country"
              autoComplete="country-name"
              className="p-2.5 mb-6 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option value="Top Collections">Top Collection</option>
              <option value="Bottoms Collections">Bottoms Collection</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="p-2.5 mb-6 mt-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              value={mainImg}
              onChange={(e) => setMainImg(e.target.value)}
              type="text"
              name="email-address"
              id="email-address"
              autoComplete="email"
              className="p-2.5 mb-6 mt-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="flex justify-center px-4 py-3 text-right sm:px-6">
            {!isPending && (
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add
              </button>
            )}
            {isPending && (
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled
              >
                Adding..
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
