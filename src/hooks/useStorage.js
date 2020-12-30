import { useEffect, useState } from 'react'
import { AsyncStorage } from 'react-native';

const useStorage = (key, initialValue) => {
  const [values, setValues] = useState(initialValue)

  const save = async (key, value) => {
    await AsyncStorage.setItem(key, value)
  }

  const load = async () => {
    const value = await AsyncStorage.getItem(key)
    if (value) {
      setValues(JSON.parse(value))
    }
  }

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    if (values) {
      save(key, JSON.stringify(values))
    }
  }, [values, key])

  const deleteValue = (id) => {
    setValues(values.filter((val) => id !== val))
  }

  return { values, setValues, deleteValue }
}

export default useStorage
