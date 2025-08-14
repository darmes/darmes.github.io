import { computed } from 'vue'
import useMobile from '@/utilities/useMobile'

const windowSize = useWindowSize()

export const mobileWidth = 1024

export default function useMobile() {
  const isMobile = computed(() => windowSize.width.value <= mobileWidth)
  return { isMobile }
}
