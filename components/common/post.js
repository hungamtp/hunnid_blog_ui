import Link from 'next/link';
import Image from 'next/image';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Chip } from '@mui/material';
const Post = ({ post, isLoading, isFetching }) => {
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
            <Chip label="tech" color="success" variant="outlined" size="small" />
            <Chip label="latest" color="success" variant="outlined" size="small" />
          </div>
        </div>
        <div className="author">
          <div className="flex">
            <small>
              <img src="/asset/icon/user.svg" width={14} />
            </small>
            <small className="text-light user d-block">
              <i className="uil uil-user" /> hungnb_
            </small>
          </div>
          <div className="flex">
            <small>
              <img src="/asset/icon/user.svg" width={14} />
            </small>
            <small className="text-light user d-block">
              <i className="uil uil-user" /> {post.viewCount}
            </small>
          </div>
          <div className="flex">
            <small>
              <RemoveRedEyeOutlinedIcon />
            </small>
            <small className="text-light user d-block">
              <i className="uil uil-user" /> {post.createdDate.toString().split('T')[0]}
            </small>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Post;
