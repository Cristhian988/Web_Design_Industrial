import ClientImg1 from '../assets/client-1.jpg'

export default function Client() {
  return (
   <section className="section__container client__container" id="client">
    <h3 className="section__subheader">Testimonial</h3>
    <h2 className="section__header">Client`s Testimonials</h2>
    {/*  Slider main container  */}
<div className="swiper">
  {/* Additional required wrapper */}
  <div className="swiper-wrapper">
    {/*  Slides  */}
    <div className="swiper-slide">
        <div className="client__card">
            <span><i className="ri-double-quotes-l"></i></span>
            <p>
                Choosing Secttre was the best decision for our operations. Their
                range of industrial products is unmatched, and the quality is
                exceptional. The team`s dedication to customer satisfaction sets
                them apart. We`re grateful for a reliable partner in our growth.
            </p>
            <div className="client__details">
                <img src={ClientImg1} alt="client" />
                <div>
                    <h4>Sarah Martinez</h4>
                    <h5>Operations Director</h5>
                </div>
            </div>
        </div>
    </div>
     <div className="swiper-slide">
        <div className="client__card">
            <span><i className="ri-double-quotes-l"></i></span>
            <p>
                Working with Secttre has been a game-changer for our
                manufacturing process. Their innovative solutions have
                significantly improved our efficiency, and the level of support
                we received was outstanding. I highly recommend them to anyone
                seeking top-notch industrial products.
            </p>
            <div className="client__details">
                <img src={ClientImg1} alt="client" />
                <div>
                    <h4>John Anderson</h4>
                    <h5>Manufacturing Manager</h5>
                </div>
            </div>
        </div>
    </div>
    <div className="swiper-slide">
        <div className="client__card">
            <span><i className="ri-double-quotes-l"></i></span>
            <p>
                As a maintenance supervisor, I rely on durable and efficient
                equipment. Secttre delivers on both fronts. The support team is
                responsive, and their products have greatly reduced downtime.
                I`m impressed and satisfied with their commitment to excellence.
            </p>
            <div className="client__details">
                <img src={ClientImg1} alt="client" />
                <div>
                    <h4>Emily Turner</h4>
                    <h5>Maintenance Supervisor</h5>
                </div>
            </div>
        </div>
    </div>
  </div>
  {/*  If we need pagination  */}
  <div className="swiper-pagination"></div>
</div>

   </section> 
  )
}
