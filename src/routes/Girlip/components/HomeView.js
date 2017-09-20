import React from 'react'
import { connect } from 'react-redux'

import PageHeader from './PageHeader'
import TripHeader from './TripHeader'
import TripSchedule from './TripSchedule'
import TripFooter from './TripFooter'
import PageFooter from './PageFooter'

import { fetchPostsWithRedux } from '../../../utils/fetch'


class HomeView extends React.Component {

    componentDidMount(){
        const location = this.props.location.query.location;

        if (location) {
            this.props.fetchPostsWithRedux(`trip/${location}.json`);
        }
    }

    render() {
        const { trip } = this.props;

        return (
            <div>
                <PageHeader />
                <TripHeader {...trip} />
                <TripSchedule {...trip} />
                <TripFooter {...trip} />
                <PageFooter />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    /*
    icon: train, gourmet, foot, heart, starts, toho, bus, plane,ferry,car,bicycle
     */

    return {
        trip: state.girlip.trip || {},
    }
};


const mapDispatchToProps = (dispatch) => {

    return {
        fetchPostsWithRedux: dispatch(fetchPostsWithRedux),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
