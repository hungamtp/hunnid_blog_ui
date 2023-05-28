import Image from 'next/image';
import Link from 'next/link';
const PostSearch = ({ post }) => {
  return (
    <Link href={`/post/${post.id}`} prefetch as={`/post/${post.id}`} style={{ color: 'black' }}>
      <div className="post-search">
        <div className="post-image">
          <Image
            width="70"
            height="70"
            src="/asset/images/blog/01.jpg"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = '/asset/images/blog/01.jpg';
            }}
          ></Image>
        </div>
        <div className="post-search-content">
          <div className="post-serch-title">
            {post && <div dangerouslySetInnerHTML={{ __html: `${post.title}` }}></div>}
            <div> {post.createdDate}</div>
          </div>
          <div className="post-content">{post && <span dangerouslySetInnerHTML={{ __html: `${post.content}` }}></span>}</div>
        </div>
      </div>
    </Link>
  );
};
export default PostSearch;
