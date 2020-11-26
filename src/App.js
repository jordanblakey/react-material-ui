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

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors'
import 'fontsource-roboto'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: '30px',
    color: 'white',
    padding: '10px 30px',
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)'
  }
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500]
    },
    secondary: {
      main: orange[400]
    }
  },
  typography: {
    h1: {
      fontSize: 36,
      marginBottom: 0
    }
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
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">

        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">MUI Theming</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h1" component="div">Welcome to MUI</Typography>
            <Typography variant="h3">Learn how to use Material UI</Typography>
            <Typography variant="subtitle1">Learn how to use Material UI</Typography>
            <Typography variant="body1">Learn how to use Material UI</Typography>
            <ButtonStyled /><br />
            <Grid container spacing={2} justify="center">
              <Grid item xs={12} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3} lg={12}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3} lg={12}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
            </Grid>
            <br />
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
                color="secondary"
                href="#"
                size="large">
                Discard
          </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
