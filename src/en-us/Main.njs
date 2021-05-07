import Nullstack from 'nullstack';
import Navbar from '../components/Navbar.njs';
import Portfolio from './Portfolio';
import About from './About';

class Main extends Nullstack {

    renderHeader(){
        return (
          <Navbar/>
        )
      }
    
    renderFooter(){
        return(
          <footer>
            <div class="main">
              <div>
                <h4 class="title"></h4>
                <p class="status">
                  
                </p>
              </div>
              <div>
                <h4 class="title">Social Networks</h4>
                <ul>
                  <li>Linkedin</li>
                  <li>Github</li>
                </ul>
              </div>
              <div>
                <h4 class="title">Contact</h4>
                <ul>
                  <li>Email:</li>
                  <li>Whatsapp:</li>
                  <li>Telegram:</li>
                </ul>
              </div>
            </div>
          </footer>
        )
    }

    prepare({page}){
      page.locale = 'en-US';
      page.canonical = 'https://waltermelo-ux-dev.netlify.app/';
    }
    
    render() {
        return (
        <>
        <head>
          <title>Walter Melo - Web Designer | Developer </title>
          <meta name="description" content="
            Hello, my name is
            Walter Melo
            
            I'm a Web Designer and Front End Developer
            In a career transition to UX Design            
          "></meta>
        </head>
        <Header/>
        <About route="/about"/>
        <Portfolio route="/" />
        <Footer/>
        </>
        )
    }

}

export default Main;