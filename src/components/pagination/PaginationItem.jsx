import React from "react";
import "./Pagination.scss";

export default function PaginationItem({ page, currentPage, onPageChange }) {
  let activeStyle =
    page === currentPage ? "pagination-btn active" : "pagination-btn";
  return (
    <li className="pagination-item" key={page}>
      <button className={activeStyle} onClick={() => onPageChange(page)}>
        {page}
      </button>
    </li>
  );
}
