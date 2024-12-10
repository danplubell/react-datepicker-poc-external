import { Box } from "@interstate/components/Box";
import {
  DatePicker,
  DatePickerEventValue,
} from "@interstate/components/DatePicker";
import { InterstateOnChangeEvent } from "@interstate/components/InterstateEvents";
import { SlideOut } from "@interstate/components/SlideOut";
import { useState } from "react";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export interface ViewProps {
  view: string | undefined;
  setDate: (date: string | undefined) => void;
  show: boolean;
  setShow: (show: boolean) => void;
}

export const View = (props: ViewProps) => {
  const { view, setDate, show, setShow } = props;
  const [_currDate, setCurrDate] = useState<string | undefined>();
  let currView;
  const handleDate = () => {
    setDate(_currDate);
    setShow(false);
  };
  switch (view) {
    case "desktop":
      {
        currView = (
          <DatePicker
            datePickerVariant={"desktop"}
            onChange={(
              event: InterstateOnChangeEvent<DatePickerEventValue>,
            ) => {
              setDate(event.target.value.dateValue);
            }}
          />
        );
      }
      break;
    case "mui":
      {
        currView = (
          <DatePicker
            datePickerVariant={"responsive"}
            onChange={(
              event: InterstateOnChangeEvent<DatePickerEventValue>,
            ) => {
              setDate(event.target.value.dateValue);
            }}
          />
        );
      }
      break;
    case "slideout":
      {
        currView = (
          <SlideOut
            header={"SlideOut DatePicker Example"}
            position={"right"}
            show={show}
            panelWidth={"400px"}
            onHide={() => {
              setShow(false);
            }}
            footer={{
              layout: "rightAligned",
              options: [
                {
                  action: () => {
                    setShow(false);
                  },
                  label: "Cancel",
                },
              ],
              primary: {
                action: () => handleDate(),
                label: "Ok",
              },
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                onChange={(value) =>
                  setCurrDate(
                    value.$d.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    }),
                  )
                }
              />
            </LocalizationProvider>
          </SlideOut>
        );
      }
      break;
    default: {
      currView = null;
    }
  }
  return <Box paddingTop={"16px"}>{currView}</Box>;
};

/*
            <DatePicker
              datePickerVariant={"desktop"}
              onChange={(
                event: InterstateOnChangeEvent<DatePickerEventValue>,
              ) => {
                setCurrDate(event.target.value.dateValue);
              }}
            />

 */
