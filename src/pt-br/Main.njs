import Nullstack from 'nullstack';
import Portfolio from './Portfolio';

class Main extends Nullstack {

    renderHeader(){
        return (
          <header>
          <nav>
              <ul class="main">
                  <li><a class="active" href="/">Portfolio</a></li>
                  <li><a href="/about">Sobre</a></li>
              </ul>
          </nav>
          <ul class="language">
              <li>
                  <a href="#">US-EN</a>
              </li>
              <li>
                  <a class="active" href="#">PT-BR</a>
              </li>
          </ul>
        </header>
        )
      }
    
    renderFooter(){
        return(
          <footer>
            <div class="main">
              <div></div>
              <div>
                <h4 class="title">Redes Sociais</h4>
                <ul>
                  <li>Linkedin</li>
                  <li>Github</li>
                </ul>
              </div>
              <div>
                <h4 class="title">Contato</h4>
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