import Nullstack from 'nullstack';

class Portfolio extends Nullstack {
  renderHero(){
    return (
      <section id="hero">
        <div>
          <h4 class="tx-2">👋 Hello, my name is</h4>
          <h3 class="tx-1">Walter Melo</h3>
          <br/>
          <h1 class="tx-1">I'm a <strong>Web Designer</strong> and <strong>Front End Developer</strong></h1>
          <h2 class="tx-2">In a career transition to <strong>UX Design</strong></h2>
          <br/>
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
        <div>
          <h3 class="title">{title}</h3>
          <p class="description">{description}</p>
          <a href={"case/"+slug}>Read Case</a>
          
          <p class="testimonial">"{testimonial}."</p>
          <p class="client">{client}</p>
        </div>
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
          tags={['Wordpress', 'Javascript', 'Performance Optimization', 'PHP Update']}
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
        <div class="case">
          <img src="wireframe.jpg" alt="image of some sketches" width="320px" height="200px"/>      
          <ul class="tags"></ul>
          <div>
            <h3 class="title">Your Bussiness</h3>
            <p class="description">Call me, and let's make a solution for your bussiness together? :)</p>
            <a href="https://www.linkedin.com/in/walter-uxdev/?locale=en_US" class="cta">Let's talk?</a>
          </div>
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