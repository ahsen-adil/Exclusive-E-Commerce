type Props = {
  children: React.ReactNode;
  name?: string;
};

const Section = ({ children, name }: Props) => {
  return (
    <section className="container mx-auto px-4">
      {name && (
        <div className="mb-6">
          <h1 className="flex h-10 items-center font-semibold text-red before:mr-4 before:inline-block before:h-10 before:w-5 before:rounded-md before:bg-red before:content-['']">
            {name}
          </h1>
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;
