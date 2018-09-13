import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import MyButton from '../utils/MyButton';

export default class Discount extends Component {
  constructor(){
      super()
      this.state = {
          discountStart: 0,
          discountEnd: 30
      }
  }

  addDiscount(){  
    let init = this.state.discountStart
    if(init <=  this.state.discountEnd){
        init++
        this.setState({...this.state,
            discountStart: init.toString().padStart(2, '0')
        })        
    }    
  }

  componentDidUpdate(){    
    setTimeout(() => this.addDiscount(), 50)
  }

  render() {
    return (
      <div className='center_wrapper'>
        <div className='discount_wrapper'>
            <Fade
                onReveal={() => this.addDiscount()}
            >
                <div className='discount_porcentage'>
                    <span>{this.state.discountStart}%</span>
                    <span>OFF</span>
                </div>
            </Fade>

            <Slide right>
                <div className='discount_description'>
                    <h3>Purchase tickets before 20th JUNE</h3>
                    <p>Lorin ipsun asdf asd fa sfs adfsa d fsadfas dfas df asf adfsa d fsadfas dfas df asf adfsa d fsadfas dfas df asf adfsa d fsadfas dfas df asf adfsa d fsadfas dfas df asf asfasdf as df asd f as fd as df as dfsa f sa fsa fsa fsa  asfd.</p>                
                    <div>
                        <MyButton 
                            text='Purchase Tickets'
                            bck='#ffa800'
                            color='#ffffff'
                            link='http://google.com'
                        />
                    </div>
                </div>
            </Slide>
        </div>
      </div>
    )
  }
}
