import { ref, computed } from 'vue'

export const collapsed = ref(false);
export const ToggleBar = () => {
    collapsed.value = !collapsed.value
}

export const BAR_HEIGHT = 130;
export const BAR_COLLAPSED_HEIGHT = 35;
export const barHeight = computed(() => `${collapsed.value ? BAR_COLLAPSED_HEIGHT : BAR_HEIGHT}px`)