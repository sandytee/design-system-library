import "./App.css";
import { Button } from "./component/Button/Button";
import "./styles/main.scss";
import "./component/Flex/_flex.scss";
import { Card } from "./component/Card/Card";
import { Section } from "./component/Section/Section";
import { Alert } from "./component/Alerts/Alert";

function App() {
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
    </div>
  );
}

export default App;
