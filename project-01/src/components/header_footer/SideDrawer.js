import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll'


const SideDrawer = (props) => {

  const scroolToElement = (element) => {
    scroller.scrollTo(element, {
        duration: 750,
        delay: 50,
        smooth: true,
        offset: -150
    })
    props.onClose(false)
  }
  return (
    <Drawer
        anchor="right"
        open={props.open}   
        onClose={ () => props.onClose(false) }
    >
        <List component='nav'>
            <ListItem button onClick={() => scroolToElement('Header')}>
                Event starts in
            </ListItem>
            <ListItem button onClick={() => scroolToElement('VenueNfo')}>
                Venue NFO
            </ListItem>
            <ListItem button onClick={() => scroolToElement('HightLights')}>
                Highlights
            </ListItem>
            <ListItem button onClick={() => scroolToElement('Pricing')}>
                Pricing
            </ListItem>
            <ListItem button onClick={() => scroolToElement('Location')}>
                Location
            </ListItem>
        </List>  
    </Drawer>
  )
}



export default SideDrawer

