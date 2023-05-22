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
        <Link href={`/post/${post.id}`} prefetch as={`/post/${post.id}`}>
          <div className="position-relative">
            <Image src={'/asset/images/blog/01.jpg'} width={120} height={240} className="card-img-top" alt="..." />
            <div className="overlay rounded-top" />
          </div>
        </Link>
        <div className="card-body content">
          <Link href={`/post/${post.id}`}>
            <h5>
              <div className="card-title title text-dark">{post.title}</div>
            </h5>
          </Link>
          <div className="flex justify-end">
            {post.tags.map(tag => {
              return (
                <Chip
                  className="mr-1"
                  key={tag.id}
                  label={tag.tag}
                  id={tag.id}
                  color="success"
                  clickable={true}
                  variant="outlined"
                  size="small"
                />
              );
            })}
          </div>
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
