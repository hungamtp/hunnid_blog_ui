const Post = post => {
  return (
    <div className="col-lg-4 col-md-6 mb-4 pb-2">
      <div className="card blog rounded border-0 shadow overflow-hidden">
        <div className="position-relative">
          <img src="asset/images/blog/01.jpg" className="card-img-top" alt="..." />
          <div className="overlay rounded-top" />
        </div>
        <div className="card-body content">
          <h5>
            <Link href="/post/acb" className="card-title title text-dark">
              Design your apps in your own way
            </Link>
          </h5>
          <div className="post-meta d-flex justify-content-between mt-3">
            <ul className="list-unstyled mb-0">
              <li className="list-inline-item me-2 mb-0">
                <a href="" className="text-muted like">
                  <i className="uil uil-heart me-1" />
                  33
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="text-muted comments">
                  <i className="uil uil-comment me-1" />
                  08
                </a>
              </li>
            </ul>
            <a href="blog-detail.html" className="text-muted readmore animate-waving-hand">
              Read More <i className="uil uil-angle-right-b align-middle" />
            </a>
          </div>
        </div>
        <div className="author">
          <small className="text-light user d-block">
            <i className="uil uil-user" /> Calvin Carlo
          </small>
          <small className="text-light date">
            <i className="uil uil-calendar-alt" /> 25th June 2021
          </small>
        </div>
      </div>
    </div>
  );
};
export default Post;
