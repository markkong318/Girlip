import React from 'react';
import { connect } from 'react-redux'
import TripItem from './TripItem'

class TripFooter extends React.Component {

    render() {

        return (
            <div className="bottom">
                <div></div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({

});


const mapDispatchToProps = (dispatch) => {

    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripFooter);