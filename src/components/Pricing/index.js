import React, { Component } from 'react'
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom'

export class Pricing extends Component {
  constructor(){
      super()
      this.state = {
          itens:[
            {
                price: 100,
                position: 'Balcony',
                desc: 'asdf asdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdf',
                linkto: 'sales/a',
                delay: 500

            },
            {
                price: 150,
                position: 'Midium',
                desc: 'asdf asdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdf',
                linkto: 'sales/b',
                delay: 350
            },
            {
                price: 250,
                position: 'Star',
                desc: 'asdf asdf asdf asdf asdfasdf asdf asdf asdfasdf asdf asdf asdf',
                linkto: 'sales/c',
                delay: 500
            }
          ]          
      }
  }


  showBox = () => (      
        this.state.itens.map((item,i) => (
            <Zoom duration={500} delay={item.delay} key={i}>
                <div className='pricing_item'>
                    <div className='pricing_inner_wrapper'>
                        <div className='pricing_title'>
                            <span>${item.price}</span>
                            <span>{item.position}</span>
                        </div>
                        <div className='pricing_description'>
                            {item.desc}
                        </div>
                        <div className='pricing_buttons'>
                                <MyButton 
                                    text='Purchase Tickets'
                                    bck='#ffa800'
                                    color='#ffffff'
                                    link={item.linkto}
                                />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))      
  ) 

  render() {
    return (      
        <div className='bck_black'>        
            <div className='center_wrapper pricing_section'>
                <h2> Pricing </h2>
                <div className='pricing_wrapper'>
                        {this.showBox()} 
                </div>
            </div>                    
        </div>      
    )
  }
}

export default Pricing
