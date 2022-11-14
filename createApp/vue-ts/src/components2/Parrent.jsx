import {
  defineComponent,
  watch,
} from "vue";
import Children from "./children";
import useHook from "./useHook";

const Parrent = defineComponent({
  name: "Parrent",
  setup(props) {
    // const { name, age } = useHook();
    // const state = useHook();
    // console.log("훅 init");
    // console.log(name);
    // console.log(age);
    // // console.log(state);
    // console.log(state.name);
    // console.log(state.age);
    const { arr } = useHook();
    // console.log(arr);
    console.log(arr);
    watch(
      arr,
      () => {
        console.log("와치");
      },
      { deep: true }
    );
    return () => (
      <>
        <div>
          <h1>나는 훅</h1>
          <div>
            {JSON.stringify(arr.value)}
          </div>
        </div>
        <div>
          <h1>나는 부모</h1>
          <Children />
        </div>
      </>
    );
  },
});

export default Parrent;

/**
 * reactive 는 객체 reactivity를 주며,
 * reactive를 구조분해하면 reactivity를 잃어버리는게 확실
 * 그럴 경우를 대비해
 * toRefs를 덧씌워서 return를 하는 방법이 존재
 *
 */
/**
 * ref,reactive는
 * reactivity를 깊은 반응형인지 테스트 = 맞다
 * state =ref(undefined) 후, state.value = [{name:value}] 하면 반응형 맞아
 * 🚩주의해야하는건 :
 * ref가 undefined 로 초기화 시키면 ref값을 배열로
 *  변경이 안되므로 type에 | (union) 조건을 써서 처리해야한다
 */
/**
 * ref 를 넘겨 받을때는 ref 자체를 받아야 reactivity가 유지가 되.
 * ref의 value를 받아도 인식이 안된다.
 */
/**
 * shallowRef vs ref
 *
 * shallowRef 는 react의 useState와 비슷해보인다
 * 객체형태로 되어있는 값이 참조된값(재생성된값,object,array)가 변경되면
 * reactivity 가 존재하게된다.
 * shallowRef 자체도 얇은복사 이므로 ref처럼 깊은복사가 아닌상태를 쓸수 있게된다.
 * refState = ref({name:'창수'})
 * refState.value.name ="바보" 로 변경하면 reactivity 하며
 *
 * shallowState = shallowRef({name:'창수'})
 * shallowState.value = {name:'바보'}로 변경하면 reactivity 하다
 */
