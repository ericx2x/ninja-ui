import React, { useState } from 'react'
import { Typography, Button } from '@material-ui/core'

const Settings = ({ history }) => {
  const [showKey, setShowKey] = useState(false)

  const handleForgetKeyClick = () => {
    delete window.localStorage.xprivKey
    history.push('/')
  }

  return (
    <div>
      <Typography variant='h3'>Settings</Typography>
      <Typography variant='h4'>Your Ninja Key</Typography>
      <Typography paragraph>Your Ninja key protects your coins.</Typography>
      {showKey
        ? (
          <>
            <Typography>{window.localStorage.xprivKey}</Typography>
            <Button onClick={() => setShowKey(false)}>Hide Key</Button>
          </>
          )
        : (
          <>
            <Typography>
              *****************************************************************
            </Typography>
            <Button onClick={() => setShowKey(true)}>Show Key</Button>
          </>
          )}
      <Typography variant='h4'>Forget Key</Typography>
      <Typography paragraph>
        Forgetting your key removes it from this device. You will need to enter it again to come back.
      </Typography>
      <Button onClick={handleForgetKeyClick}>Forget Key</Button>
    </div>
  )
}

export default Settings
