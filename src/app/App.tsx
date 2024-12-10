import { Box } from "@interstate/components/Box";
import { useState } from "react";
import { Typography } from "@interstate/components/Typography";
import { View } from "./View.tsx";
import { Button } from "@interstate/components/Button";

/**
 * Main application component
 * @constructor
 */
const App = () => {
  const [view, setView] = useState<string | undefined>("desktop");
  const [date, setDate] = useState<string | undefined>(
    new Date().toLocaleDateString("en-US"),
  );
  const [show, setShow] = useState<boolean>(false);
  return (
    <Box padding={"16px"}>
      <Box
        display={"flex"}
        justifyContent={"left"}
        gap={"16px"}
        paddingBottom={"16px"}
      >
        <Button onClick={() => setView("desktop")}>Desktop</Button>
        <Button onClick={() => setView("mui")}>Responsive</Button>
        <Button
          onClick={() => {
            setView("slideout");
            setShow(true);
          }}
        >
          SlideOut
        </Button>
      </Box>
      <Typography variant={"label-md"} color={"sem.color.on-surface.muted"}>
        Selected Date
      </Typography>
      <Typography variant={"body-md"}>{date}</Typography>
      <View view={view} setDate={setDate} setShow={setShow} show={show} />
    </Box>
  );
};
export default App;

/*
      <RadioButtonList
        spacing={"sm"}
        value={view}
        onChange={(value) => {
          setView(value.target.value);
          setShow(value.target.value === "slideout");
        }}
        label="Choose a view"
        options={[
          { label: "Standard Desktop", value: "desktop" },
          { label: "Mui Responsive View", value: "mui" },
          { label: "SlideOut View", value: "slideout" },
        ]}
      />

 */
