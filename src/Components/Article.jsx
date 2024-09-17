import ArticleImg1 from '../assets/article-1.jpg'
import ArticleImg2 from '../assets/article-2.jpg'
import ArticleImg3 from '../assets/article-3.jpg'

export default function Article() {
  return (
    <section className="section__container article__container" id="article">
        <h3 className="section__subheader">Insight And Trends</h3>
        <h2 className="section__header">Recent Articles</h2>
        <div className="article__grid">
            <div className="article__card">
                <img src={ArticleImg1} alt="article" />
                <div>
                    <p>Mar 19, 2023</p>
                    <a href="#">Innovation</a>
                </div>
                <h4>Revolutionizing: The Latest in Industrial Innovation</h4>
            </div>
            <div className="article__card">
                <img src={ArticleImg2} alt="article" />
                <div>
                    <p>May 05, 2023</p>
                    <a href="#">Products</a>
                </div>
                <h4>Spotlight: Enhancing Operations with Our Industrial Solutions</h4>
            </div>
            <div className="article__card">
                <img src={ArticleImg3} alt="article" />
                <div>
                    <p>Aug 24, 2023</p>
                    <a href="#">Insights</a>
                </div>
                <h4>Navigating: Expert Perspectives on Industrial Dynamics</h4>
            </div>
        </div>
    </section>
  )
}
