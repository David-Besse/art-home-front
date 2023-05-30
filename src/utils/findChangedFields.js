// Function to find the changed fields between two objects
const findChangedFields = (elOne, elTwo) => Object.keys(elOne).filter((key) => elOne[key] !== elTwo[key]);

export default findChangedFields;
