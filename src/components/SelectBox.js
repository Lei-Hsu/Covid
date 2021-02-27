import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
}));

export default function SelectBox({
  allCountryData,
  countryData,
  handleChangeSelectBox,
}) {
  //   const { setCountryData } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Country</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={countryData}
          onChange={handleChangeSelectBox}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {allCountryData.map((data, i) => {
            return (
              <MenuItem key={i} value={data}>
                {data.country}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
