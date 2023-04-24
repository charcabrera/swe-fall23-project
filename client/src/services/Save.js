const saveStorage = (key, data) => {
    console.log('saving!')
    localStorage.setItem(key, JSON.stringify(data))
  }
  
  const loadStorage = (key) => {
    return localStorage.getItem(key)
  }
  
export {saveStorage, loadStorage}