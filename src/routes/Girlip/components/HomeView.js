import React from 'react'
import { connect } from 'react-redux'
import PageHeader from './PageHeader'
import TripHeader from './TripHeader'
import TripSchedule from './TripSchedule'
import TripFooter from './TripFooter'
import PageFooter from './PageFooter'


class HomeView extends React.Component {

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


    const default_state = {
        trip: {
            title: '子どもの森公園から加治丘陵へ(仮)ｖ２',
            description: 'ムーミン屋敷で楽しく遊ぼう！２０１５年シルバーウィーク限定！',
            cover_image: 'images/000102175.jpg',
            month: 9,
            day: 21,
            day_of_week: '月',
            schedule: [
                {
                    start_time: '10:00',
                    end_time: '11:00',
                    title: '西武池袋線急行で池袋駅→元加治駅',
                    icon: 'train',

                    comment: [
                        {
                            user_name: 'mark',
                            description: 'test1<br />test2',
                        }
                    ]
                },
                {
                    start_time: '10:00',
                    end_time: '11:00',
                    title: '西武池袋線急行で池袋駅→元加治駅',
                    icon: 'foot',

                    comment: [
                        {
                            user_name: 'mark',
                            description: 'test1<br />test2' +
                            '<table><tr><td>aaaaa</td><td>bbbbbb</td></tr></table>',
                        }
                    ]
                },
            ]

        }
    };

    return default_state;
};


const mapDispatchToProps = (dispatch) => {

    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
