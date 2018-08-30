import React, { Component } from 'react'


export class Location extends Component {
  render() {
    return (
      <div className='location_wrapper'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12302.359622831586!2d-46.635384941995326!3d-23.549997844983714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59aa5b004689%3A0x37c720ec525c8bd9!2zU8Op!5e0!3m2!1spt-BR!2sbr!4v1535596642184" 
        width="100%" 
        height="500px" 
        frameborder="0"             
        allowFullScreen
        />        
        <div className='location_tag'>
            <div> Location </div>
        </div>
      </div>
    )
  }
}

export default Location
