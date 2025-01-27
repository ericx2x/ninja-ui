import React from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Switch, Route, Redirect } from 'react-router-dom'
import Transactions from './Transactions'
import Commands from './Commands'
import Settings from './Settings'
import isKeyInvalid from '../utils/isKeyInvalid'
import SettingsIcon from '@material-ui/icons/Settings'
import CommandsIcon from '@material-ui/icons/Code'
import TransactionsIcon from '@material-ui/icons/ListAlt'

const useStyles = makeStyles({
  content_wrap: {
    margin: 'auto',
    maxWidth: '1440px',
    padding: '1em',
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridGap: '2em',
    '& > :first-child': {
      minWidth: '15em'
    }
  },
  logo_list_grid: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto'
  },
  img: {
    width: '13em',
    margin: '1em auto',
    justifySelf: 'center'
  },
  list_item: {
    borderRadius: '2em'
  }
}, { name: 'Ninja' })

const Ninja = ({ history, location }) => {
  const classes = useStyles()

  if (isKeyInvalid(window.localStorage.xprivKey)) {
    return <Redirect to='/' />
  }

  return (
    <div className={classes.content_wrap}>
      <div className={classes.logo_list_grid}>
        <img src='/banner.png' className={classes.img} alt='' />
        <List>
          <ListItem
            button
            selected={location.pathname === '/ninja/transactions'}
            className={classes.list_item}
            onClick={() => history.push('/ninja/transactions')}
          >
            <ListItemIcon>
              <TransactionsIcon
                color={
                location.pathname === '/ninja/transactions'
                  ? 'primary'
                  : undefined
              }
              />
            </ListItemIcon>
            <ListItemText>
              Transactions
            </ListItemText>
          </ListItem>
          <ListItem
            button
            selected={location.pathname === '/ninja/commands'}
            className={classes.list_item}
            onClick={() => history.push('/ninja/commands')}
          >
            <ListItemIcon>
              <CommandsIcon
                color={
                location.pathname === '/ninja/commands'
                  ? 'primary'
                  : undefined
              }
              />
            </ListItemIcon>
            <ListItemText>
              Commands
            </ListItemText>
          </ListItem>
          <ListItem
            button
            selected={location.pathname === '/ninja/settings'}
            className={classes.list_item}
            onClick={() => history.push('/ninja/settings')}
          >
            <ListItemIcon>
              <SettingsIcon
                color={
                location.pathname === '/ninja/settings'
                  ? 'primary'
                  : undefined
              }
              />
            </ListItemIcon>
            <ListItemText>
              Settings
            </ListItemText>
          </ListItem>
        </List>
        <Typography color='textSecondary' align='center'>
          You are a ninja
        </Typography>
      </div>
      <Switch>
        <Route exact path='/ninja/transactions' component={Transactions} />
        <Route exact path='/ninja/commands' component={Commands} />
        <Route exact path='/ninja/settings' component={Settings} />
      </Switch>
    </div>
  )
}

export default Ninja
