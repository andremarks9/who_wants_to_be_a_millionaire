import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./MuiRadio.css";

const MuiRadio = ({ data, goToNextQuestion }) => {
  return (
    <FormControl className="formControlContainer">
      <FormLabel
        className="titleContainer"
        style={{ color: "white" }}
        id="demo-radio-buttons-group-label"
      >
        {data?.attributes?.question}
      </FormLabel>
      <RadioGroup
        className="optionListContainer"
        aria-labelledby="demo-radio-buttons-group-label"
      >
        {data?.attributes?.answers?.map((answer) => {
          return (
            <FormControlLabel
              key={answer}
              value={answer}
              control={<Radio size="small" style={{ color: "white" }} />}
              label={answer}
              onClick={() => goToNextQuestion(answer)}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default MuiRadio;
