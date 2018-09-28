import React, { Component } from 'react';
import { Parallax } from 'react-spring'
import Icon from '@mdi/react';
import { mdiRestart } from '@mdi/js';
import { mdiArrowRightThick } from '@mdi/js';
import timex from '../images/timexwatch.jpg';
import slideOneA from '../images/Slide-One-A.jpg'
import slideTwoA from '../images/Slide-Two-A.jpg'
import slideTwoB from '../images/Slide-Two-B.jpg'
import slideTwoC from '../images/Slide-Two-C.jpg'
import slideTwoD from '../images/Slide-Two-D.jpg'

const Page = ({ offset, caption, first, second, background, imagelink, frameOne, frameTwo, frameThree, frameFour, onClickForward, onClickBack }) => (
  <React.Fragment>
   
    <Parallax.Layer offset={offset} speed={0.2} >
      <div className={`layerBackground ${background}`} />
     
    </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={0.2} >
      <div>
        {offset===0 &&     
         <img className={`image-frame ${frameOne}`} src={imagelink} alt="Layout"/>
        }

        {offset===1 &&     
         <div>
          <img className={`image-frame ${frameTwo}`} src={imagelink} alt="Layout"/>
          <img className={`image-frame ${frameThree}`} src={imagelink} alt="Layout"/>
         </div>
        }



      </div>
    </Parallax.Layer>

    <Parallax.Layer className="text headline" horizontal offset={offset} speed={0.9}>
        <h3>{caption}</h3>
    </Parallax.Layer>

     <Parallax.Layer className="text copy " horizontal offset={offset} speed={0.6}>
      <div>
        <sm>{first}</sm>
        <p>{second}</p> 
      </div>
    </Parallax.Layer>

      <Parallax.Layer offset={offset} speed={0.4} >
      <div>
      
      
      {offset!==0 &&     
      <Icon path={mdiArrowRightThick} className = "arrow-back" size={1.5} rotate={90} color='black' onClick={onClickBack}/>
 
      }
      {offset!==6 &&
      
      <Icon path={mdiArrowRightThick}  className = "arrow-forward" size={1.5} color='black' onClick={onClickForward}/>
      }
      {offset===6 &&
      <Icon path={mdiRestart} size={1.5} className = "restart" flip-h color='black' onClick={onClickForward}/>
      }

      </div>
    </Parallax.Layer>
    
  </React.Fragment>
)

class Designslides extends React.Component {
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    return (
      <Parallax className="container" ref="parallax" pages={7} horizontal scrolling={false}>

        <Page offset={0} gradient="pink" background = "slide-one" frameOne = "frame-one" imagelink={slideOneA} caption="Client: Yoga Journal" first="Art direction and design of a Special Interest Publication"  onClickForward={() => this.scroll(1)} onClickBack={() => this.scroll(0)} />
        
        <Page offset={1} gradient="teal" background = "slide-two" frameTwo = "frame-two" frameThree = "frame-three" frameFour = "frame-two" imagelink={slideTwoA} caption="Client: Yoga Journal" first="Art direction and design of a Special Interest Publication"  onClickForward={() => this.scroll(2)} onClickBack={() => this.scroll(0)} />
        
        <Page offset={2} gradient="teal" background = "blue" frame = "frame-two" imagelink={timex} caption="Client: Timex" first="Catalogue layouts, brochure layouts and packaging graphics"  onClickForward={() => this.scroll(3)} onClickBack={() => this.scroll(1)} />

        <Page offset={3} gradient="teal" background = "blue" frame = "frame-two" imagelink={timex} caption="Client: Timex" first="Catalogue layouts, brochure layouts and packaging graphics"  onClickForward={() => this.scroll(4)} onClickBack={() => this.scroll(2)} />

        <Page offset={4} gradient="teal" background = "blue" frame = "frame-two" imagelink={timex} caption="Client: Timex" first="Catalogue layouts, brochure layouts and packaging graphics"  onClickForward={() => this.scroll(5)} onClickBack={() => this.scroll(3)} />

        <Page offset={5} gradient="teal" background = "blue" frame = "frame-two" imagelink={timex} caption="Client: Timex" first="Catalogue layouts, brochure layouts and packaging graphics"  onClickForward={() => this.scroll(6)} onClickBack={() => this.scroll(4)} />

        <Page offset={6} gradient="tomato" background = "green" frame = "frame-two" caption="Third Slide" first="Morbi quis" second="est dignissim" onClickForward={() => this.scroll(0)} onClickBack={() => this.scroll(5)} />
        
      </Parallax>
    )
  }
}




export default Designslides;
