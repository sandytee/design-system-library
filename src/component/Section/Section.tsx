import "../Flex/_flex.scss";
import "./_section.scss";

export type SectionProps = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

export const Section = ({ children, title, className }: SectionProps) => (
  <section>
    <div className="flex-col flex-center">
      <div>{title && <h2>{title}</h2>}</div>
      <div className={className}>{children}</div>
    </div>
  </section>
);
