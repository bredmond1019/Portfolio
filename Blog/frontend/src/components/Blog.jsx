import puppy from "./../images/puppy.jpeg";
import blue_green from "./../images/blog_page/blue_green.avif";
import mountain3 from "./../images/blog_page/mountain3.avif";
import purple_triangle from "./../images/blog_page/purple_triangle.avif";

function Blog() {
  return (
    <div className="blog-page-wrapper">
      <div className="blog-main-page">
        <div className="blog-main-title-wrapper">
          <h1 className="blog-main-title">Welcome to my blog page</h1>
          <p className="blog-main-description">
            As I write more blogs, I will continue to add them here
          </p>
        </div>
        <div className="blog-articles-wrapper">
          <div className="blog-articles-info-wrapper">
            <div className="blog-article-box-wrapper">
              <div className="blog-article-image-wrapper">
                <img src={mountain3} alt="" className="blog-article-image" />
              </div>
              <div className="blog-info-wrapper">
                <h1 className="blog-article-title">Blog Article 1</h1>
                <p className="blog-article-description">
                  My blog article is about this and that. Also this. Mostly
                  that.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  tenetur eveniet modi nobis non sed nisi dicta voluptas
                  accusamus accusantium sunt laboriosam, similique adipisci
                  sequi quidem dignissimos mollitia aut temporibus!
                </p>
              </div>
            </div>

            <div className="blog-article-box-wrapper">
              <div className="blog-article-image-wrapper">
                <img src={blue_green} alt="" className="blog-article-image" />
              </div>
              <div className="blog-info-wrapper">
                <h1 className="blog-article-title">Blog Article 2</h1>
                <p className="blog-article-description">
                  My blog article is about this and that. Also this. Mostly
                  that.
                </p>
              </div>
            </div>

            <div className="blog-article-box-wrapper">
              <div className="blog-article-image-wrapper">
                <img
                  src={purple_triangle}
                  alt=""
                  className="blog-article-image"
                />
              </div>
              <div className="blog-info-wrapper">
                <h1 className="blog-article-title">Blog Article 3</h1>
                <p className="blog-article-description">
                  My blog article is about this and that. Also this. Mostly
                  that.
                </p>
              </div>
            </div>
          </div>
          <div className="side-panel"></div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
