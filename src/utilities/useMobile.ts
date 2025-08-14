import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

const windowSize = useWindowSize()

export const mobileWidth = 1024

export default function useMobile() {
  const isMobile = computed(() => windowSize.width.value <= mobileWidth)
  return { isMobile }
}
