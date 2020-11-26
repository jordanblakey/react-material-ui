import React from 'react'
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import { makeStyles, ThemeProvider } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: '30px',
    color: 'white',
    padding: '10px 30px',
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)'
  }
})

function ButtonStyled() {
  const classes = useStyles()
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <div>
      <FormControlLabel control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          color="primary"
          inputProps={{
            'aria-label': 'secondary checkbox'
          }} />
      } label="Testing Checkbox" />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <ButtonStyled /><br />
          <TextField variant="filled" type="time" label="The Time" /><br />
          <TextField variant="outlined" type="date" color="primary" /><br />
          <TextField variant="filled" color="secondary" /><br />
          <TextField variant="filled" type="email" label="Email" placeholder="test@test.com" color="secondary" />
          <CheckboxExample />
          <ButtonGroup>
            <Button
              startIcon={<SaveIcon />}
              variant="contained"
              color="primary"
              href="#"
              size="large">
              Save
          </Button>
            <Button
              startIcon={<DeleteIcon />}
              variant="contained"
              color="primary"
              href="#"
              size="large">
              Discard
          </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
