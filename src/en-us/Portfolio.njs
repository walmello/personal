import Nullstack from 'nullstack';

class Portfolio extends Nullstack {
  renderHero(){
    return (
      <section id="hero">
        <div>
          <p class="tx-2">👋 Hello, my name is</p>
          <h3 class="tx-1">Walter Melo</h3>
          <br/>
          <h1 class="tx-1">I'm a <strong>Web Designer</strong> and <strong>Front End Developer</strong><br/>
          <span class="tx-2">In a career transition to <strong>UX Design</strong></span></h1>
          <br/>
          <h2 class="tx-3">* I sing, draw and play tabletop RPG on free time</h2>
          </div>
        <div>
          <img src="eu.png" alt="That's me drawed in Figma"  width="408px" height="370px" />
        </div>
      </section>
    )
  }

  renderCase({slug, img, tags, title, description, testimonial, client}){
    return(
      <div class="case">
        <div class="img">
          <img src={"cases/"+img} alt={title+"'s screenshot"}  width="320px" height="200px"/>   
        </div>   
        <ul class="tags">
          {tags.map(tag => <li>{tag}</li>)}
        </ul>
        <h3 class="title">{title}</h3>
        <p class="description">{description}</p>
        <a href={"case/"+slug}>Read Case</a>
        
        <p class="testimonial">"{testimonial}."</p>
        <p class="client">{client}</p>
      </div>
    )
  }

  renderCases(){
    return(
      <section id="portfolio">
        <Case 
          slug="b3-consultoria"
          img="b3.png"
          title="b3 consultoria"
          tags={['wordpress', 'Graphic Design', 'Javascript', 'Figma', 'other']}
          description="Redesign and Development from the old site"
          testimonial="
            Dedicated and committed professional. 
            We had the satisfaction of carrying out a job 
            with Walter in which he was above expectations. 
            We encountered some challenges along the way, 
            and he went to great lengths to achieve the final result
            satisfactorily"
          client="Anderson Simon"
        />
        <Case 
          img="cibercafe.png"
          title="Cibercafé"
          tags={['wordpress', 'graphic design']}
          description="Creation of website inspired on 80/90's games"
          testimonial="
            ... tem que escrever "
          client="Gisele"
        />
        <div class="case">
          <img src="wireframe.jpg" alt="image of some sketches" width="320px" height="200px"/>      
          <h3 class="title">Your Bussiness</h3>
          <p class="description">Call me, and let's make a solution for your bussiness together? :)</p>
          <a href="#" class="cta">Let's talk?</a>
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