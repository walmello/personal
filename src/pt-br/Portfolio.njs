import Nullstack from 'nullstack';

class Portfolio extends Nullstack {
  renderHero(){
    return (
      <section id="hero">
        <div>
          <h4 class="tx-2">👋 Oi, meu nome é</h4>
          <h3 class="tx-1">Walter Melo</h3>
          <br/>
          <h1 class="tx-1">Sou <strong>Web Designer</strong> e <strong>Desenvolvedor Front End</strong></h1>
          <h2 class="tx-2">Em transição de carreira para o <strong>UX Design</strong></h2>
          <br/>
          <h5 class="tx-3">* Eu Canto, desenho e jogo RPG nas horas vagas</h5>
          </div>
        <div>
          <img src="eu.png"/>
        </div>
      </section>
    )
  }

  renderCase({img, tags, title, description, testimonial, client}){
    return(
      <div class="case">
        <div class="img">
          <img src={"cases/"+img}/>   
        </div>   
        <ul class="tags">
          {tags.map(tag => <li>{tag}</li>)}
        </ul>
        <h3 class="title">{title}</h3>
        <p class="description">{description}</p>
        <a>Ver Case</a>
        
        <p class="testimonial">"{testimonial}."</p>
        <p class="client">{client}</p>
      </div>
    )
  }

  renderCases(){
    return(
      <section id="portfolio">
        <Case 
          img="b3.png"
          title="b3 consultoria"
          tags={['wordpress', 'design gráfico']}
          description="Redesign do antigo site focado em um visual mais limpo"
          testimonial="
            Profissional dedicado e comprometido. 
            Tivemos a satisfação de realização um trabalho 
            com o Walter no qual ficou acima das expectativas. 
            Encontramos alguns desafios no meio do caminho, 
            e ele não mediu esforços para atingirmos o resultado final
            de forma satisfatória"
          client="Anderson Simon"
        />
        <Case 
          img="cibercafe.png"
          title="Cibercafé"
          tags={['wordpress', 'design gráfico']}
          description="Criação do site da Cibercafé, com estilo de tecnologia, jogos dos anos 80/90"
          testimonial="
            ... tem que escrever "
          client="Gisele"
        />
        <div class="case">
          <img src="wireframe.jpg"/>      
          <h3 class="title">Seu negócio</h3>
          <p class="description">Entre em contato comigo, e vamos desenhar uma solução para o seu negócio juntos? :)</p>
          <a class="cta">Vamos conversar?</a>
        </div>
      </section>
    )
  }

  render() {
    return (
      <main>
        <Hero/>
        <Cases/>
      </main>
    )
  }

}

export default Portfolio;