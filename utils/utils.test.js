const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var result = utils.add(33, 11);
      expect(result).toBe(44).toBeA('number');
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(3, 4, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });

  describe('#square', () => {
    it('should square a number', () => {
      var result = utils.square(2);
      expect(result).toBe(4).toBeA('number');
    });

    it('should async square a number', (done) => {
      utils.asyncSqaure(2, (res) => {
        expect(res).toBe(4).toBeA('number');
        done();
      });
    });
  });
});

it('should set firstName and lastName', () => {

  var user = {
    age: 25,
    location: 'bangalore'
  };
  var res = utils.setName(user, 'Rajasekhar Ghanta');
  //objects passed by reference and hence passed-in 'user' gets modified
  //and wil be equal to 'res'
  expect(res).toInclude({
    firstName: 'Rajasekhar',
    lastName: 'Ghanta'
  }).toBeA('object');

});

// it('should expect some values', () => {
//   // expect(12).toBe(12);
//   // expect(12).toNotBe(12);
//   // expect({
//   //   name: 'Ghanta'
//   // }).toEqual({
//   //   name: 'Ghanta'
//   // });
//   // expect({
//   //   name: 'Ghanta'
//   // }).toNotEqual({
//   //   name: 'Ghanta'
//   // });
//   // expect([2, 3, 4]).toInclude(3);
//   // expect([2, 3, 4]).toExclude(6);
//   expect({
//     name: 'Ghanta',
//     age: 25,
//     location: 'bangalore'
//   }).toInclude({
//     age: 25
//   })
// });
