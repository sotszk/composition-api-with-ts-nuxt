<script lang="tsx">
import 'vue-tsx-support/enable-check'
import * as tsx from 'vue-tsx-support'
import { computed, Ref } from '@vue/composition-api'
import useTimeout from '~/hooks/useTimeout'

export default tsx.component({
  setup() {
    const { ready } = useTimeout(2000)
    const readyText: Ref<string> = computed(() =>
      ready.value ? 'ready!' : '---'
    )
    return {
      ready,
      readyText,
    }
  },

  render() {
    const { readyText }: any = this // NOTE: type does not exists...
    return (
      <div>
        <h1>{readyText}</h1>
      </div>
    )
  },
})
</script>
