import React from 'react';
import ReactDOM from 'react-dom';



import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers';



// store을 만듬
const store = createStore(reducers);


/*
    스토어가 하는 일
    dispatch(action) - 방금 전달받은 action과 현재 자기의 상태를 reducer로 보낸다.
                       reducer가 어떤 변화가 필요한지 알아내서 변화를 주고 새 상태를 store로 준다.
                       store은 현상태를 새로 받은 상태로 갈아끼운다.
    getState() - 현재상태를 가져온다.
    subscribe(linstener) - 상태가 바뀔때마다 실행할 함수를 등록한다.
                           linstener가 상태가 바뀔 때 실행될 콜백함수이다.
                           반환하는 unsubscribe가 콜백을 멈추라는 뜻이다.
    replaceReducer(nextReducer) - 핫 리로딩과 코드분할을 구현할 때 사용, 사용될 일이 거의 없다.


*/

// console.log(store.getState());
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(actions.increment());
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch(actions.setColor([200, 200, 200]));
//
// unsubscribe();
//
// store.dispatch(actions.setColor([210, 210, 210]));

/** Provider의 props는 store로 설정해준다.**/
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
