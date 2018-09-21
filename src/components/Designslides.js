import React, { Component } from 'react';
import { Parallax } from 'react-spring'
import Icon from '@mdi/react';
import { mdiRestart } from '@mdi/js';
import { mdiArrowRightThick } from '@mdi/js';
import timex from '../images/timexwatch.jpg';

const Page = ({ offset, caption, first, second, background, imagelink, onClickForward, onClickBack }) => (
  <React.Fragment>
   
    <Parallax.Layer offset={offset} speed={0.2} >
      <div className={`layerBackground ${background}`} />
     
    </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={0.2} >
     
      <img className='image-frame' src={imagelink} /> alt="Timex Layout"/>
      
    </Parallax.Layer>

    <Parallax.Layer className="text headline" horizontal offset={offset} speed={0.9}>
      <div>
        <p >{caption}</p>
      </div>
    </Parallax.Layer>

     <Parallax.Layer className="text copy " horizontal offset={offset} speed={0.6}>
      <div>
        <p>{first}</p>
        <p>{second}</p> 
      </div>
    </Parallax.Layer>

      <Parallax.Layer offset={offset} speed={0.4} >
      <div>
      
      
      {offset!==0 &&     
      <Icon path={mdiArrowRightThick} className = "arrow-back" size={1.5} rotate={90} color="white" onClick={onClickBack}/>
 
      }
      {offset!==2 &&
      
      <Icon path={mdiArrowRightThick}  className = "arrow-forward" size={1.5} color="white" onClick={onClickForward}/>
      }
      {offset===2 &&
      <Icon path={mdiRestart} size={1.5} className = "restart" flip-h color="white" onClick={onClickForward}/>
      }

      </div>
    </Parallax.Layer>
    
  </React.Fragment>
)

class Designslides extends React.Component {
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    return (
      <Parallax className="container" ref="parallax" pages={3} horizontal scrolling={false}>
        <Page offset={0} gradient="pink" background = "red" caption="Test One" first="Huh" second="dolor sit"  onClickForward={() => this.scroll(1)} onClickBack={() => this.scroll(0)} />
        
        <Page offset={1} gradient="teal" background = "blue" imagelink={timex} caption="Second Slide" first="consectetur" second="adipiscing elit" onClickForward={() => this.scroll(2)} onClickBack={() => this.scroll(0)} />

        <Page offset={2} gradient="tomato" background = "green" caption="Third Slide" first="Morbi quis" second="est dignissim" onClickForward={() => this.scroll(0)} onClickBack={() => this.scroll(1)} />
        
      </Parallax>
    )
  }
}




export default Designslides;
