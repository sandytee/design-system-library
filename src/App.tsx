import "./App.css";
import { Button } from "./component/Button/Button";
import "./styles/main.scss";
import "./component/Flex/_flex.scss";
import { Card } from "./component/Card/Card";
import { Section } from "./component/Section/Section";
import { Alert } from "./component/Alerts/Alert";
import { Accordion } from "./component/Accordion/Accordion";
import { useState } from "react";
import { ToDoFeature } from "./features/ToDo/ToDo";

const ComponentApp = () => {
  const [accordionToggle, setAccordionToggle] = useState<boolean>(true);

  const handleAccordionToggle = () => {
    setAccordionToggle(!accordionToggle);
  };

  return (
    <div className="flex-col-center">
      <Section className="flex-row-center" title="Buttons">
        <Button onClick={() => console.log("hello")} text="This is a button" />
        <Button
          onClick={() => console.log("hello")}
          text="This is a button"
          variant="secondary"
        />
        <Button
          onClick={() => console.log("hello")}
          text="This is a button"
          variant="disabled"
          disabled={true}
        />
      </Section>
      <Section className="flex-col-center" title="Cards">
        <Card size="small">
          <>
            <p>Hello I'm a small card</p>
          </>
        </Card>
        <Card size="medium">
          <>
            <p>Hello I'm a medium card</p>
          </>
        </Card>
        <Card size="large">
          <>
            <p>Hello I'm a large card</p>
          </>
        </Card>
      </Section>
      <Section className="flex-col-center" title="Alerts">
        <Alert
          status="info"
          label="Info"
          message="This is an info message set right here"
        />
        <Alert
          status="error"
          label="Error"
          message="This is an error message set right here"
        />
        <Alert
          status="success"
          label="Success"
          message="This is an success message set right here"
        />
        <Alert
          status="warning"
          label="Warning"
          message="This is an warning message set right here"
        />
      </Section>
      <Button onClick={handleAccordionToggle} text="Toggle Accordion" />
      <Section className="flex-col-center" title="Accordion">
        <Accordion
          size="small"
          headerText="Accordion Small"
          open={accordionToggle}
          id={"small-id"}
        >
          <p>Hello I'm an SMALL accordion</p>
        </Accordion>
        <Accordion
          size="medium"
          headerText="Accordion Medium"
          open={accordionToggle}
          id={"medium-id"}
        >
          <p>Hello I'm an MEDIUM accordion</p>
        </Accordion>
        <Accordion
          size="large"
          headerText="Accordion Large"
          open={accordionToggle}
          id={"large-id"}
        >
          <p>Hello I'm a LARGE accordion</p>
        </Accordion>
      </Section>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <ToDoFeature />
    </div>
  );
};

export default App;
