import React, { Component } from 'react';
import { Parallax } from 'react-spring'
import Icon from '@mdi/react';
import { mdiRestart } from '@mdi/js';
import { mdiArrowRightThick } from '@mdi/js';
import filmFinder from '../images/code_images/filmFinder.png'
import portfolio from '../images/code_images/portfolio.png'
import sproutHq from '../images/code_images/sproutHq.png'



const Page = ({ offset, caption, first, second, background, frame, imagelink, onClickForward, onClickBack }) => (
  
  <React.Fragment>
    
    {/*background*/}

    <Parallax.Layer offset={offset} speed={0.2} >     
        <div className={`layerBackground ${background}`} />
    </Parallax.Layer>

    {/*slide one*/}
   
    <Parallax.Layer offset={offset} speed={0.2}  >     
      {offset===0  &&             
        <div className='container'> 
          <img className={`p-image-frame ${frame}`} src={imagelink} alt="Layout"/>  
          
        </div>
      }   
    </Parallax.Layer> 

    {/*slide two*/}
      
    <Parallax.Layer offset={offset} speed={.5} >
      {offset===1 &&
        <div className="container">
          <div><img className={`p-image-frame ${frame}`} src={imagelink} alt="Layout"/></div> 
        </div> 
      }
    </Parallax.Layer>

    {/*slide three*/}

    <Parallax.Layer offset={offset} speed={0.2}  >     
      {offset===2  &&  
       <div className="container">      
        <div> <img className={`p-image-frame ${frame}`} src={imagelink} alt="Layout"/>  </div>
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


    {/*nav arrows*/}

    <Parallax.Layer offset={offset} speed={0.4} >   
      {offset!==0  &&  
        <Icon path={mdiArrowRightThick} className = "arrow-back" size={1.5} rotate={90} color='black' onClick={onClickBack}/>
      }

      {offset!==2 &&         
        <Icon path={mdiArrowRightThick}  className = "arrow-forward" size={1.5} color='black' onClick={onClickForward}/>
      }

      {offset===2 &&
        <Icon path={mdiRestart} size={1.5} className = "restart" flip-h color='black' onClick={onClickForward}/>
      }
    </Parallax.Layer>
  
  </React.Fragment>
)

class Projectslides extends React.Component {
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    return (
      <Parallax  ref="parallax" pages={3} horizontal scrolling={false}>

        <Page offset={0} background = "pink" frame = "p-frame-one" imagelink={sproutHq} caption="Client: Yoga Journal" first="Art direction and design of a Special Interest Publications"  onClickForward={() => this.scroll(1)} onClickBack={() => this.scroll(0)} />
        
        <Page offset={1} background = "teal" frame = "p-frame-one" imagelink={filmFinder} caption="Client: Yoga Journal" first="Art direction and design of a Special Interest Publications"  onClickForward={() => this.scroll(2)} onClickBack={() => this.scroll(0)} />
        
        <Page offset={2} background = "green" frame = "p-frame-one" imagelink={portfolio} caption="Client: Yoga Journal" first="Art direction and design of digital magazines"  onClickForward={() => this.scroll(0)} onClickBack={() => this.scroll(1)} />

      </Parallax>
    )
  }
}

export default Projectslides;