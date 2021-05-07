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
                  <a class="active" href="#">US-EN</a>
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
    
    render() {
        return (
        <>
        <Header/>
        <About route="/about"/>
        <Portfolio route="/" />
        <Footer/>
        </>
        )
    }

}

export default Main;