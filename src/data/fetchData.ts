const fetchData = () => fetch('./questions.json').then((res) => res.json()).then((res) => res.questions).catch(() => {
  throw new Error('Something went wrong...');
});

export default fetchData;
