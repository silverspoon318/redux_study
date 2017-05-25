/*
    action - 어떤 작업을 할지 정보를 지니고 있는 객체
    액션 생성자 함수 작성하는 곳
    index인 이유는 actions 디렉토리만 도달해도 호출될 수 있도록
*/
import * as types from './ActionTypes';

export function increment() {
    return {
        type: types.INCREMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}

export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color
    };
}
