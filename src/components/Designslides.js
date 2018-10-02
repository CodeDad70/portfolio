import React, { Component } from 'react';
import { Parallax } from 'react-spring'
import Icon from '@mdi/react';
import { mdiRestart } from '@mdi/js';
import {mdiHome} from '@mdi/js';
import { mdiArrowRightThick } from '@mdi/js';
import slideOneA from '../images/Slide-One-A.jpg'
import slideTwoA from '../images/Slide-Two-A.jpg'
import slideTwoC from '../images/Slide-Two-C.jpg'
import slideTwoD from '../images/Slide-Two-D.jpg'
import Inbalance_Excuses from '../images/Inbalance_Excuses.jpg'
import Yoga_Athletes from '../images/Yoga _Athletes.jpg'
import Yoga_Swim from '../images/Yoga_Swim.jpg'
import Inbalance_Cover from '../images/Inbalance_Cover.jpg'
import Tovolo_Coffee from '../images/Tovolo_Coffee.jpg'
import Tovolo_Timer from '../images/Tovolo_Timer.jpg'
import Softrucks_Living_Room from '../images/Softrucks_Living_Room.jpg'
import Softrucks_Ollie_Higher from '../images/Softrucks_Ollie_Higher.jpg'
import Softrucks_Packaging from '../images/Softrucks_Packaging.jpg'
import Softrucks_Articles from '../images/Softrucks_Articles.jpg'
import Route_Mens_One from '../images/Route_Mens_One.jpg'
import Route_Mens_Two from '../images/Route_Mens_Two.jpg'
import Route_Womens from '../images/Route_Womens.jpg'
import Books from '../images/icons/Books.jpg'
import Donuts from '../images/icons/Donuts.jpg'
import Feet from '../images/icons/Feet.jpg'
import Perfume from '../images/icons/Perfume.jpg'
import Sui_Blue from '../images/icons/Sui_Blue.jpg'
import Timex from '../images/icons/Timex.jpg'


const Page = ({ offset, caption, first, second, finalCaption, finalCopy, background, imagelink, imagelinkB, imagelinkC, imagelinkD, imagelinkE, imagelinkF, frameOne, frameTwo, frameThree, frameFour, frameFive, frameSix, frameSeven, onClickForward, onClickBack }) => (
  <React.Fragment>
    
    {/*background*/}

    <Parallax.Layer offset={offset} speed={0.2} >     
        <div className={`layerBackground ${background}`} />
    </Parallax.Layer>


    {/*slide one*/}
   
     <Parallax.Layer offset={offset} speed={0.2}  >     
      {offset===0  &&        
      
       <div className='container'> <img className={`image-frame ${frameOne}`} src={imagelink} alt="Layout"/>  </div>
      }   
    </Parallax.Layer> 

    {/*slide two*/}
      
    <Parallax.Layer offset={offset} speed={.5} >
      {offset===1 &&
        <div className="container">
          <div><img className={`image-frame ${frameTwo}`} src={imagelink} alt="Layout"/></div> 
        </div> 
      }
    </Parallax.Layer>
    
    <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={1.25} >
      {offset===1 &&
        <div className="container">
          <div><img className={`image-frame ${frameThree}`} src={imagelinkB} alt="Layout"/></div>
        </div>  
      }
    </Parallax.Layer>

    <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={2.45} >
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

    {/*slide five*/}

    <Parallax.Layer offset={offset} speed={0.2}  >     
      {offset===4  &&  
       <div className="container">      
        <div> <img className={`image-frame ${frameOne}`} src={imagelink} alt="Layout"/>  </div>
       </div>
      }  
    </Parallax.Layer> 

     {/*slide six*/}

    <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={.5} >
      {offset===5 &&
        <div className="container">
          <div><img className={`image-frame ${frameOne}`} src={imagelink} alt="Layout"/></div>
        </div>  
      }
    </Parallax.Layer>

     {/*slide seven*/}

    <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={.5} >
      {offset===6 &&
        <div className="container">
          <div><img className={`image-frame ${frameOne}`} src={imagelink} alt="Layout"/></div>
        </div>  
      }
    </Parallax.Layer>

     {/*slide eight*/}

    <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={1.25} >
      {offset===7 &&
        <div className="container">
          <div><img className={`image-frame ${frameOne}`} src={imagelink} alt="Layout"/></div>
        </div>  
      }
    </Parallax.Layer>

    <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={.75} >
      {offset===7 &&
        <div className="container">
          <div><img className={`image-frame ${frameTwo}`} src={imagelinkB} alt="Layout"/></div>
        </div>  
      }
    </Parallax.Layer>

    <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={.5} >
      {offset===7 &&
        <div className="container">
          <div><img className={`image-frame ${frameThree}`} src={imagelinkC} alt="Layout"/></div>
        </div>  
      }
    </Parallax.Layer>

    {/*slide nine*/}

    <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={.5} >
      {offset===8 &&
        <div className="container">
          <div><img className={`image-frame ${frameFive}`} src={imagelink} alt="Layout"/></div>
        </div>  
      }
    </Parallax.Layer>

    <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={1.25} >
      {offset===8 &&
        <div className="container">
          <div><img className={`image-frame ${frameSix}`} src={imagelinkB} alt="Layout"/></div>
        </div>  
      }
    </Parallax.Layer>

    <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={1.75} >
      {offset===8 &&
        <div className="container">
          <div><img className={`image-frame ${frameSeven}`} src={imagelinkC} alt="Layout"/></div>
        </div>  
      }
    </Parallax.Layer>

    {/*slide ten*/}

    <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={.5} >
      {offset===9 &&
        <div className="container">
          <div><img className={`image-frame ${frameOne}`} src={imagelink} alt="Layout"/></div>
        </div>  
      }
    </Parallax.Layer>

    <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={1.25} >
      {offset===9 &&
        <div className="container">
          <div><img className={`image-frame ${frameTwo}`} src={imagelinkB} alt="Layout"/></div>
        </div>  
      }
    </Parallax.Layer>

    <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={2} >
      {offset===9 &&
        <div className="container">
          <div><img className={`image-frame ${frameThree}`} src={imagelinkC} alt="Layout"/></div>
        </div>  
      }
    </Parallax.Layer>

     <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={.85} >
      {offset===9 &&
        <div className="container">
          <div><img className={`image-frame ${frameFour}`} src={imagelinkD} alt="Layout"/></div>
        </div>  
      }
    </Parallax.Layer>

     <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={2.5} >
      {offset===9 &&
        <div className="container">
          <div><img className={`image-frame ${frameFive}`} src={imagelinkE} alt="Layout"/></div>
        </div>  
      }
    </Parallax.Layer>


     <Parallax.Layer  className = 'slide-wrapper' offset={offset} speed={3} >
      {offset===9 &&
        <div className="container">
          <div><img className={`image-frame ${frameSix}`} src={imagelinkF} alt="Layout"/></div>
        </div>  
      }
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

    <Parallax.Layer horizontal offset={offset} speed={0.9}>
      <div className='final-caption'>
        <h3 >{finalCaption}</h3>
        <p>{finalCopy}</p>
        
      </div>
    </Parallax.Layer>


    {/*nav arrows*/}

     <Parallax.Layer offset={offset} speed={0.4} >
      
      {offset!==0  &&  
           
          <Icon path={mdiArrowRightThick} className = "arrow-back" size={1.5} rotate={90} color='black' onClick={onClickBack}/>

      }

      

      {offset!==9 &&
          
          <Icon path={mdiArrowRightThick}  className = "arrow-forward" size={1.5} color='black' onClick={onClickForward}/>
        
      }
      {offset===9 &&
        <div>

          <Icon path={mdiRestart} size={1.5} className = "restart" flip-h color='black' onClick={onClickForward}/>
          
        </div>  
      }
      </Parallax.Layer>
   
      
  </React.Fragment>
)

class Designslides extends React.Component {
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    return (
      <Parallax  ref="parallax" pages={10} horizontal scrolling={false}>

        <Page offset={0} background = "slide-one" frameOne = "frame-one" imagelink={slideOneA} caption="Client: Yoga Journal" first="Art direction and design of a Special Interest Publications"  onClickForward={() => this.scroll(1)} onClickBack={() => this.scroll(0)} />
        
        <Page offset={1} background = "slide-one" frameTwo = "frame-two" frameThree = "frame-three" frameFour = "frame-four" imagelink={slideTwoA} imagelinkB={slideTwoC} imagelinkC={slideTwoD} imagelinkD={slideTwoD} caption="Client: Yoga Journal" first="Art direction and design of a Special Interest Publications"  onClickForward={() => this.scroll(2)} onClickBack={() => this.scroll(0)} />
        
        <Page offset={2} background = "slide-one" frameOne = "frame-one" imagelink={Inbalance_Excuses} caption="Client: Yoga Journal" first="Art direction and design of digital magazines"  onClickForward={() => this.scroll(3)} onClickBack={() => this.scroll(1)} />

        <Page offset={3} background = "slide-one" frameFive = "frame-five" frameSix = "frame-six" frameSeven = "frame-seven" imagelink={Yoga_Athletes} imagelinkB={Yoga_Swim} imagelinkC={Inbalance_Cover} caption="Client: Yoga Journal" first="Art direction and design of digital magazines"  onClickForward={() => this.scroll(4)} onClickBack={() => this.scroll(2)} />

        <Page offset={4} background = "slide-one" frameOne = "frame-eight" imagelink={Tovolo_Coffee} caption="Client: Tovolo" first="Art direction, brand id, package design, trade show graphics, catalogue design"  onClickForward={() => this.scroll(5)} onClickBack={() => this.scroll(3)} />

        <Page offset={5} background = "slide-one" frameOne = "frame-eight" imagelink={Tovolo_Timer} caption="Client: Tovolo" first="Art direction, brand id, package design, trade show graphics, catalogue design"  onClickForward={() => this.scroll(6)} onClickBack={() => this.scroll(4)} />

        <Page offset={6} background = "slide-one" frameOne = "frame-one" imagelink={Softrucks_Living_Room} caption="Client:Softrucks" first="Art direction, logo design, brand id, package design, website design, photography, deck graphics" onClickForward={() => this.scroll(7)} onClickBack={() => this.scroll(5)} />

        <Page offset={7} background = "slide-one" frameOne = "frame-eleven" frameTwo="frame-twelve" frameThree="frame-thirteen" imagelink={Softrucks_Articles}  imagelinkB={Softrucks_Ollie_Higher}  imagelinkC={Softrucks_Packaging} caption="Client:Softrucks" first="Art direction, logo design, brand id, package design, website design, photography, deck graphics" onClickForward={() => this.scroll(8)} onClickBack={() => this.scroll(6)} />

         <Page offset={8} background = "slide-one" frameFive = "frame-five" frameSix = "frame-six" frameSeven = "frame-seven" imagelink={Route_Womens} imagelinkB={Route_Mens_One} imagelinkC={Route_Mens_Two} caption="Client: Route 66" first="Design of pocket tags, size stickers and hang tags for jeans"  onClickForward={() => this.scroll(9)} onClickBack={() => this.scroll(7)} />

         <Page offset={9} background = "slide-one" frameOne="frame-fourteen" frameTwo = "frame-fifteen" frameThree = "frame-sixteen" frameFour = "frame-seventeen" frameFive = "frame-eighteen" frameSix = "frame-nineteen" imagelink={Books} imagelinkB={Donuts} imagelinkC={Timex} imagelinkD={Feet} imagelinkE={Perfume} imagelinkF={Sui_Blue} finalCaption="Clients Include  " finalCopy="Timex, Williams-Sonoma, Marvel, Etc. Etc." onClickForward={() => this.scroll(0)} onClickBack={() => this.scroll(8)} /> 

      </Parallax>
    )
  }
}




export default Designslides;