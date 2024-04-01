const formDict = {
  consultation: {
    name: "Ім'я",
    phone: 'Телефон',
    message: 'Повідомлення',
  },
};

export const createTgMessage = (formData, dictKey) => {
  return Object.entries(formData).reduce((acc, [key, data], i) => {
    return (
      acc + `${i > 0 ? '\n' : ''}<b>${formDict[dictKey][key]}</b>: ${data}`
    );
  }, '');
};
