import { useEffect, useState } from "react";
import "./_accordion.scss";
import { Size } from "../../utils";
export type AccordionProps = {
  children: React.ReactNode;
  onClick?: () => void;
  size?: Size;
  headerText: string;
  open?: boolean;
};

export const Accordion: React.FC<AccordionProps> = ({
  children,
  onClick,
  size = "medium",
  headerText,
  open = true,
}) => {
  const [isOpened, setToggle] = useState<boolean>(open);

  const handleOnClick = () => {
    setToggle(!isOpened);
    if (onClick) {
      onClick();
    }
  };

  const setSize = (size: Size) => {
    switch (size) {
      case "small":
        return "accordion-small";
      case "medium":
        return "accordion-medium";
      case "large":
        return "accordion-large";
    }
  };

  useEffect(() => {
    setToggle(open);
  }, [open]);

  return (
    <div
      className={`accordion-container ${setSize(size)}`}
      onClick={handleOnClick}
    >
      <div>
        <h2>{headerText}</h2>
      </div>
      <div>{isOpened ? children : <></>}</div>
    </div>
  );
};
