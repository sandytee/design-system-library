import "./_card.scss";
import "../Flex/_flex.scss";
import { Size } from "../../utils";

export type CardProps = {
  children: React.ReactNode;
  size?: Size;
};

export const Card = ({ children, size = "medium" }: CardProps) => {
  const setSize = (size: Size) => {
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
