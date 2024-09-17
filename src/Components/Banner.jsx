
export default function Banner() {
  return (
    <section className="banner" id="contact">
      <div className="section__container banner__container">
        <div className="banner__content">
          <h3 className="section__subheader">Join Us</h3>
          <h2 className="section__header">Stay Updated!</h2>
          <p className="section__description">
            From technological innovations to market updates, our curated
            content keeps you informed.
          </p>
        </div>
        <div className="banner__form">
          <form action="/">
            <input type="text" placeholder="Enter Your Email" />
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </section> 
  )
}
