import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import TooBar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import SideDrawer from './SideDrawer'

export default class Header extends Component {
  constructor(){
    super()
    this.state = {
      drawerOpen: false,
      showBar: false
    }
  }

  toggleDrawer(value){
    this.setState({...this.state,
      drawerOpen: value
    })
  }
  componentDidMount(){
    console.log(window.screenY)
    window.addEventListener('scroll', this.handleScrol)
  }

  handleScrol = () => {
    let show = false
    if(window.screenY > 0){
      show = true
    }
    this.setState({...this.state,
      showBar: show
    })
    
    
  }
  render() {
    return (
      <AppBar
        position='fixed'
        className='appBar'
        style={{
          boxShadow: 'none',
          backgroundColor: this.state.showBar ? '#2f2f2f' : 'transparent' 
        }}
      >
      <TooBar>
        <div className='header_logo'>
          <div className='font_righteous header_logo_venue'>The Venue</div>
          <div className='header_logo_title'>Musical Events</div>
        </div>
        <IconButton
          aria-label='Menu'
          color='inherit'
          onClick={() => this.toggleDrawer(true) }
        >
            <MenuIcon />
        </IconButton>
        <SideDrawer
          open={this.state.drawerOpen}
          onClose={(value) => this.toggleDrawer(value)}
        />
      </TooBar>
      </AppBar>
    )
  }
}
