import React from 'react';

class TripHeader extends React.Component {

    render() {

        return (
            <div className="tabiGaiyo" style="height: 315px; border-bottom: 10px solid rgb(204, 204, 204);">
                <img src="images/000102175.jpg" alt="" />
                    <div className="gWrp02">
                        <h2>子どもの森公園から加治丘陵へ(仮)ｖ２</h2>
                        <p>ムーミン屋敷で楽しく遊ぼう！２０１５年シルバーウィーク限定！</p></div>
                    <dl class="tabiJikan" style="bottom: 25px;">
                        <dt>旅の時間</dt>
                        <dd>
                            9/21
                            <small>（月）</small>
                        </dd>
                    </dl>
            </div>
        );
    }
}