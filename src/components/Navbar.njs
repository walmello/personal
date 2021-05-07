import Nullstack from 'nullstack';
import Languages from './Languages.njs';

class Navbar extends Nullstack {
  
  render({router}) {
    return (
      <header>
      <nav>
          <ul class="main">
              <li><a class={router.path == '/' ? 'active' : ''} href="/">Portfolio</a></li>
              <li><a class={router.path == '/about' ? 'active' : ''}href="/about">About</a></li>
          </ul>
      </nav>
      <Languages active="en"/>
    </header>

    )
  }

}

export default Navbar;