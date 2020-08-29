const useLocalStorage = (data) => {
  if (!data) {
    return JSON.parse(localStorage.getItem('trellminator_data'))
  }
  localStorage.setItem('trellminator_data', JSON.stringify(data))
}

export default useLocalStorage
