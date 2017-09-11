import React from 'react';
import { connect } from 'react-redux'
import TripComment from './TripComment'

class TripItem extends React.Component {

    render() {
        const {start_time, end_time, content, comment, icon} = this.props;

        return (
            <div className="print_unit"
                 style={{width: '800px', paddingLeft: '100px', textAlign: 'left', margin: '25px 0px 50px'}}>
                <div className="print_itwrap" style={{position: 'relative', fontSize: '1.38em', color: 'rgb(118, 89, 70)', paddingLeft: '50px'}}>
                    {start_time}
                    <span className="leader" style={{padding: '0px 5px'}}>・・・</span>
                    {end_time}
                    <span className={`${icon} type03 print_icon`} style={{position: 'absolute', top: '-12px', left: '0px'}}>
                    <span></span>
                </span>
                    {content && content.map((item, key) => {

                        if (item.type == 'unit') {
                            return (
                                <div className="print_unitTitle" style={{color: 'rgb(68, 68, 68)', marginTop: '15px', fontWeight: 'bold'}}>
                                    {item.title}
                                </div>
                            );

                        }else if(item.type == 'spot') {
                            return (
                                <div className="print_spotWrap" style={{position: 'relative', paddingLeft: '220px', height: '120px', marginTop: '15px', color: 'rgb(68, 68, 68)'}}>
                                    <img className="print_spotImage" src={item.image} style={{position: 'absolute', top: '0px', left: '0px', width: '190px', height: '120px', border: '1px solid rgb(118, 89, 70)', borderRadius: '5px', marginLeft: '2px', objectFit: 'cover'}} />
                                    <div className="print_unitTitle2" style={{fontSize: '1.06em', fontWeight: 'bold', marginBottom: '15px'}}>
                                        {item.title}
                                    </div>
                                    <div className="print_spotCtnt" style={{fontSize: '0.63em', marginBottom: '20px'}}>{item.address}
                                        <div className="print_spotTel" style={{marginTop: '5px'}}>
                                            <div dangerouslySetInnerHTML={{__html: item.information}} />
                                        </div>
                                    </div>
                                    {/*<span className="review st40" style={{fontSize: '0.63em'}}><span></span>4.09</span>*/}
                                </div>
                            );
                        }

                    })}

                    <div style={{marginTop: '20px'}}>
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