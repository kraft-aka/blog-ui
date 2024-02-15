function inputValueIsValid(val) {
  return val.trim() !== "";
}


function inputEmailIsValid(val) {
  return val.trim !== '' && val.indexOf('@') !== -1
}

export { inputValueIsValid, inputEmailIsValid };