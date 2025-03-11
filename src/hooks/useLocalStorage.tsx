import { useState } from 'react'

type LocalStorageSetValue = string
type LocalStorageReturnValue = LocalStorageSetValue | null

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void
    removeItem: () => void
  }
]

export const useLocalStorage: UseLocalStorage = (key) => {
  const [value, setValue] = useState(
    localStorage.getItem(key) || 'ничего не записано'
  )

  const setItem = (value: LocalStorageSetValue): void => {
    setValue(value)
    localStorage.setItem(key, value)
  }

  const removeItem = (): void => {
    setValue('ничего не записано')
    localStorage.removeItem(key)
  }

  return [
    value,
    {
      setItem,
      removeItem,
    },
  ]
}
