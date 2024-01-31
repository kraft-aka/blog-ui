// reformats the date to conventional one
const formatDate = (date) => {
  const inputDate = new Date(date);
  return `${
    inputDate.getMonth() + 1
  }/${inputDate.getDate()}/${inputDate.getFullYear()}`;
};

export default formatDate;
