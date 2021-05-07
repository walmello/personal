import Nullstack from 'nullstack';

class Languages extends Nullstack {
  
  render({router,active}) {
    const lang = router.path.split('/')[1]
    const path = router.path.split('/').slice(1)
    const langname = lang == 'pt' ? 'pt' : ''
    const pathname = langname == 'pt' ? path.slice(1).join('/') : path.join('/')
    return (
        <ul class="language">
        <li>
            <a class={active == 'en' ? 'active' : ''} href={'/'+pathname}>US-EN</a>
        </li>
        <li>
            <a class={active == 'pt' ? 'active' : ''} href={'/pt/'+pathname}>PT-BR</a>
        </li>
    </ul>
    )
  }

}

export default Languages;