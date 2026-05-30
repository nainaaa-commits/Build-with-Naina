type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`bg-brand-coral text-brand-white px-4 py-2 rounded-lg flex gap-2 items-center ${props.className}`}
    >
      {props.children} {props.icon}
    </button>
  );
};

export default Button;
