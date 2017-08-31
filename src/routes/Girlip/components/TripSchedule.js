import React from 'react';
import { connect } from 'react-redux'
import TripItem from './TripItem'

class TripSchedule extends React.Component {

    render() {

        return (
            <div style={{display: 'block'}} className="schedView" id="print_wrap">
                <div className="ue">
                    <span className="bgOhayo" style={{width: '300px', backgroundPosition: '100px 0px'}}></span>
                </div>
                <div className="chuo group" style={{backgroundPosition: '35px 0px'}}>
                    <h3 className="ohy" style={{fontSize: '87.5%', fontWeight: 'normal'}}>
                        <span style={{margin: '0px'}}>9月21日（月）</span>
                    </h3>

                    <TripItem />

                    <h3 className="oys">
                        <span style={{margin: '0px'}}>おかえり</span>
                    </h3>
                </div>
                <div className="shita bg01"></div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {

};


const mapDispatchToProps = (dispatch) => {

    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripSchedule);