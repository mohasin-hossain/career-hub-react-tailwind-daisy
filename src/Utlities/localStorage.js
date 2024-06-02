const getStoredData = () => {
  const storedData = localStorage.getItem("job-applications");
  if (storedData) {
    return JSON.parse(storedData);
  } else {
    return [];
  }
};

const saveToLocalStorage = (id) => {
  const storedData = getStoredData();
  const exists = storedData.find((jobId) => jobId === id);
  if (!exists) {
    storedData.push(id);
    localStorage.setItem("job-applications", JSON.stringify(storedData));
  }
};

export { getStoredData, saveToLocalStorage };
