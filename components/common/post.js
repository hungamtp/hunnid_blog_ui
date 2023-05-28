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
          <div className="post-tag-section " style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex' }}>
              {post.tags.map(tag => {
                return (
                  <div className="mr-1" style={{ color: '#4f4f50' }} key={tag.id}>
                    #{tag.tag}
                  </div>
                );
              })}
            </div>
          </div>
          <Link href={`/post/${post.id}`} prefetch as={`/post/${post.id}`}>
            <div className="read-more-btn-section">
              <div className="read-more-btn">&lt;read more/&gt;</div>
            </div>
          </Link>
        </div>
        <div className="author">
          <div style={{ display: 'block' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <img src="/asset/icon/user.svg" />
              </div>
              <div style={{ color: 'white', marginTop: '2px' }}>hungnb_</div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <img src="/asset/icon/user.svg" />
            </div>
            <div style={{ color: 'white', marginTop: '2px' }}>{post.viewCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
