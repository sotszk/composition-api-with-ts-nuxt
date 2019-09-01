import { ref, watch } from '@vue/composition-api'

export enum Status {
  DONE = 'done',
  TODO = 'todo',
}

const useChangeStatus = () => {
  const status = ref(Status.TODO)
  watch(status, (statusAfter, statusBefore) => {
    console.log(statusBefore, 'to', statusAfter)
    console.log('status changed')
  })

  const toggleStatus = (): void => {
    status.value = status.value === Status.TODO ? Status.DONE : Status.TODO
  }

  return {
    toggleStatus,
    status,
  }
}

export default useChangeStatus
