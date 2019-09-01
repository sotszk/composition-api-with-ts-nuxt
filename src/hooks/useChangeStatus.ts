import { computed, ref } from '@vue/composition-api'

export enum Status {
  DONE = 'done',
  TODO = 'todo',
}

const useChangeStatus = () => {
  const status = ref(Status.TODO)

  return {
    status,
  }
}

export default useChangeStatus
