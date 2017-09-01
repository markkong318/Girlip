import React from 'react';
import { connect } from 'react-redux'

class TripHeader extends React.Component {

    render() {
        const {title, description, month, day, day_of_week} = this.props;

        return (
            <div className="tabiGaiyo" style={{height: '315px', borderBottom: '10px solid rgb(204, 204, 204)'}}>
                <img src="images/000102175.jpg" alt="" />
                <div className="gWrp02">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <dl className="tabiJikan" style={{bottom: '25px'}}>
                    <dt>旅の時間</dt>
                    <dd>
                        {month}/{day}
                        <small>（{day_of_week}）</small>
                    </dd>
                </dl>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return state;
};


const mapDispatchToProps = (dispatch) => {

    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripHeader);