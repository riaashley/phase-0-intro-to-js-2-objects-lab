// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newUpdate = {...employee};
    newUpdate[key] = value;
    return newUpdate;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}