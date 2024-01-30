/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';

function PageNav({ end, rendering, movi }) {
  const [page, setPage] = useState(end / 16)
  useEffect(() => {
    rendering(page)
  }, [page])
  let active = end / 16;
  let items = [];
  for (let number = 1; number <= Math.ceil(movi.length / 16); number++) {
    if (number === active) {
      items.push(
        <Pagination.Item key={number} active={number === active}
          onClick={(e) => setPage(e.target.innerHTML)} disabled>
          {number}
        </Pagination.Item>,
      );
    } else {
      items.push(
        <Pagination.Item key={number} onClick={(e) => setPage(e.target.innerHTML)}>
          {number}
        </Pagination.Item>,
      );
    }
  }
  return (
    <div className="d-flex justify-content-center mt-0 mb-5">
      <Pagination size="md" onClick={() => window.scrollTo(0, 0)}>
        {items}
      </Pagination>
    </div>
  );
}

export default PageNav;