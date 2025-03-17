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
      aria-expanded={isOpened}
      aria-labelledby={`Accordion ${headerText} is ${
        isOpened ? "open" : "closed"
      }`}
    >
      <button
        onClick={handleOnClick}
        role="Accordion header and toggle button"
        id={`accordion-header-${headerText}`}
        aria-selected={isOpened}
        tabIndex={0}
      >
        <h2>{headerText}</h2>
      </button>
      <section
        role="region"
        aria-labelledby={`accordion-header-${headerText}`}
        id={`accordion-section-${headerText}`}
      >
        {isOpened ? children : null}
      </section>
    </div>
  );
};
