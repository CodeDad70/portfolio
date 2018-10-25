import React, { Component } from 'react';
import { Parallax } from 'react-spring'
import Icon from '@mdi/react';
import { mdiRestart } from '@mdi/js';
import { mdiArrowRightThick } from '@mdi/js';
import filmFinder from '../images/code_images/filmFinder.png'
import portfolio from '../images/code_images/portfolio.png'
import sproutHq from '../images/code_images/sproutHq.png'


const Page = ({ offset, caption, first, second, specs_link, test_url, specs_one, specs_two, specs_three, specs_four,  background, frame, imagelink, onClickForward, onClickBack }) => (
  
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
        <div className='p-text-container'>
          <h3 className='p-headline'>{caption}</h3>
        </div>
      </Parallax.Layer>

      <Parallax.Layer horizontal offset={offset} speed={2}>
        <div className='p-text-container'>
          <p className='p-copy'>{first}</p>
        </div>
      </Parallax.Layer>

      <Parallax.Layer horizontal offset={offset} speed={2}>  
        <div className='p-text-container'>  
          <div className='specs-one' >   
            <p>{specs_one}</p>
            <p >{specs_two}</p>
            <p >{specs_three}</p>
            <p >{specs_four}</p>
            </div>
        </div>
      </Parallax.Layer>


    {/*nav arrows*/}

      <Parallax.Layer offset={offset} speed={0.4} >   
        {offset!==0  &&  
          <Icon path={mdiArrowRightThick} className = "arrow-back" size={1.5} rotate={180} color='black' onClick={onClickBack}/>
        }

        {offset!==2 &&         
          <Icon path={mdiArrowRightThick}  className = "arrow-forward" size={1.5} color='black' onClick={onClickForward}/>
        }

        {offset===2 &&
          <Icon path={mdiRestart} size={1.5} className = "restart" flip-h color='black' onClick={onClickForward}/>
        }

        {offset ===0 &&
         
        
         <div className="specs-link-one"> <a href={specs_link} target="_blank">Visit this site</a></div>
        
        }

        {offset ===1 &&
       
         <div className="specs-link"> <a href={specs_link} target="_blank">Visit this site</a></div>
         
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
          <Page offset={0} frame = "p-frame-one" imagelink={sproutHq} caption="Project: SproutHQ" first="Create picture cards to track your childs vital stats and milestones." specs_one= "• This app has a Rails API in the backend with JavaScript and jQuery in the front. " specs_two = "• The database schema uses  Active Record associations" specs_three= "• Utilizes jQuery and JavaScript to render a dynamic front end that allows users to view cards and generate milestones without a page refresh" specs_four="• Employs Devise for password secutiry, user authentication and Paperclip for image uploads" specs_link="https://floating-atoll-18673.herokuapp.com/" onClickForward={() => this.scroll(1)} onClickBack={() => this.scroll(0)} />
        
        {/*slide two*/}
          <Page offset={1} frame = "p-frame-one" imagelink={filmFinder} caption="Project: FilmFinder" first="Search for your favorite movies or actors and create a watch list." specs_link="https://agile-river-92406.herokuapp.com/" specs_one= "• Utilizes Rails to generate an API in the back end for database persistence " specs_two = "• Uses React with Redux and Thunk for centralized storage of state and asynchronous requests to both The Movie Database API and the Rails API." specs_three= "• Has react-routes to create a REST-ful route structure but still employs the speed of the virtual DOM, single page app, and client side rendering" onClickForward={() => this.scroll(2)} onClickBack={() => this.scroll(0)} />
        
        {/*slide three*/}
          <Page offset={2} background = "slide-one" frame = "p-frame-one" imagelink={portfolio} caption="Project: ES Design" first="This app is built with React to utitlize the virtual DOM for a single page app"  specs_two = "• Uses React springs, a library of JavaScript primitives, for transisition animations." specs_three= "• Has react-routes to create a restful route structure but still employs the speed of the virtual DOM, single page app, and client side rendering" specs_four="• Employs React routes for REST-ful route structure while still utilizing the single page app and the virtual DOM "  onClickForward={() => this.scroll(0)} onClickBack={() => this.scroll(1)} />

      </Parallax>
      
    )
  }
}


export default Projectslides;