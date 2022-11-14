import {
  defineComponent,
  reactive,
  toRefs,
} from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      default: "나는 버튼",
    },
    message: {
      type: String,
      default: "나는 메시지",
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const data = reactive({ ...props });
    // => reactive는 객체를 proxy 객체로 만들어준다.
    const data2 = toRefs(data);
    const upCounting = () => {
      data2.count.value++;
      // data2.value = {
      //   count: 1,
      //   message: "2",
      //   text: "3",
      // };
    };
    return () => (
      <div>
        {/* <h1>{data2.count.value}</h1> */}
        <h1>{data2.count.value}</h1>
        <div>
          <input
            type="text"
            value={props.message}
          />
        </div>
        <div>
          <button onClick={upCounting}>
            {props.text}
          </button>
        </div>
      </div>
    );
  },
});
