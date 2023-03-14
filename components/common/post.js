import Link from 'next/link';
import Image from 'next/image';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Chip } from '@mui/material';
const Post = ({ post }) => {
  return (
    <Link href={`/post/${post.id}`} className="col-lg-4 col-md-6 mb-4 pb-2">
      <div className="card blog rounded border-0 shadow overflow-hidden">
        <div className="position-relative">
          <Image src={'/asset/images/blog/01.jpg'} width={120} height={240} className="card-img-top" alt="..." />
          <div className="overlay rounded-top" />
        </div>
        <div className="card-body content">
          <h5>
            <div className="card-title title text-dark">{post.title}</div>
          </h5>

          <div className="flex justify-end">
            {post.tags.map(tag => {
              return <Chip label={tag.tag} id={tag.id} color="success" variant="outlined" size="small" />;
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
    </Link>
  );
};
export default Post;
