import Nullstack from 'nullstack';
import './Google.scss';
import './Application.scss';
import Main from './en-us/Main';
//import mainEN from './en-us/Main';

class Application extends Nullstack {
  renderHead(){
    return(
      <head>
          <link rel="canonical" href="https://waltermelo-ux-dev.netlify.app/"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>          
      </head>
    )
  }

  renderCookies(){
    return(
      <div id="cookies">
        <p>
          Uso cookies de terceiros (Google, Facebook e Hotjar) para fins de estudo, ao concordar
          com os termos de uso, estará tambem me ajudando a criar interfaces cada vez mais assertivas
        </p>
      </div>
    )
  }

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

  renderAbout(){
    return(
      <main>
        <section>
          <h1>Sobre mim</h1>
          <p>
            lorem aqui
          </p>
        </section>
      </main>
    )
  }

  async hydrate(){
    this.language = window.navigator.userLanguage || window.navigator.language;
  }

  render({page}) {
    return (
      <>
        <Head/>
        <Main/>
      </>
    )
  }
}

export default Application;