import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";

const formLabelStyling = {
  color: "rgba(200, 132, 39, .8)",
  maxWidth: 200,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden"
};

const textfieldStyling = {
  "& label": {
    //display: "none",
    //visibility: "hidden",
    //whiteSpace: "normal",
    color: "secondary.main",
    width: 100,
    "&.Mui-focused": {
      marginLeft: 0
      //display: "none"
    }
  }
  // "& legend": {
  //   display: "none"
  // }
};

const inputStyling = {
  color: "red"
};

export default function LabelDemo() {
  const [tfValue, setTFValue] = React.useState("");
  console.log(tfValue);
  return (
    <>
      <form style={{ maxWidth: "900px" }}>
        <Stack>
          <FormControl sx={{ m: 2 }} variant="standard">
            {/* <FormGroup row={true}> */}
            <FormLabel id="radios" sx={formLabelStyling}>
              Long Form Label Text Example
            </FormLabel>
            <RadioGroup aria-labelledby="radios" name="quiz">
              <FormControlLabel
                value="v1"
                control={<Radio />}
                label="Radio 1"
              />
              <FormControlLabel
                value="v2"
                control={<Radio />}
                label="Radio 2"
              />
            </RadioGroup>
            <FormHelperText>Form Helper Text</FormHelperText>
            {/* </FormGroup> */}
          </FormControl>
          <TextField
            label="TextField Label Text"
            value={tfValue}
            onChange={(newValue) => setTFValue(newValue.target.value)}
            sx={{
              marginBottom: 2,
              ...textfieldStyling,
              "& label": { marginLeft: tfValue ? 0 : "65%" }
            }}
          />
          <InputLabel sx={inputStyling}>Input Label Text</InputLabel>
          <Input sx={{ marginTop: 4 }} />
        </Stack>
      </form>
      <br />
      <a
        target="_blank"
        href="https://smartdevpreneur.com/mui-labels-textfield-labels-input-labels-and-form-labels/"
      >
        Click here for more Material UI Label styling
      </a>
    </>
  );
}
