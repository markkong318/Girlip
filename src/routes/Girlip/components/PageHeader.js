import React from 'react';
import { connect } from 'react-redux'

class PageHeader extends React.Component {

    render() {

        return (
            <div className="header">
                <h1>
                    <a href="https://girlip.travel.yahoo.co.jp/about/">girlip 思い出の旅行は大切なしおりと</a>
                </h1>
                <p>
                    <a className="logoYt" href="https://travel.yahoo.co.jp/">Yahoo! JAPAN トラベル</a>
                </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);