// Write your solution in this file!
const employee = {
  name: "Troy",
  streetAddress: "The Moon"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
  return {
    ...obj,
    [key]: value,
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromEmployeeByKey(obj, key) {
let newObj =  {...obj};
delete newObj.key;
return {newObj};
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
  delete employee[name];
  return employee;
}