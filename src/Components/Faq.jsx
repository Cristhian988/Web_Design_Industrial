import FaqImage from "../assets/faq.jpg";
import { useState } from "react";

const datos = [
  {
    key: "1",
    question: "What types of industrial products do you offer?",
    answer:
      "We specialize in providing a diverse range of industrial products, including machinery, equipment, and supplies tailored to meet the unique needs of various sectors.",
    open: true,
  },
  {
    key: "2",
    question: "How can I place an order for your products?",
    answer:
      "Placing an order is simple and convenient. Navigate to the product page, select the desired quantity, and click `Add to Cart`. Follow the intuitive checkout process, providing necessary details.",
    open: false,
  },
  {
    key: "3",
    question: "Are there any warranties on your products?",
    answer:
      "Our commitment to customer satisfaction means that if you encounter any issues, our support team is ready to assist and find a swift resolution.",
    open: false,
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState (true);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? "active" : index);
  };

  return (
    <section className="section__container faq__container" id="faq">
      <div className="faq__image">
        <img src={FaqImage} alt="faq" />
      </div>
      <div className="faq__content">
        <h3 className="section__subheader">Ask By Client</h3>
        <h2 className="section__header">Frequently Asked Questions</h2>
        <p className="section__description">
          A comprehensive resource designed to answer your most common queries
          and provide valuable insights into our products, services, and the
          industrial landscape.
        </p>
        <div className="faq__grid">
          <div className="faq__card">
            {datos.map((item, index) => (
              <div key={datos.key}>
                <div className="faq__header" onClick={() => handleClick(index)}>
                  <h4>{item.question}</h4>
                  <span >
                    <i className="ri-arrow-down-s-line"></i>
                  </span>
                </div>
                  {index === activeIndex && <div>{item.answer}</div>}
              </div>
            ))}
          </div>
        </div>
        {/* <div className={`faq__card ${faq && 'active'}`}>
            <div className="faq__header">
              <h4>What types of industrial products do you offer?</h4>
              <span onClick={handleShowFaq} >
                <i className="ri-arrow-down-s-line"></i>
              </span>
            </div>
            <div className="faq__description">
              We specialize in providing a diverse range of industrial products,
              including machinery, equipment, and supplies tailored to meet the
              unique needs of various sectors.
            </div>
          </div>
          <div className={`faq__card ${faq && 'active'}`}>
            <div className="faq__header">
              <h4>How can I place an order for your products?</h4>
              <span onClick={handleShowFaq}>
                <i className="ri-arrow-down-s-line"></i>
              </span>
            </div>
            <div className="faq__description">
              Placing an order is simple and convenient. Navigate to the product
              page, select the desired quantity, and click `Add to Cart`. Follow
              the intuitive checkout process, providing necessary details.
            </div>
          </div>
          <div className={`faq__card ${faq && 'active'}`}>
            <div className="faq__header">
              <h4>Are there any warranties on your products?</h4>
              <span onClick={handleShowFaq}>
                <i className="ri-arrow-down-s-line"></i>
              </span>
            </div>
            <div className="faq__description">
              Our commitment to customer satisfaction means that if you
              encounter any issues, our support team is ready to assist and find
              a swift resolution.
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}
