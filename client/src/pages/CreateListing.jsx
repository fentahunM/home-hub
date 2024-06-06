function CreateListing() {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mt-7">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            id="name"
            className="border rounded-lg p-3"
            maxLength="62"
            minLength="10"
            required
          />
          <textarea
            type="text"
            placeholder="Description"
            id="description"
            className="border rounded-lg p-3"
            required
          />
          <input
            type="text"
            placeholder="Address"
            id="address"
            className="border rounded-lg p-3"
            required
          />

          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="sale" />
              <span>sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="rent" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="parking" />
              <span>Parking spot</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="furnished" />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="offer" />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="border border-gray-300 p-3 rounded-lg"
                min="1"
                max="10"
                id="bedrooms"
                required
              />
              <p>Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="border border-gray-300 p-3 rounded-lg"
                min="1"
                max="10"
                id="bathrooms"
                required
              />
              <p>Baths</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="border border-gray-300 p-3 rounded-lg"
                min="1"
                max="10"
                id="regularPrice"
                required
              />
              <div>
                <p>Regular price</p>
                <span className="text-xs">($ / Month)</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="border border-gray-300 p-3 rounded-lg"
                min="1"
                max="10"
                id="discountPrice"
                required
              />
              <div className="flex flex-col items-center">
                <p>Discounted price</p>
                <span className="text-xs">($ / Month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4 ">
          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-600 ml-2">
              The first images will be the cover (max 6)
            </span>
          </p>

          <div className="flex gap-4">
            <input
              className="p-3 border border-gray-300 rounded w-full "
              id="images"
              multiple
              type="file"
              accept="images/*"
            />
            <button className="border p-3 text-green-700 border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80">
              Uplaod
            </button>
          </div>
          <button className="bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80 ">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
}

export default CreateListing;
