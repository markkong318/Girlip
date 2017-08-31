import React from 'react';
import { connect } from 'react-redux'

class PageFooter extends React.Component {

    render() {

        return (
            <div className="contentsFooter">
                <div className="footer">

                    <div id="pos-s"></div>
                    <address>Copyright (C) 2013 Yahoo Japan Corporation. All Rights Reserved.</address>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PageFooter);