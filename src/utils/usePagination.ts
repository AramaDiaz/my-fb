// import { useEffect, useState } from 'react';

// const usePagination = (totalPosts, postsPerPage) => {
//   // limit = no of posts per page
//   // skip = no of posts to skip to next page
//   // total = total no of posts

//    // on scroll:
//    // firstPage: limit = postsPerPage = 10, skip 0posts (ex: posts 10) | currentPage: 1
//    // second page: -//-//-// skip = prevSkip + postsPerPage = 0 + 10 = 10 | currentPage: 2
//    // third page: -//-//-// skip = prevSkip + postsPerPage = 10 + 10 = 20 | currentPage: 3 => skip/posts +1

//   const [skip, setSkip] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1)

//   const totalPages = Math.ceil(totalPosts / postsPerPage);

//   const hasMorePosts = (currentPage, postsPerPage, totalPosts) => {
//     //index = post id; totalPosts = posts.length
// const startIndex = (currentPage-1) * postsPerPage + 1;
// return totalPosts === 0 || startIndex < totalPosts
//   }

const hasMorePosts = (
  // currentPage: number,

  limit: number,
  skip: number,
  totalPosts: number
) => {
  // index = post id; totalPosts = posts.length
  const currentPage = skip / limit + 1;
  console.log('current page', currentPage);
  const startIndex = currentPage * limit + 1;
  return startIndex < totalPosts;
};
console.log('test', hasMorePosts(10, 150, 152));

//   useEffect(() => {

//   })

//   return currentPage;

// };

// export default usePagination;

export {};
