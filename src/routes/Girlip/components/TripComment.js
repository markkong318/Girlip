import React from 'react';
import { connect } from 'react-redux'

class TripComment extends React.Component {

    render() {
        const {user_name, description} = this.props;

        return (
            <div className="print_comunit" style={{position: 'relative', fontSize: '0.63em', minHeight: '70px'}}>
                <img src="images/img_tabitomonoimage_03.png" style={{
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    borderRadius: '100px',
                    width: '54px',
                    height: '54px'
                }}/>
                <div className="print_intext" style={{
                    paddingLeft: '70px',
                    color: 'rgb(68, 68, 68)',
                    lineHeight: '1.25em',
                    marginBottom: '20px'
                }}>
                    <span className="print_comname" style={{color: 'rgb(118, 89, 70)'}}>{user_name}</span>
                    <br/>
                    {/* TODO: to markdown input */}
                    <div dangerouslySetInnerHTML={{__html: description}} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    // return state;
};


const mapDispatchToProps = (dispatch) => {

    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripComment);