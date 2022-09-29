import React from 'react';
import NotFoundPageIcon from 'components/Icons/NotFoundPage/Loadable';

const SearchNotFound = () => (
  <div className="SearchNotFound">
    <div className="SearchNotFound-notFoundIcon">
      <NotFoundPageIcon />
    </div>
    <div className="SearchNotFound-title">
      Không có kết quả.
    </div>
    <div className="SearchNotFound-abstract">
      Không có việc nào được tìm thấy, hãy thứ từ khóa khác nhé!
    </div>
  </div>
);
export default SearchNotFound;
