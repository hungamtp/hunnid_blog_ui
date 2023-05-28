import Link from 'next/link';
import Image from 'next/image';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Chip } from '@mui/material';
import { useContext } from 'react';
import { TagsData } from '@/utils/tags';
const Post = ({ post }) => {
  const { tags, setTags } = useContext(TagsData);
  const addTagFilter = tag => {};
  return (
    <div className="col-lg-4 col-md-6 mb-4 pb-2">
      <div className="card blog rounded border-0 shadow overflow-hidden">
        <div className="position-relative">
          <Image src={'/asset/images/blog/01.jpg'} width={120} height={240} className="card-img-top" alt="..." />
          <div className="overlay rounded-top" />
        </div>
        <div className="card-body content">
          <h5>
            <div className="card-title title text-dark">{post.title}</div>
          </h5>
          <div className="post-tag-section">
            <div style={{ display: 'flex' }}>
              {post.tags.map(tag => {
                return (
                  <div className="mr-1 post-tag" key={tag.id}>
                    #{tag.tag}
                  </div>
                );
              })}
            </div>
          </div>
          <Link href={`/post/${post.id}`} prefetch as={`/post/${post.id}`}>
            <div className="read-more-btn-section">
              <div className="read-more-btn">
                <u>read more</u>
              </div>
            </div>
          </Link>
        </div>
        <div className="author-section author">
          <svg data-name="Layer 1" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.89">
            <title>date</title>
            <path
              fill="white"
              d="M81.61,4.73C81.61,2.12,84.19,0,87.38,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM66.11,105.66c-.8,0-.8-10.1,0-10.1H81.9c.8,0,.8,10.1,0,10.1ZM15.85,68.94c-.8,0-.8-10.1,0-10.1H31.64c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H56.77c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H81.9c.8,0,.8,10.1,0,10.1Zm25.14-10.1H107c.8,0,.8,10.1,0,10.1H91.25c-.8,0-.8-10.1,0-10.1ZM15.85,87.3c-.8,0-.8-10.1,0-10.1H31.64c.8,0,.8,10.1,0,10.1ZM41,87.3c-.8,0-.8-10.1,0-10.1H56.77c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H81.9c.8,0,.8,10.1,0,10.1Zm25.14,0c-.8,0-.8-10.1,0-10.1H107c.8,0,.8,10.1,0,10.1Zm-75.4,18.36c-.8,0-.8-10.1,0-10.1H31.64c.8,0,.8,10.1,0,10.1Zm25.13,0c-.8,0-.8-10.1,0-10.1H56.77c.8,0,.8,10.1,0,10.1ZM29.61,4.73C29.61,2.12,32.19,0,35.38,0s5.77,2.12,5.77,4.73V25.45c0,2.61-2.58,4.73-5.77,4.73s-5.77-2.12-5.77-4.73V4.73ZM6.4,43.47H116.47v-22a3,3,0,0,0-.86-2.07,2.92,2.92,0,0,0-2.07-.86H103a3.2,3.2,0,0,1,0-6.4h10.55a9.36,9.36,0,0,1,9.33,9.33v92.09a9.36,9.36,0,0,1-9.33,9.33H9.33A9.36,9.36,0,0,1,0,113.55V21.47a9.36,9.36,0,0,1,9.33-9.33H20.6a3.2,3.2,0,1,1,0,6.4H9.33a3,3,0,0,0-2.07.86,2.92,2.92,0,0,0-.86,2.07v22Zm110.08,6.41H6.4v63.67a3,3,0,0,0,.86,2.07,2.92,2.92,0,0,0,2.07.86H113.55a3,3,0,0,0,2.07-.86,2.92,2.92,0,0,0,.86-2.07V49.88ZM50.43,18.54a3.2,3.2,0,0,1,0-6.4H71.92a3.2,3.2,0,1,1,0,6.4Z"
            />
          </svg>
          <div style={{ color: 'white', marginTop: '2px', fontWeight: '100', marginLeft: '5px', fontSize: 'small' }}>
            {post.createdDate}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
