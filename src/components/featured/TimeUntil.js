import React, { Component } from 'react'
import Slide from 'react-reveal/Slide';

export default class TimeUntil extends Component {

  constructor(){
      super()
      this.state = {
          deadLine: 'Jan, 16, 2019',
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
      }
  }

  getTimeUntil(deadline){
    const time = Date.parse(deadline) - Date.parse(new Date())
    if(time < 0){
        console.log('Time passed')
    }else{
        const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, '0')
        const minutes = Math.floor((time / 1000 / 60) % 60).toString().padStart(2, '0')
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24).toString().padStart(2, '0')
        const days = Math.floor((time / (1000 * 60 * 60 * 24))).toString().padStart(2, '0')
        this.setState({...this.state,
            days,
            hours,
            minutes,
            seconds
        })
    }
  }
  

  componentDidMount(){
      setInterval(() => this.getTimeUntil(this.state.deadLine), 1000)
  }
  render() {
    return (
      <Slide left delay={1000}>
        <div className='countdown_wrapper'>
            <div className='countdown_top'>
                Event start in
            </div>
            <div className='countdown_bottom'>
                <div className='countdown_item'>
                    <div className='countdown_time'>
                    {this.state.days}
                    </div>
                    <div className='countdown_tag   '>
                        Days
                    </div>
                </div>
                <div className='countdown_item'>
                    <div className='countdown_time'>
                    {this.state.hours}
                    </div>
                    <div className='countdown_tag   '>
                        Hs
                    </div>
                </div>
                <div className='countdown_item'>
                    <div className='countdown_time'>
                    {this.state.minutes}
                    </div>
                    <div className='countdown_tag   '>
                        Min
                    </div>
                </div>
                <div className='countdown_item'>
                    <div className='countdown_time'>
                        {this.state.seconds}
                    </div>
                    <div className='countdown_tag   '>
                        Sec
                    </div>
                </div>
            </div>
        </div>
      </Slide>
    )
  }
}
