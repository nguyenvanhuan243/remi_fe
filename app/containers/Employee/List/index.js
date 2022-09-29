import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from 'components/Header/Loadable';
import SearchBox from 'components/SearchBox/Loadable';
import LoadingList from 'components/Employer/LoadingList/Loadable';
import EmployeeItem from 'components/Employee/Item/Loadable';
import { changeSpaceToPlus } from '../../../utils/usefulFunction';
import UserAPI from '../../../api/backend/users';

const mapStateToProps = state => ({
  messages: state.last().last(),
});

class EmployeePage extends PureComponent {
  constructor() {
    super();
    this.state = {
      limit: 50,
      dataArray: [],
      isLoading: true,
    };
  }

  componentWillMount() {
    UserAPI.getEmployeeList('employees').then(
      response => {
        this.setState({ dataArray: response.data }),
        setTimeout(() => this.setState({ isLoading: false }), 1000);
      }
    );
  }

  renderCard = data => (
    data.map(
      item => (
        <div className="col-md-3" key={item.id}>
          <EmployeeItem
            href={`/employee-detail/${item.id}?${changeSpaceToPlus('employee title')}`}
            fullName={item.full_name || 'Default Name'}
            imageLink="https://static.coindesk.com/wp-content/uploads/2018/03/BTC-chart-1-860x430.jpg"
          />
        </div>
      )
    )
  );

  render() {
    const { messages = {} } = this.props;
    const {
      dataArray,
      isLoading,
    } = this.state;
    return (
      <div className="EmployeePage">
        <Header
          postJobText={messages['header.postJob']}
          findJobText={messages['header.findJob']}
          findPeopleText={messages['header.findPeople']}
          loginText={messages['header.loginText']}
          signupText={messages['header.signupText']}
        />
        <div className="EmployeePage-container">
          <div className="SearchBoxContainer">
            <SearchBox searchButtonText="Tìm người làm" />
          </div>
          { isLoading ? <LoadingList /> : <div className="row">{this.renderCard(dataArray)}</div> }
        </div>
      </div>
    );
  }
}

EmployeePage.propTypes = {
  messages: PropTypes.object,
};

export default connect(mapStateToProps)(EmployeePage);
