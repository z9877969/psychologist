import data from './index.json';

const fetchData = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 700));

    return data;
  } catch (error) {
    return error;
  }
};

export default fetchData;
