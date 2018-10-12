import React, { Component } from 'react';
import { Parallax } from 'react-spring'
import Icon from '@mdi/react';
import { mdiRestart } from '@mdi/js';
import { mdiArrowRightThick } from '@mdi/js';
import filmFinder from '../images/code_images/filmFinder.png'
import portfolio from '../images/code_images/portfolio.png'
import sproutHq from '../images/code_images/sproutHq.png'

const Page = ({ offset, caption, first, second, specs_link, specs_one, specs_two, specs_three, background, frame, imagelink, onClickForward, onClickBack }) => (
  
  <React.Fragment>
    
    {/*background*/}

      <Parallax.Layer  offset={offset} speed={0.5} >     
          <div className={`layerBackground ${background}`} />
      </Parallax.Layer> 

    {/*slide*/}
  
      <Parallax.Layer offset={offset} speed={1.25}  >          
        <div className='p-container'> 
          <img className={`p-image-frame ${frame}`} src={imagelink} alt="Layout"/>   
        </div>           
      </Parallax.Layer> 
   
    {/*copy*/}

      <Parallax.Layer horizontal offset={offset} speed={3.5}>
        <div className='p-container'>
          <h3 className='p-headline'>{caption}</h3>
        </div>
      </Parallax.Layer>

      <Parallax.Layer horizontal offset={offset} speed={2}>
        <div className='p-container'>
          <sm className='p-copy'>{first}</sm>
          <p className='p-copy'>{second}</p> 
        </div>
      </Parallax.Layer>

       <Parallax.Layer horizontal offset={offset} speed={2}>
        <div className='p-container'>
          <p className='specs'>{specs_link}</p><br/>
          <p className='specs'>{specs_one}</p><br/>
          <p className='specs'>{specs_two}</p><br/>
          <p className='specs'>{specs_three}</p><br/>
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
        
        {/*slide one*/}
          <Page offset={0} background = "slide-one" frame = "p-frame-one" imagelink={sproutHq} caption="Project: SproutHQ" first="This app uses Rails in the backend with Javascript and Jquery in the front." specs="Test copy goes here" onClickForward={() => this.scroll(1)} onClickBack={() => this.scroll(0)} />
        
        {/*slide two*/}
          <Page offset={1} background = "slide-one" frame = "p-frame-two" imagelink={filmFinder} caption="Project: FilmFinder" first="Utilized React with Redux and Thunk for centralized storage of state and asynchronous requests to The Movie DB API and the Rails API" specs_link= "https://github.com/CodeDad70/portfolio/commits/master" specs_one= "• Utilizes Rails to generate an API in the back end for database persistence " specs_two = "• Utilizes React with Redux and Thunk for centralized storage of state and asynchronous requests to both The Movie Database API and the Rails API." specs_three= "• Utilizes react-routes to create a restful route structure but still employs the speed of the virtual DOM, single page app, and client side rendering"  onClickForward={() => this.scroll(2)} onClickBack={() => this.scroll(0)} />
        
        {/*slide three*/}
          <Page offset={2} background = "slide-one" frame = "p-frame-one" imagelink={portfolio} caption="Project: ES Design" first="This app is built with React and utilizes React-spring for transistion animations"  specs="Test copy goes here" onClickForward={() => this.scroll(0)} onClickBack={() => this.scroll(1)} />

      </Parallax>
      
    )
  }
}

export default Projectslides;