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
            title: '御岳山から日の出山へ(仮)ｖ１',
            description: '',
            cover_image: 'images/000102175.jpg',
            month: 10,
            day: 'XX',
            day_of_week: '土',
            schedule: [
                {
                    start_time: '10:00',
                    end_time: '11:00',
                    icon: 'train',

                    content:[
                        {
                            type: 'unit',
                            title: '新宿駅→青梅駅→御嶽駅',
                        },
                    ],

                    comment: [
                    ]
                },
                {
                    start_time: '10:00',
                    end_time: '11:00',
                    icon: 'foot',

                    content:[
                        {
                            type: 'unit',
                            title: '御嶽駅→ケーブル下バス停',
                        },
                        {
                            type: 'spot',
                            image: 'https://www.cathaypacific.com/content/dam/destinations/tokyo/kamakura/cityguide-gallery/tokyo-kamakura_cherry_blossoms_920x500.jpg',
                            title: '7-11',
                            address: '',
                            information: '昼ご飯を買いましょ'
                        },
                    ],

                    comment: [
                        {
                        },
                    ]
                },
                {
                    start_time: '10:00',
                    end_time: '11:00',
                    icon: 'train',

                    content:[
                        {
                            type: 'unit',
                            title: '滝本駅→御岳山駅',
                        },
                        {
                            type: 'spot',
                            image: 'http://www.honda.co.jp/dog/travel/data/mitaketozan/image/00.jpg',
                            title: '御岳山ケーブルカー',
                            address: '',
                            information: '片道590円、往復割引あり<br />' +
                            '時刻表は<a href="https://www.mitaketozan.co.jp/timetable">ここ</a>'
                        },　
                    ],

                    comment: [
                    ]
                },
                {
                    start_time: '10:00',
                    end_time: '11:00',
                    icon: 'foot',

                    content:[
                        {
                            type: 'unit',
                            title: '御岳山駅→日の出山',
                        },
                    ],

                    comment: [
                        {
                        },
                    ]
                },
                {
                    start_time: '10:00',
                    end_time: '11:00',
                    icon: 'foot',

                    content:[
                        {
                            type: 'unit',
                            title: '西武池袋線急行で池袋駅→元加治駅',
                        },
                        {
                            type: 'spot',
                            image: 'https://www.cathaypacific.com/content/dam/destinations/tokyo/kamakura/cityguide-gallery/tokyo-kamakura_cherry_blossoms_920x500.jpg',
                            title: '子どもの森公園',
                            address: '埼玉県飯能市大字阿須893-1',
                            information: '電話番号 ： 042-972-7711'
                        },
                    ],

                    comment: [
                        {
                            user_name: 'mark',
                            description: 'test1<br />test2' +
                            '<table><tr><td>aaaaa</td><td>bbbbbb</td></tr></table>',
                        },
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
