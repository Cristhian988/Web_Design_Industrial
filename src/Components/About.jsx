export default function About() {
  return (
   <section className="section__container about__container" id="about">
    <div className="about__header">
      <div>
        <h3 className="section__subheader">About Us</h3>
        <h2 className="section__header">
           The Cleaver Industrial Business You Can Feel
        </h2>
      </div>
      <p className='section__description'>
         With a relentless commitment to quality, efficiency, and customer
          satisfaction, we pride ourselves on our hands-on approach to
          industrial solutions. Discover the difference where expertise meets a
          tangible touch for unparalleled success.
      </p>
    </div>
    <div className="about__grid">
      <div className="about__card">
        <p>FITTING</p>
        <h4>The arrival of the fitting</h4>
      </div>
      <div className="about__card">
        <p>FACTORY</p>
        <h4>Factory business wonder</h4>
      </div>
      <div className="about__card">
        <p>QUALITY</p>
        <h4>We stand slow in quality</h4>
      </div>
    </div>
   </section> 
  )
}
