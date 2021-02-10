/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
/* 
  @accept array of objects

  [
    {test: test},
    {test: test},
    {test: test},
    {test: test},
  ]
*/

export const removeDuplicates = (arr = []) => {
  const uniq = new Set(arr.map(e => JSON.stringify(e)));
  return Array.from(uniq).map(e => JSON.parse(e));
};

/* 
  @accept object, arrary of strings

  nestedObj = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
        }
    }
  }

  pathArr = ['personalInfo', 'name'] 

  this safely's returns 'Jack'

  If the value is undefined the function will return the 'fallback prop' when defined, if not -> returns undefined.
*/

export const getNestedObject = (nestedObj, pathArr, fallback) => {
  return pathArr.reduce(
    (obj, key) =>
      obj && obj[key] !== undefined
        ? obj[key]
        : fallback || fallback === 0
        ? fallback
        : undefined,
    nestedObj,
  );
};

/* 
  @accept object

  returns true if object is empty
*/

export const isObjectEmpty = obj => {
  if (typeof obj === 'object' && obj !== null) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  } 
    return {};
  
};

/* 
  @accept object, object

   newKeys = {
    name: 'firstName',
    job: 'passion'
  }

  obj = {
    name: 'Bobo',
    job: 'Front-End Master'
  }

  returns {
    firstName: "Bobo",
    passion: "Front-End Master"
  }
  
*/

export const renameKeys = (newKeys, obj) =>
  Object.keys(obj).reduce((acc, key) => {
    const renamedObject = {
      [newKeys[key] || key]: obj[key],
    };

    return {
      ...acc,
      ...renamedObject,
    };
  }, {});

/* 
  @accept object, any

   obj = {
    name: 'firstName',
    job: null
  }

  value = null

  returns {
    name: 'firstName',
  }
  
*/

export const removeIfvalueIs = (obj, value) => {
  Object.keys(obj).forEach(key => obj[key] === value && delete obj[key]);
  return obj;
};
