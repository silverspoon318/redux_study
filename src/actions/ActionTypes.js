/*
    ActionType을 상수 형태로 만든다.
    Action은 하나의 객체이다.

    Action 객체는 하나의 객체이다. type은 어떤 액션 종류인지 알려준다. 그에 따라서 나중에 리듀서가 할일을 하는거다.
    따로 설정할 값이 있으면 color와 같이 추가한다.

    액션을 그때 그때 객체로 만들기는 귀찮으니 액션 생성자 함수를 작성한다.

    {type: "INCREMENT"}
    {type: "DECREMENT"}
    {
        type: "SET_COLOR",
        color: [200, 200, 200]
    }
*/
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET_COLOR = "SET_COLOR";
