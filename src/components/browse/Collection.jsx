import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firestore.js";

const Collection = ({ data }) => {
  const addToPicks = async (item) => {
    try {
      // Add the selected item to "col_picks" collection
      // Replace 'col_picks' with your actual collection name
      const picksCollection = collection(db, "col_picks");

      // Here, 'item' refers to the data you want to add to "col_picks"
      // You can customize this according to your data structure
      await addDoc(picksCollection, item);
      console.log("Item added to picks successfully!");
    } catch (error) {
      console.error("Error adding item to picks:", error);
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-gray-900">Collection</h2>
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {data.map((item) => (
              <div key={item.id}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={item.imageSrc}
                      alt={item.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {item.name}
                    </h3>
                    {/*<p className="mt-1 text-sm text-gray-500">{item.category}</p>*/}
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                      {item.price}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    // href={item.href}
                    onClick={() => addToPicks(item)}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Add to Picks
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
