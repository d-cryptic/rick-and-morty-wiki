import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ setPageNumber, pageNumber, info }) => {
  // let next = () => {
  //   setPageNumber((x) => x + 1);
  // };

  // let prev = () => {
  //   if (pageNumber === 1) return;
  //   setPageNumber((x) => x - 1);
  // };

  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-primary"
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      pageCount={info?.pages}
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
    />
  );
};

export default Pagination;
