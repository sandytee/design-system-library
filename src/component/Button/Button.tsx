import "./_button.scss";

type ButtonProps = {
  onClick: () => void;
  text: string;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "disabled";
};

export const Button = ({
  onClick,
  text,
  disabled,
  variant = "primary",
}: ButtonProps) => {
  const setVariant = (variant: "primary" | "secondary" | "disabled") => {
    switch (variant) {
      case "primary":
        return "primary-button";
      case "secondary":
        return "secondary-button";
      case "disabled":
        return "disabled-button";
      default:
        return "primary-button";
    }
  };

  return (
    <button
      className={setVariant(variant)}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
