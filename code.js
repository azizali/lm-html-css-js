// Learning Variables
console.log('Hello JS');
var name = '';
var anotherName = 'Long name here';

var num = 1;
var anotherNumber = 2;

var isUserLoggedIn = true;

var sum = num + anotherNumber;

var customers = null;

console.log(sum);


// Learning Objects
var company = {
  name: 'Liberty Mutual',
  addrress: '123 main st, City, IL 60006',
  phoneNum: '8001234566',
  getEmployeeInfo: function(){},
  locationA: {
    address: '456 main st',
    phone: '123456',
  },
  locationB: {
    address: '789 main st',
    phone: null
  },
  officeHours: {
    sun: {
      isOpen: false,
      startTime: "8am",
      endTime: "5pm"
    },
    mon: {
      isOpen: true,
      startTime: "8am",
      endTime: "5pm"
    },
    tues: {
      isOpen: true,
      startTime: "8am",
      endTime: "5pm"
    },
    wed: {
      isOpen: true,
      startTime: "8am",
      endTime: "5pm"
    },
    thu: {
      isOpen: true,
      startTime: "8am",
      endTime: "5pm"
    },
    fri: {
      isOpen: true,
      startTime: "8am",
      endTime: "5pm"
    },
    sat: {
      isOpen: false,
      startTime: "8am",
      endTime: "5pm"
    },
  },
  employeeCount: 10000,
  stock: {
    symbol: 'LM',
    price: 123,
    floatingShares: 123456789
  }
}

console.log('Phone number', company.phoneNum);
console.log('stock price',company.stock.price);
console.log('locationA phone', company.locationA.phone);
console.log('locationA email', company.locationA.emailAddress);



console.log('---------------');
// Learning Arrays

// Single line code comments

/*
  Another way to do code commenting
  Multi-line or single line
*/

var list = ['A', 'B', 'C'];
console.log('list', list);
console.log('List second value', list[1]);

var listRandom = [1, 2, 'C', { key: 'value'}, function(){}, null, undefined];
console.log('listRandom', listRandom);

