import Nullstack from 'nullstack';
import Navbar from '../components/Navbar-br.njs';
import Portfolio from './Portfolio';

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
        <Portfolio route="/pt" />
        <Footer/>
        </>
        )
    }

}

export default Main;