import { Checkbox, FormControlLabel, FormGroup, withStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import React from 'react';

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function App08_Example(){
    // 초기값 
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
    
      const handleChange = (event) => {//name 속성으로 어떤 체크박스가 바꼈는지 안다.
        setState({ ...state, [event.target.name]: event.target.checked });
      };

     return (
        <FormGroup row>
        <FormControlLabel
            control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
            label="Secondary"
        />
        <FormControlLabel
            control={
            <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
            />
            }
            label="Primary"
        />
        <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
        <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
        <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
        <FormControlLabel
            control={
            <Checkbox
                checked={state.checkedF}
                onChange={handleChange}
                name="checkedF"
                indeterminate
            />
            }
            label="Indeterminate"
        />
        <FormControlLabel
            control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label="Custom color"
        />
        <FormControlLabel
            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
            label="Custom icon"
        />
        </FormGroup>
    );
};