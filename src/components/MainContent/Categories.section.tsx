import CategoryButton from "../CategoryButton";
import {
  IoPhonePortraitOutline,
  IoCameraOutline,
  IoDesktopOutline,
  IoWatchOutline,
  IoHeadsetOutline,
  IoGameControllerOutline,
} from "react-icons/io5";
import PaginationArrows from "../PaginationArrows";

const Categories = () => {
  return (
    <div className="relative w-full px-4">
      {/* Title and Pagination */}
      <div className="flex items-center justify-between max-w-screen-xl mx-auto mb-10">
        <h2 className="text-3xl font-semibold text-text-2">Browse By Category</h2>
        <PaginationArrows/>
      </div>

      {/* Category Buttons */}
      <div className="grid grid-cols-2 gap-6 max-w-screen-xl mx-auto sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        <CategoryButton
          icon={<IoPhonePortraitOutline size={32} />}
          name="Phones"
        />
        <CategoryButton
          icon={<IoDesktopOutline size={32} />}
          name="Computers"
        />
        <CategoryButton
          icon={<IoWatchOutline size={32} />}
          name="Smart Watch"
        />
        <CategoryButton
          icon={<IoCameraOutline size={32} />}
          name="Camera"
        />
        <CategoryButton
          icon={<IoHeadsetOutline size={32} />}
          name="Headphones"
        />
        <CategoryButton
          icon={<IoGameControllerOutline size={32} />}
          name="Gaming"
        />
      </div>
    </div>
  );
};

export default Categories;
