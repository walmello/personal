import Nullstack from 'nullstack';
import Languages from './Languages.njs';

class Navbar extends Nullstack {
  
  render({router}) {
    return (
      <header>
      <nav>
          {/*
          <ul class="main">
              <li><a class={router.path == '/pt' ? 'active' : ''} href="/pt">Portfólio</a></li>
              <li><a class={router.path == '/pt/about' ? 'active' : ''}href="/pt/about">Sobre</a></li>
          </ul>
          */}
      </nav>
      <Languages active="pt"/>
    </header>

    )
  }

}

export default Navbar;