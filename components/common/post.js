import Link from 'next/link';
import Image from 'next/image';
const Post = ({ post, isLoading }) => {
  return (
    <Link href={`/post/${post.id}`} className="col-lg-4 col-md-6 mb-4 pb-2">
      <div className="card blog rounded border-0 shadow overflow-hidden">
        <div className="position-relative">
          <Image src={'/asset/images/blog/01.jpg'} width={120} height={120} className="card-img-top" alt="..." />
          <div className="overlay rounded-top" />
        </div>
        <div className="card-body content">
          <h5>
            <div className="card-title title text-dark">{post.title}</div>
          </h5>
          <div className="post-meta d-flex justify-content-between mt-3">
            <ul className="list-unstyled mb-0">
              <li className="list-inline-item">
                <div href="" className="text-muted eye">
                  <i className="uil uil-eye me-1" />
                  {post.content}
                </div>
              </li>
            </ul>
            <Link href={`post/${post.id}`} className="text-muted readmore animate-waving-hand">
              Read More <i className="uil uil-angle-right-b align-middle" />
            </Link>
          </div>
        </div>
        <div className="author">
          <small className="text-light eye d-block">
            <i className="uil uil-eye" /> {post.viewCount}
          </small>
          <small className="text-light user d-block">
            <i className="uil uil-user" /> hungnb_
          </small>
          <small className="text-light date">
            <i className="uil uil-calendar-alt" /> {post.createdDate.toString().split('T')[0]}
          </small>
        </div>
      </div>
    </Link>
  );
};
export default Post;
