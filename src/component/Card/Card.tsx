import "./_card.scss";
import "../Flex/_flex.scss";

export type CardProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
};

export const Card = ({ children, size = "medium" }: CardProps) => {
  const setSize = (size: "small" | "medium" | "large") => {
    switch (size) {
      case "small":
        return "card-small";
      case "medium":
        return "card-medium";
      case "large":
        return "card-large";
    }
  };

  return (
    <div className={`card-container flex ${setSize(size)}`}>{children}</div>
  );
};
