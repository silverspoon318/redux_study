import React, { Component, PropTypes } from 'react';
import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';
// import { connect, bindActionCreators } from 'react-redux';

import * as actions from '../actions';

const propTypes = {
};

const defaultProps = {
};

class Counter extends Component {
    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor() {
        const color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
        ];
        console.log(color);
        this.props.handleSetColor(color);
    }

    render() {
        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
            // background: 'rgb(255), rgb(255), rgb(255)'
        };

        console.log(style);

        return(
            <div style = { style }>
                <Value number={ this.props.number }/>
                <Control
                    onPlus= { this.props.handleIncrement }
                    onSubtract= { this.props.handleDecrement }
                    onRandomizeColor = { this.setRandomColor }
                />
            </div>
        );
    }
}
Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    /** 여기서 state는 reducer의 state이다. **/
    /** 이렇게 해주면 number, color props로 연결이 된다.  **/
    return {
        number: state.counter.number,
        color: state.ui.color
    };
};

const mapDispatchToProps = (dispatch) =>  {
    // return bindActionCreators(actions, dispatch);
    return {
        /** action을 dispatch하는 함수를 props로 연결해준다. **/
        handleIncrement: () => { dispatch(actions.increment()) },
        handleDecrement: () => { dispatch(actions.decrement()) },
        handleSetColor: (color) => { dispatch(actions.setColor(color)) }
    };
};

//store에 연결 된 새로운 컴퍼넌트 클래스가 반환됨, 옵션이 없으면 this.props.store로 접근가능
/*
    Counter를 redux에 연결
    connect() 함수 사용, 컴포넌트를 redux에 연결하는 또 다른 함수를 반환하고
    반환된 함수에 Counter를 넣어줌.
*/
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
