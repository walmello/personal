import Nullstack from 'nullstack';
import Portfolio from './Portfolio';

class Main extends Nullstack {

    renderHeader(){
        return (
          <header>
          <nav>
              <ul class="main">
                  <li><a class="active" href="/">Portfolio</a></li>
                  <li><a href="/about">About</a></li>
              </ul>
          </nav>
          <ul class="language">
              <li>
                  {/*<a class="active" href="#">US-EN</a>*/}
              </li>
              <li>
                  {/*<a href="#">PT-BR</a>*/}
              </li>
          </ul>
        </header>
        )
      }
    
    renderFooter(){
        return(
          <footer>
            <div class="main">
              <div>
                <h4 class="title">Current Status</h4>
                <p class="status">
                  Full Time Freelancing, open to job proposals
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