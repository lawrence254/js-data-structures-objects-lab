// Write your solution in this file!
updateDriverWithKeyAndValue = (driver, key, value) => {
    const newDriver = { ...driver }
    newDriver[key] = value;
    return newDriver
}
// destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
//     driver[key] = value;
//     return driver;
// }

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}
function deleteFromDriverByKey(driver, key) {
    const newDriver = { ...driver };
    delete newDriver[key];
    return newDriver;
}
