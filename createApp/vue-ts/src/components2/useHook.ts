import {
  defineComponent,
  reactive,
  watchEffect,
  toRefs,
  ref,
  shallowRef,
} from "vue";

const useHook = () => {
  const state = reactive({
    name: "창수",
    age: 10,
  });
  const arr = ref<[] | undefined>(
    undefined
  );
  watchEffect(() => {
    setTimeout(() => {
      // state.name = "바보";
      arr.value = [{ name: "창수" }];
      console.log("changed");
    }, 5000);
  });

  return {
    // ...state,
    aref,
  };
};

export default useHook;
