import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const PaginationArrows = () => {
  return (
    <div className="absolute right-0 flex gap-2">
      <button className="rounded-full bg-secondary p-3 text-black">
        <FiArrowLeft size={24} />
      </button>
      <button className="rounded-full bg-secondary p-3 text-black">
        <FiArrowRight size={24} />
      </button>
    </div>
  );
};

export default PaginationArrows;
