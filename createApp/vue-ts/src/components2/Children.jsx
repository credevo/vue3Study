import {
  defineComponent,
  reactive,
  ref,
} from "vue";

const Children = defineComponent({
  name: "Children",
  setup(props) {
    const state = reactive({
      user: { name: "창수", age: 1 },
      dept: "노가다부",
    });

    const arrState = ref(undefined);

    // console.log(state);
    // console.log(state.user);
    // console.log(state.dept);

    const change = () => {
      state.user.name = "바보";
      //   arrState.value = [];
      //   arrState.value.push({
      //     name: "창수",
      //   });
      //   debugger;
      arrState.value = [
        {
          name: "창수",
        },
      ];
      console.log(arrState.value);
    };
    return () => (
      <div>
        <div>
          <button onClick={change}>
            체인지
          </button>
        </div>
        <h1>나는 자식</h1>
        <h1> {state.user}</h1>
        <h1>{state.user.age}</h1>
        <div>{state.user.name}</div>
        <div>{state.dept}</div>
        <div>
          <div>
            {JSON.stringify(
              arrState.value
            )}
          </div>
        </div>
      </div>
    );
  },
});

export default Children;
