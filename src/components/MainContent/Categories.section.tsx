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
    <div className="relative">
      <div className="grid grid-rows-1 items-center">
        <h2 className="text-3xl font-semibold text-text-2">
          Browse By Category
        </h2>
        <PaginationArrows />
      </div>
      <div className="mt-16 flex justify-between">
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
        <CategoryButton icon={<IoCameraOutline size={32} />} name="Camera" />
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
