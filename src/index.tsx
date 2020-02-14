import * as React from "react";
import * as ReactDOM from "react-dom";

import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

const theme = createMuiTheme({
  overrides: {
    MuiPickersDay: {
      current: {
        backgroundColor: "#6979F8",
        color: "#fff"
      },
      daySelected: {
        background: "linear-gradient(225deg, #BD7AE3 0%, #8461C9 100%)"
      }
    }
  }
});

function App() {
  const [selectedDate, handleDateChange] = React.useState<
    MaterialUiPickersDate
  >(new Date());
  return (
    <div style={{ padding: "24px" }}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={theme}>
          <DatePicker
            variant="inline"
            disableToolbar={true}
            value={selectedDate}
            onChange={handleDateChange}
          />
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
