import React, { useState } from "react";
import "./Pagination.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
  themeColor: string;
  breakLabel: string;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  themeColor,
  breakLabel,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages: number = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i <= 5 && currentPage <= 7) {
        pageNumbers.push(
          <li key={i} className={i === currentPage ? "active" : "inactive"}>
            <button
              style={{
                backgroundColor: i === currentPage ? themeColor : "",
              }}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </button>
          </li>
        );
      } else if (currentPage >= 6) {
        pageNumbers.push(
          <li key={i} className={i === currentPage ? "active" : "inactive"}>
            <button
              style={{
                backgroundColor: i === currentPage ? themeColor : "",
              }}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </button>
          </li>
        );
      } else if (i === 6) {
        pageNumbers.push(
          <li key={i} className={i === currentPage ? "active" : "inactive"}>
            <button
              style={{
                backgroundColor: i === currentPage ? themeColor : "",
              }}
              onClick={() => handlePageChange(i)}
            >
              {breakLabel ? breakLabel : "..."}
            </button>
          </li>
        );
        break;
      }
    }
    return pageNumbers;
  };

  const handlePreviousClick = () => {
    setCurrentPage((prev) => {
      let pagenumber = prev;
      if (prev > 1) {
        pagenumber = prev - 1;
      }
      onPageChange(pagenumber);
      return pagenumber;
    });
  };

  const handleForwardClick = () => {
    setCurrentPage((prev) => {
      let pagenumber = prev;
      if (prev < totalPages) {
        pagenumber = prev + 1;
      }
      onPageChange(pagenumber);
      return pagenumber;
    });
  };

  return (
    <div className="pagination">
      <ul className="pagination-list">
        <button
          className="arrow-btn"
          onClick={handlePreviousClick}
          disabled={currentPage === 1}
          style={{ backgroundColor: themeColor }}
        >
          <IoIosArrowBack />
        </button>
        {renderPageNumbers()}
        <button
          className="arrow-btn"
          onClick={handleForwardClick}
          disabled={currentPage === totalPages}
          style={{ backgroundColor: themeColor }}
        >
          <IoIosArrowForward />
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
