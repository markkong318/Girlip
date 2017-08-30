import React from 'react';

class TripHeader extends React.Component {

    render() {

        return (
            <div class="print_unit" style="width: 800px; padding-left: 100px; text-align: left; margin: 25px 0px 50px;">
                <div class="print_itwrap" style="position: relative; font-size: 1.38em; color: rgb(118, 89, 70); padding-left: 50px;">10:00
                    <span class="leader" style="padding: 0px 5px;">・・・</span>
                    11:00
                    <span class="train type03 print_icon" style="position: absolute; top: -12px; left: 0px;">
                    <span>電車</span>
                </span>
                    <div class="print_unitTitle" style="color: rgb(68, 68, 68); margin-top: 15px; font-weight: bold;">
                        西武池袋線急行で池袋駅→元加治駅
                    </div>
                    <div style="margin-top: 20px;">
                        <div class="print_comunit" style="position: relative; font-size: 0.63em; min-height: 70px;">
                            <img src="images/img_tabitomonoimage_03.png" style="position: absolute; top: 0px; left: 0px; border-radius: 100px; width: 54px; height: 54px;" />
                                <div class="print_intext" style="padding-left: 70px; color: rgb(68, 68, 68); line-height: 1.25em; margin-bottom: 20px;">
                                    <span class="print_comname" style="color: rgb(118, 89, 70);">go*g_*in*ia</span>
                                    <br />10:03-10:46
                                        西武池袋線急行(飯能行)
                                        463円
                                </div>
                        </div>
                        <div class="print_comunit" style="position: relative; font-size: 0.63em; min-height: 70px;">
                            <img src="images/img_tabitomonoimage_03.png" style="position: absolute; top: 0px; left: 0px; border-radius: 100px; width: 54px; height: 54px;" />
                                <div class="print_intext" style="padding-left: 70px; color: rgb(68, 68, 68); line-height: 1.25em; margin-bottom: 20px;">
                                    <span class="print_comname" style="color: rgb(118, 89, 70);">go*g_*in*ia</span>
                                    <br />元加治駅周辺にコンビニ、スーパーがないので出発前に先に飲み物と食べ物買いて方がいい。

                                        公園内に自販機あります。

                                        ちなみに駅から公園まで約４０分で歩く。
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}