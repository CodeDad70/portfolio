import React, { Component } from 'react';
import { Transition, config, animated } from 'react-spring'
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { Parallax } from 'react-spring'



const Page = ({ offset, caption, first, second, gradient, background, onClickForward, onClickBack }) => (
  <React.Fragment>
    
    <Parallax.Layer offset={offset} speed={0.2} >
      <div className="slopeBegin" />
     
    </Parallax.Layer>

    

    <Parallax.Layer offset={offset} speed={-0.2} >
      <div className={`slopeEnd ${background}`} />
    </Parallax.Layer>

    

    <Parallax.Layer className="text number" offset={offset} speed={0.5}>
      <span>0{offset + 1}</span>
    </Parallax.Layer>

    <Parallax.Layer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
      </span>
    </Parallax.Layer>

     <Parallax.Layer className="text header" offset={offset} speed={0.6}>
      <span>
       
        <p>{first}</p>
        <p>{second}</p> 
      </span>
    </Parallax.Layer>

      <Parallax.Layer offset={offset} speed={0.2} >
      <div className="text-nav" >     
      {offset!==0 &&     
      <button  className = 'button-style' onClick={onClickBack}>Back</button>
      }
      {offset!==2 &&
      <button className = 'button-style' onClick={onClickForward}>Forward</button>
      }
      {offset===2 &&
      <button className = 'button-style' onClick={onClickForward}>Start Over</button>
      }

      </div>
    </Parallax.Layer>
    
  </React.Fragment>
)

class Designslides extends React.Component {
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    return (
      <Parallax className="container" ref="parallax" pages={3} horizontal scrolling={true}>
        <Page offset={0} gradient="pink" background = "red" caption="Test One" first="Lorem ipsum" second="dolor sit"  onClickForward={() => this.scroll(1)} onClickBack={() => this.scroll(0)} />
        
        <Page offset={1} gradient="teal" background = "blue" caption="Second Slide" first="consectetur" second="adipiscing elit" onClickForward={() => this.scroll(2)} onClickBack={() => this.scroll(0)} />

        <Page offset={2} gradient="tomato" background = "green" caption="Third Slide" first="Morbi quis" second="est dignissim" onClickForward={() => this.scroll(0)} onClickBack={() => this.scroll(1)} />
        
      </Parallax>
    )
  }
}




export default Designslides;
