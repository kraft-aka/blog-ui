import React from "react";
import Range from "../../utils/Range";
import PaginationItem from "./PaginationItem";
import './Pagination.scss'

export default function Pagination({
  currentPage,
  currentBlogsLimit,
  blogsNumber,
  onPageChange,
}) {
  //create pages count
  const pagesCount = Math.ceil(blogsNumber / currentBlogsLimit);
  const pages = Range(1, pagesCount);

  const paginationArray = pages.map((page) => {
    return (
      <PaginationItem
        page={page}
        currentPage={currentPage}
        onPageChange={onPageChange}
        key={page}
      />
    );
  });

  return (
    <ul className="pagination-container">
      {paginationArray}
    </ul>);
}
