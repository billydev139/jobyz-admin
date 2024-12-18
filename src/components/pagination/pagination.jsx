import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from "react";
// import Icons from "../assets/icons";

// eslint-disable-next-line react/prop-types
const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
    //  navigate(`?page=${page}`)
  };

  // Function to generate page numbers for display
  const generatePageNumbers = () => {
    const visiblePages = 8; // Total visible page numbers
    const delta = 2; // Number of pages to display before and after current page
    const pages = [];

    if (totalPages <= visiblePages) {
      // If total pages are less than or equal to visible pages, display all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // If total pages are more than visible pages
      let leftBoundary = Math.min(
        Math.max(1, currentPage - delta),
        totalPages - visiblePages + 1
      );
      let rightBoundary = Math.min(currentPage + delta, visiblePages);

      // Display left ellipsis if necessary
      if (leftBoundary > 1) {
        pages.push(1);
        if (leftBoundary > 2) {
          pages.push("...");
        }
      }

      // Display visible pages
      for (let i = leftBoundary; i <= rightBoundary; i++) {
        pages.push(i);
      }

      // Display right ellipsis if necessary
      if (rightBoundary < totalPages) {
        if (rightBoundary < totalPages - 1) {
          pages.push("...");
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center   px-4 py-3  ">
      <div className="">
        <div>
          <nav
            className="isolate inline-flex -space-x-px gap-4"
            aria-label="Pagination"
          >
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative  shadow-xl rounded-full w-10 h-10 flex items-center justify-center  hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
            >
              <FaChevronLeft
                className="h-4 w-4 text-black "
                aria-hidden="true"
              />
            </button>

            {generatePageNumbers().map((pageNum, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(pageNum)}
                disabled={typeof pageNum === "string"}
                className={`${
                  currentPage === pageNum
                    ? "bg-[#1967D2] text-white"
                    : "bg-white text-black"
                } shadow-xl rounded-full w-10 h-10 flex items-center justify-center text-sm font-semibold hover:bg-secondaryGray hover:text-black focus:z-20 focus:outline-offset-0`}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="relative shadow-xl rounded-full w-10 h-10 flex items-center justify-center  hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
            >
              <FaChevronRight
                className="h-4 w-4 rounded-full   text-primaryBlack"
                aria-hidden="true"
              />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
