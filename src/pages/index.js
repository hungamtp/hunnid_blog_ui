import MainLayout from 'components/layouts/main';
import Link from 'next/link';
import Post from 'components/common/post';
import { useState } from 'react';
import { useGetPosts } from 'services/getPost';

const Home = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);
  const [languageId, setLanguageId] = useState('26519154-b139-11ed-9976-588fc631a4a5');
  const [totalPages, setTotalPages] = useState(0);
  const onChangePage = e => {
    e.preventDefault();
    console.log(e);
  };

  const onNextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const onPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const { data, isLoading, isFetching } = useGetPosts({ page: page, size: size, languageId: languageId });
  const renderPagination = () => {
    if (!isLoading) {
      var paginationList = [];
      if (data.totalPages > 10) {
        var maxPage = data.totalPages - page > 5 ? page + 5 : page + (10 - (data.totalPages - page));
        for (var i = data.totalPages - page > 5 ? page - 5 : page - (10 - (data.totalPages - page)); i < maxPage; i++) {
          paginationList.push(
            <>
              <li aria-current="page" onClick={e => onChangePage(e, i)}>
                <div
                  class="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#!"
                >
                  {i + 1}
                </div>
              </li>
            </>
          );
        }
      } else {
        for (var i = 1; i <= data.totalPages; i++) {
          paginationList.push(
            <>
              <li aria-current="page" onClick={e => onChangePage(e)} value={i}>
                <div
                  class="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  href="#!"
                >
                  {i}
                </div>
              </li>
            </>
          );
        }
      }
    }
    return paginationList;
  };

  return (
    <>
      <div>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
            </svg>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="row">
              {data &&
                data.data.map(post => {
                  return <Post post={post} key={post.id} isLoading={isLoading} />;
                })}

              {/* PAGINATION START */}
              <div className="col-12">
                <div class="flex justify-center">
                  <nav aria-label="Page navigation example">
                    <ul class="list-style-none flex">
                      <li>
                        <a class="pointer-events-none relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400">
                          Previous
                        </a>
                      </li>
                      {renderPagination()}
                      <li>
                        <a
                          class="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                          href="#!"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Home.Layout = MainLayout;
export default Home;
