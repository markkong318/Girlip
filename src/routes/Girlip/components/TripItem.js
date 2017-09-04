import React from 'react';
import { connect } from 'react-redux'
import TripComment from './TripComment'

class TripItem extends React.Component {

    render() {
        const {start_time, end_time, title, comment} = this.props;

        return (
            <div className="print_unit"
                 style={{width: '800px', paddingLeft: '100px', textAlign: 'left', margin: '25px 0px 50px'}}>
                <div className="print_itwrap" style={{position: 'relative', fontSize: '1.38em', color: 'rgb(118, 89, 70)', paddingLeft: '50px'}}>
                    {start_time}
                    <span className="leader" style={{padding: '0px 5px'}}>・・・</span>
                    {end_time}
                    <span className="train type03 print_icon" style={{position: 'absolute', top: '-12px', left: '0px'}}>
                    <span></span>
                </span>
                    <div className="print_unitTitle" style={{color: 'rgb(68, 68, 68)', marginTop: '15px', fontWeight: 'bold'}}>
                        {title}
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

                        {comment.map((item, key) => {
                            return (<TripComment key={key} {...item}/>);
                        })}
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TripItem);