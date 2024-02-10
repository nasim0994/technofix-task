import { CiSearch } from "react-icons/ci";

export default function Filter({ setSearchText }) {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col sm:flex-row gap-2 justify-between items-center">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              name=""
              className="pr-6"
              placeholder="search by name"
              onChange={(e) => setSearchText(e.target.value)}
            />

            <div className="absolute top-[9px] right-2 text-neutral">
              <CiSearch />
            </div>
          </div>

          {/* sort */}
          <div className="flex items-center gap-2">
            <p className="whitespace-nowrap text-[15px] text-neutral-content">
              Sort by
            </p>
            <select name="">
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="companyName">Company Name</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
