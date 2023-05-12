import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import { NavLink } from 'react-router-dom'
import { FC } from 'react'

const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          background: '#0B0F30'
        }}
      >
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <ElectricBoltIcon />
          </IconButton>
          <NavLink to='/'>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              POSTS
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
