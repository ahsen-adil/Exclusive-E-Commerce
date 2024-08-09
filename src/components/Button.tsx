type ButtonProps = {
  variant: "primary" | "secondary";
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  return (
    <button
      className={`${
        variant === "primary"
          ? "bg-primary hover:bg-hover-button-1"
          : "bg-red hover:bg-hover-button"
      } rounded px-12 py-4 font-medium text-white transition-colors duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
