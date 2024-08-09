import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  name?: string;
  icon?: React.ReactNode;
  href?: string;
};

const CategoryButton = (props: Props) => {
  return (
    <Link
      href={props.href || "#"}
      className="hover:bg-red flex h-36 w-44 flex-col items-center justify-center space-y-4 rounded-md border border-black border-opacity-30 px-14 py-6 transition-colors duration-300 hover:border-none hover:text-text"
    >
      <div className="">{props.icon}</div>
      <p className="text-center">{props.name}</p>
    </Link>
  );
};

export default CategoryButton;
