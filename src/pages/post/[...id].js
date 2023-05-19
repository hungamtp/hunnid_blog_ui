import { useRouter } from 'next/router';
import MainLayout from 'components/layouts/main';
import { useGetPostDetail } from 'services/getPostDetail';
import { useContext } from 'react';
import { LanguageData } from '@/utils/languageContext';

const BlogDetail = () => {
  const { language } = useContext(LanguageData);
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetPostDetail({ postId: id, language: language });

  return (
    <div>
      <section className="bg-half-170 d-table w-100" style={{ background: 'url("/asset/images/blog/01.jpg") center center' }}>
        <div className="bg-overlay" />
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="pages-heading">
                <h3 className="title text-white title-dark mb-0">{data && data.title}</h3>
              </div>
            </div>
            {/*end col*/}
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
          </svg>
        </div>
      </div>
      {/* Hero End */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-md-2 d-none d-md-block">
                  <ul className="list-unstyled text-center sticky-bar social-icon mb-0">
                    <li className="mb-3 h6">Share</li>
                    <li>
                      <a href="" className="rounded">
                        <i data-feather="facebook" className="fea icon-sm fea-social" />
                      </a>
                    </li>
                    <li>
                      <a href="" className="rounded">
                        <i data-feather="instagram" className="fea icon-sm fea-social" />
                      </a>
                    </li>
                    <li>
                      <a href="" className="rounded">
                        <i data-feather="twitter" className="fea icon-sm fea-social" />
                      </a>
                    </li>
                    <li>
                      <a href="" className="rounded">
                        <i data-feather="linkedin" className="fea icon-sm fea-social" />
                      </a>
                    </li>
                    {data && data.date.split('-').map(str => <li>{str}</li>)}
                    <liv>{data && data.viewCount}</liv>
                  </ul>
                  {/*end icon*/}
                </div>
                <div className="col-md-10">
                  {data && data.content}
                  {/* <p className="text-muted">
                    This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is
                    said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made'
                    text to sing with the melody.
                  </p>
                  <ul className="list-unstyled d-flex justify-content-between mt-4">
                    <li className="list-inline-item user me-2">
                      <a href="" className="text-muted">
                        <i className="uil uil-user text-dark" /> Calvin Carlo
                      </a>
                    </li>
                    <li className="list-inline-item date text-muted">
                      <i className="uil uil-calendar-alt text-dark" /> 25th June 2021
                    </li>
                  </ul>
                  <img src="/asset/images/blog/bg1.jpg" className="img-fluid rounded-md shadow" alt="" />
                  <h5 className="mt-4">Mornings contain the secret to an extraordinarily successful life</h5>
                  <p className="text-muted">
                    Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned
                    to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader
                    will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces
                    (typography), or the distribution of text on the page (layout or type area).
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
BlogDetail.Layout = MainLayout;
export default BlogDetail;
