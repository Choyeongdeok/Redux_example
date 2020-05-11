//액션 타입, 액션 생성 함수, 리듀서 함수를 기능별로 파일 하나에 작성하는 Ducks 패턴
//Ducks 패턴을 이용하여 액션 타입, 액션 생성 함수, 리듀서 함수를 작성한 코드를 모듈이라함


//redux 액션 타입 정의
//액션 타입 = 모듈 이름/액션 이름
//모듈 이름을 넣음으로써 프로젝트 규모가 커져도 액션이 충돌하지 않게 해줌
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

//액션 생성 함수
//export에 의해 다른 파일에서 이 함수를 호출하여 사용할 수 있음
export const increase = () => ({type : INCREASE})
export const decrease = () => ({type : DECREASE})


//초기 상태(action이 undefined일 경우)
const initialState = {
    number : 0
}

//리듀서 함수
function counter(state = initialState, action) {
    switch(action.type) {
        case INCREASE:
            return {
                number : state.number + 1
            }

        case DECREASE:
            return {
                number : state.number - 1
            }

        default:
            return state
    }
}

export default counter