// import React from 'react';
import {
  getNestedObject,
  removeDuplicates,
  isObjectEmpty,
} from './objectService';

describe('removeDuplicates', () => {
  it('Remove all duplicate instances', () => {
    const arrayOfObjects = [
      { fname: 'Jhon', lname: 'Doe', age: 4 },
      { fname: 'Jhon', lname: 'Doe', age: 5 },
      { fname: 'Jack', lname: 'Doe', age: 4 },
      { fname: 'Jhon', lname: 'Doe', age: 4 },
      { fname: 'Jhon', lname: 'Thoe', age: 4 },
    ];

    const removedObjects = removeDuplicates(arrayOfObjects);
    expect(removedObjects).toEqual([
      { fname: 'Jhon', lname: 'Doe', age: 4 },
      { fname: 'Jhon', lname: 'Doe', age: 5 },
      { fname: 'Jack', lname: 'Doe', age: 4 },
      { fname: 'Jhon', lname: 'Thoe', age: 4 },
    ]);
  });

  it('Remove all deep duplicate instances', () => {
    const arrayOfObjects = [
      {
        fname: 'Jhon',
        lname: 'Doe',
        age: 4,
        data: {
          otherLang: [
            {
              key: 'en',
              value: 'english',
              data: {
                deep: 'deepest',
              },
            },
          ],
        },
      },
      {
        fname: 'Jhon',
        lname: 'Doe',
        age: 4,
        data: {
          otherLang: [
            {
              key: 'en',
              value: 'english',
              data: {
                deep: 'deepest',
              },
            },
          ],
        },
      },
      {
        fname: 'Jhon',
        lname: 'Doe',
        age: 4,
        data: {
          otherLang: [
            {
              key: 'en',
              value: 'english',
              data: {
                deep: 'wrong',
              },
            },
          ],
        },
      },
    ];

    const removedObjects = removeDuplicates(arrayOfObjects);
    expect(removedObjects).toEqual([
      {
        fname: 'Jhon',
        lname: 'Doe',
        age: 4,
        data: {
          otherLang: [
            {
              key: 'en',
              value: 'english',
              data: {
                deep: 'deepest',
              },
            },
          ],
        },
      },
      {
        fname: 'Jhon',
        lname: 'Doe',
        age: 4,
        data: {
          otherLang: [
            {
              key: 'en',
              value: 'english',
              data: {
                deep: 'wrong',
              },
            },
          ],
        },
      },
    ]);
  });
});

describe('getNestedObject', () => {
  it('Returns an object when found', () => {
    const nestedObj = {
      id: 101,
      email: 'jack@dev.com',
      personalInfo: {
        name: 'Jack',
        address: {
          line1: 'westwish st',
          line2: 'washmasher',
          city: 'wallas',
          state: 'WX',
        },
      },
    };
    const component = getNestedObject(nestedObj, ['personalInfo', 'name']);
    expect(component).toEqual('Jack');
  });
  it('returns undefined when no object is found', () => {
    const nestedObj = {
      id: 101,
      email: 'jack@dev.com',
      personalInfo: {
        address: {
          line1: 'westwish st',
          line2: 'washmasher',
          city: 'wallas',
          state: 'WX',
        },
      },
    };
    const component = getNestedObject(nestedObj, ['personalInfo', 'name']);
    expect(component).toEqual(undefined);
  });
  it('returns fallback when defined', () => {
    const nestedObj = {
      id: 101,
      email: 'jack@dev.com',
      personalInfo: {
        address: {
          line1: 'westwish st',
          line2: 'washmasher',
          city: 'wallas',
          state: 'WX',
        },
      },
    };
    const component = getNestedObject(
      nestedObj,
      ['personalInfo', 'name'],
      'fallback',
    );
    expect(component).toEqual('fallback');
  });
  it('returns a 0 when fallback is 0', () => {
    // sometimes a 0 is the same as null -> this function needs to return a 0 instead of null or undefined
    const nestedObj = {
      id: 101,
      email: 'jack@dev.com',
      personalInfo: {
        address: {
          line1: 'westwish st',
          line2: 'washmasher',
          city: 'wallas',
          state: 'WX',
        },
      },
    };
    const component = getNestedObject(nestedObj, ['personalInfo', 'name'], 0);
    expect(component).toEqual(0);
  });
});

describe('isObjectEmpty', () => {
  it('returns true when object is empty', () => {
    expect(isObjectEmpty({})).toEqual(true);
  });

  it('returns false when object is not empty', () => {
    expect(isObjectEmpty({ isEmpty: false })).toEqual(false);
  });
});
