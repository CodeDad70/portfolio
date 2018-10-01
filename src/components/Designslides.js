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
import Inbalance_Excuses from '../images/Inbalance_Excuses.jpg'
import Yoga_Athletes from '../images/Yoga _Athletes.jpg'
import Yoga_Swim from '../images/Yoga_Swim.jpg'
import Inbalance_Cover from '../images/Inbalance_Cover.jpg'


const Page = ({ offset, caption, first, second, background, imagelink, imagelinkB, imagelinkC, imagelinkD, frameOne, frameTwo, frameThree, frameFour, frameFive, frameSix, frameSeven, onClickForward, onClickBack }) => (
  <React.Fragment>
    
    {/*background*/}

    <Parallax.Layer offset={offset} speed={0.2} >     
        <div className={`layerBackground ${background}`} />
    </Parallax.Layer>

    {/*copy*/}

    <Parallax.Layer horizontal offset={offset} speed={0.9}>
      <div className='container'>
        <h3 className='headline'>{caption}</h3>
      </div>
    </Parallax.Layer>

     <Parallax.Layer horizontal offset={offset} speed={0.6}>

      <div className='container'>
        <sm className='copy'>{first}</sm>
        <p className='copy'>{second}</p> 
      </div>
    </Parallax.Layer>

    {/*slide one*/}
   
     <Parallax.Layer offset={offset} speed={0.2}  >     
      {offset===0  &&        
      
       <div className='container'> <img className={`image-frame ${frameOne}`} src={imagelink} alt="Layout"/>  </div>
      }   
    </Parallax.Layer> 

    {/*slide two*/}
      
    <Parallax.Layer offset={offset} speed={1.5} >
      {offset===1 &&
        <div className="container">
          <div><img className={`image-frame ${frameTwo}`} src={imagelink} alt="Layout"/></div> 
        </div> 
      }
    </Parallax.Layer>
    
    <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={1} >
      {offset===1 &&
        <div className="container">
          <div><img className={`image-frame ${frameThree}`} src={imagelinkB} alt="Layout"/></div>
        </div>  
      }
    </Parallax.Layer>

    <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={.5} >
      {offset===1 &&
        <div className="container">
          <div><img className={`image-frame ${frameFour}`} src={imagelinkC} alt="Layout"/></div>
        </div>
      }
    </Parallax.Layer>

    {/*slide three*/}

    <Parallax.Layer offset={offset} speed={0.2}  >     
      {offset===2  &&  
       <div className="container">      
        <div> <img className={`image-frame ${frameOne}`} src={imagelink} alt="Layout"/>  </div>
       </div>
      }  
    </Parallax.Layer> 

    {/*slide four*/}

    <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={.5} >
      {offset===3 &&
        <div className="container">
          <div><img className={`image-frame ${frameFive}`} src={imagelink} alt="Layout"/></div>
        </div>  
      }
    </Parallax.Layer>

    <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={1.25} >
      {offset===3 &&
        <div className="container">
          <div><img className={`image-frame ${frameSix}`} src={imagelinkB} alt="Layout"/></div>
        </div>  
      }
    </Parallax.Layer>

    <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={1.75} >
      {offset===3 &&
        <div className="container">
          <div><img className={`image-frame ${frameSeven}`} src={imagelinkC} alt="Layout"/></div>
        </div>  
      }
    </Parallax.Layer>


    {/*nav arrows*/}

     <Parallax.Layer offset={offset} speed={0.4} >
      
      {offset!==0 &&  
           
          <Icon path={mdiArrowRightThick} className = "arrow-back" size={1.5} rotate={90} color='black' onClick={onClickBack}/>

      }
      {offset!==6 &&
          
          <Icon path={mdiArrowRightThick}  className = "arrow-forward" size={1.5} color='black' onClick={onClickForward}/>
        
      }
      {offset===6 &&
        
          <Icon path={mdiRestart} size={1.5} className = "restart" flip-h color='black' onClick={onClickForward}/>
    
      }

      </Parallax.Layer>
   
      
  </React.Fragment>
)

class Designslides extends React.Component {
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    return (
      <Parallax  ref="parallax" pages={7} horizontal scrolling={false}>

        <Page offset={0} gradient="pink" background = "slide-one" frameOne = "frame-one" imagelink={slideOneA} caption="Client: Yoga Journal" first="Art direction and design of a Special Interest Publications"  onClickForward={() => this.scroll(1)} onClickBack={() => this.scroll(0)} />
        
        <Page offset={1} gradient="teal" background = "slide-one" frameTwo = "frame-two" frameThree = "frame-three" frameFour = "frame-four" imagelink={slideTwoA} imagelinkB={slideTwoC} imagelinkC={slideTwoD} imagelinkD={slideTwoD} caption="Client: Yoga Journal" first="Art direction and design of a Special Interest Publications"  onClickForward={() => this.scroll(2)} onClickBack={() => this.scroll(0)} />
        
        <Page offset={2} gradient="teal" background = "slide-one" frameOne = "frame-one" imagelink={Inbalance_Excuses} caption="Client: Yoga Journal" first="Art direction and design of digital magazines"  onClickForward={() => this.scroll(3)} onClickBack={() => this.scroll(1)} />

        <Page offset={3} gradient="teal" background = "slide-one" frameFive = "frame-five" frameSix = "frame-six" frameSeven = "frame-seven" imagelink={Yoga_Athletes} imagelinkB={Yoga_Swim} imagelinkC={Inbalance_Cover} caption="Client: Yoga Journal" first="Art direction and design of digital magazines"  onClickForward={() => this.scroll(4)} onClickBack={() => this.scroll(2)} />

        <Page offset={4} gradient="teal" background = "blue" frame = "frame-two" imagelink={timex} caption="Client: Timex" first="Catalogue layouts, brochure layouts and packaging graphics"  onClickForward={() => this.scroll(5)} onClickBack={() => this.scroll(3)} />

        <Page offset={5} gradient="teal" background = "blue" frame = "frame-two" imagelink={timex} caption="Client: Timex" first="Catalogue layouts, brochure layouts and packaging graphics"  onClickForward={() => this.scroll(6)} onClickBack={() => this.scroll(4)} />

        <Page offset={6} gradient="tomato" background = "green" frame = "frame-two" caption="Third Slide" first="Morbi quis" second="est dignissim" onClickForward={() => this.scroll(0)} onClickBack={() => this.scroll(5)} />
        
      </Parallax>
    )
  }
}




export default Designslides;