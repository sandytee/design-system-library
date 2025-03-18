import { useEffect, useState } from "react";
import "./_accordion.scss";
import { Size } from "../../utils";
export type AccordionProps = {
  children: React.ReactNode;
  onClick?: () => void;
  size?: Size;
  headerText: string;
  open?: boolean;
  id: string;
};

export const Accordion: React.FC<AccordionProps> = ({
  children,
  onClick,
  size = "medium",
  headerText,
  open = true,
  id,
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
      aria-labelledby={`Accordion ${headerText} is ${
        isOpened ? "open" : "closed"
      }`}
    >
      <button
        onClick={handleOnClick}
        role="Accordion header and toggle button"
        id={`accordion-header-${id}`}
        aria-controls={`accordion-panel-${id}`}
        tabIndex={0}
        aria-expanded={isOpened}
      >
        <p>{headerText}</p>
      </button>
      <section
        hidden={!isOpened}
        role="region"
        aria-labelledby={`accordion-header-${id}`}
        id={`accordion-panel-${id}`}
      >
        {children}
      </section>
    </div>
  );
};
