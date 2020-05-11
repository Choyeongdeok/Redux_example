import React from 'react';
import Counter from '../components/Counter'
import {connect} from 'react-redux'

import {increase, decrease} from '../modules/counter' //액션생성함수 import

//컨테이너 컴포넌트 : 리덕스 스토어와 연동된 컴포넌트(리덕스 스토어에 접근하여 원하는 상태를 받아 오고 액션도 디스패치해줌)
//connect 함수를 이용하여 리덕스와 연동 connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
//src/components/Counter.js
const CounterContainer = ({number, increase, decrease}) => {
    return (
        <Counter number = {number} onIncrease = {increase} onDecrease = {decrease}/>
    );
};

//mapStateToProps는 state를 매개변수로 받아 현재 스토어가 지니고 있는 상태를 가리킴
const mapStateToProps = state => ({
    number : state.counter.number
})

//mapDispatchToProps는 store의 내장함수인 dispatch를 매개변수로 받음
//dispatch로 액션생성함수 호출하여 액션 발생시킴
const mapDispatchToProps = dispatch => ({
    increase : () => {
        dispatch(increase()) // = {return dispatch(increase())}
    },
    decrease : () => {
        dispatch(decrease())
    }
})

// export default CounterContainer;

//connect 함수를 이용하여 리덕스와 연동 connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer)



//다른 방법

// export default connect(
//     state => ({
//         number : state.counter.number
//     }),
//     dispatch => ({
//         increase : () => dispatch(increase()),
//         decrease : () => dispatch(decrease())
//     })
// )(CounterContainer)



//액션생성함수가 많아지면 bindActionCreators 사용

// dispatch => bindActionCreators(
//     {
//         increase, decrease
//     },
//     dispatch
// )(CounterContainer)



//또는
// export default connect(
//     state => ({
//         number : state.counter.number
//     }),
//     {
//         increase,
//         decrease
//     }
// )(CounterContainer)