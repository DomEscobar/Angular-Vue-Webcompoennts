import { ref, onMounted } from "vue";

export const useAsync = (func: () => Promise<any>) => {
    const loading = ref(false);

    async function doFunc() {
        try {
            loading.value = true;
            await func();
        } catch (error) {
            throw error;
        } finally {
            loading.value = false;
        }
    }

    onMounted(doFunc);

    function refresh() {
        doFunc();
    }

    return {
        loading,
        refresh
    };
};