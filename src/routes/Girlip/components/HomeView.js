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
            description: 'パワースポットとしても知られる武蔵御嶽神社へ',
            cover_image: 'images/000102175.jpg',
            month: '11',
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
                            image: 'https://tblg.k-img.com/restaurant/images/Rvw/39203/640x640_rect_39203613.jpg',
                            title: '7-11',
                            address: '御嶽駅から約３分で歩く',
                            information: '山頂まで売店があまりないので<br />' +
                            '先にここで買いましょ'
                        },
                    ],

                    comment: [
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
                            information: '片道590円、往復割引あり' +
                            '<div>時刻表は<a href="https://www.mitaketozan.co.jp/timetable" target="_blank">ここ<i class="fa">&#xf08e;</i></a></div>'
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
                        {
                            type: 'spot',
                            image: 'http://blogimg.goo.ne.jp/user_image/74/0e/a1041635a12f1c974462b34ca5c46501.jpg',
                            title: '日の出山',
                            address: '御岳山駅から約９０分',
                            information: '高低差約７０m'
                        },
                        {
                            type: 'spot',
                            image: 'http://jin-power.com/gazou/todoufuken/tokyo/musashimitake/IMG_1371_1.JPG',
                            title: '日の出山',
                            address: '御岳山駅から約９０分',
                            information: '高低差約７０m'
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
                            title: '帰路＆食事（日の出山→御岳山駅→御嶽駅→新宿駅）',
                        },
                        {
                            type: 'spot',
                            image: 'http://tokyosanpopo.com/wp-content/uploads/IMG_4464.jpg',
                            title: 'イケア- 立川',
                            address: '立川駅から徒歩１３分',
                            information: '公式HPは<a href="http://www.ikea.com/jp/ja/store/tachikawa">ここ<i class="fa">&#xf08e;</i></a>'
                        },
                        {
                            type: 'spot',
                            image: 'http://chikabu20.up.n.seesaa.net/chikabu20/image/10111649.jpg?d=a1',
                            title: '農家の台所- 立川',
                            address: '立川駅の隣に高島屋９階',
                            information: '野菜料理と卵かけご飯がすごくうまい！<br />' +
                            '値段は１８００台んです<br />' +
                            'くるなびは<a href="https://r.gnavi.co.jp/e544905/" target="_blank">ここ<i class="fa">&#xf08e;</i></a>'
                        },
                    ],

                    comment: [
                        // {
                        //     user_name: 'mark',
                        //     description: 'test1<br />test2' +
                        //     '<table><tr><td>aaaaa</td><td>bbbbbb</td></tr></table>',
                        // },
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
