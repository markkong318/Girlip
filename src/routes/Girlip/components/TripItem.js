import React from 'react';
import { connect } from 'react-redux'

class TripItem extends React.Component {

    render() {

        return (
            <div className="print_unit"
                 style={{width: '800px', paddingLeft: '100px', textAlign: 'left', margin: '25px 0px 50px'}}>
                <div className="print_itwrap" style={{position: 'relative', fontSize: '1.38em', color: 'rgb(118, 89, 70)', paddingLeft: '50px'}}>
                    10:00
                    <span className="leader" style={{padding: '0px 5px'}}>・・・</span>
                    11:00
                    <span className="train type03 print_icon" style={{position: 'absolute', top: '-12px', left: '0px'}}>
                    <span>電車</span>
                </span>
                    <div className="print_unitTitle" style={{color: 'rgb(68, 68, 68)', marginTop: '15px', fontWeight: 'bold'}}>
                        西武池袋線急行で池袋駅→元加治駅
                    </div>
                    <div style={{marginTop: '20px'}}>
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
                                <span className="print_comname" style={{color: 'rgb(118, 89, 70)'}}>go*g_*in*ia</span>
                                <br/>10:03-10:46
                                西武池袋線急行(飯能行)
                                463円
                            </div>
                        </div>
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
                                <span className="print_comname" style={{color: 'rgb(118, 89, 70)'}}>go*g_*in*ia</span>
                                <br/>元加治駅周辺にコンビニ、スーパーがないので出発前に先に飲み物と食べ物買いて方がいい。

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

const mapStateToProps = (state, props) => ({

});


const mapDispatchToProps = (dispatch) => {

    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripItem);