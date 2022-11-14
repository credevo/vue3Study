import {
  defineComponent,
  ref,
} from "vue";
import Button from "./Button";

export default defineComponent({
  props: {
    message: String,
  },
  //   component: [Button],
  setup(props) {
    const cc = ref(0);
    const parentClick = () => {
      cc.value++;
    };
    return () => (
      <div>
        <button onClick={parentClick}>
          부모에서 클릭
        </button>
        <Button count={cc} />
      </div>
    );
  },
});
