//throw error when occured
const throwError = (errorMessage, errorStatus) => {
  const error = new Error(errorMessage);
  error.status = errorStatus;
  throw error;
};

//check if object is empty
// const isObjEmpty = (obj) => {
//   return Object.entries(obj).length === 0 ? true : false;
// };

module.exports = { throwError };
