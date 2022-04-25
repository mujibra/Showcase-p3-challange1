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
    <div>
      <div className="pt-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12">
                    <label
                      for="first-name"
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
                      autocomplete="given-name"
                      className="mt-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-12">
                    <label
                      for="first-name"
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
                      autocomplete="given-name"
                      className="mt-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-12">
                    <label
                      for="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option value="Top Collections">Top Collection</option>
                      <option value="Bottoms Collections">
                        Bottoms Collection
                      </option>
                    </select>
                  </div>
                  <div className="col-span-12">
                    <label
                      for="last-name"
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
                      autocomplete="family-name"
                      className="mt-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-12">
                    <label
                      for="email-address"
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
                      autocomplete="email"
                      className="mt-1 focus:ring-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
