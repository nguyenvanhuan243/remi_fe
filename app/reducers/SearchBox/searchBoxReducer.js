import { FILTER_JOB_SYSTEM } from 'constants/SearchBox/index';

const filterJobSystem = (state = [], action) => {
  switch (action.type) {
    case FILTER_JOB_SYSTEM:
      return 'FILTER_JOB_SYSTEM';
    default:
      return state;
  }
};

export {
  filterJobSystem,
};
