"use strict";

let Account = {
  init(emailAddr, pwd, fName, lName) {
    const SEQUENCE_LENGTH = 16;

    function createSequence() {
      const CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let seqArray = [...Array(SEQUENCE_LENGTH)];
      return seqArray.map(_ => CHARS[Math.floor(Math.random() * CHARS.length)]).join('');
    }

    return {
      reAnonymize(password) {
        if (password === pwd) {
          this.displayName = createSequence();
          return true;
        }
        return 'Invalid Password';
      },

      resetPassword(password, newPwd) {
        if (password === pwd) {
          pwd = newPwd;
          return true;
        }
        return 'Invalid Password';
      },

      firstName(password) {
        if (password === pwd) {
          return fName;
        }
        return 'Invalid Password';
      },

      lastName(password) {
        if (password === pwd) {
          return lName;
        }
        return 'Invalid Password';
      },

      email(password) {
        if (password === pwd) {
          return emailAddr;
        }
        return 'Invalid Password';
      },

      displayName: createSequence()
    }; 
  }
}


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reAnonymize('abc');                         // returns true
console.log(fooBar.displayName);   
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// Note that the following two lines of code are correct as written.
// There are no mistakes. We are attempting to demonstrate that the
// // code does not work as might be intended.
console.log(fooBar.firstName('123456'));           // logs 'baz' but should log foo.
console.log(fooBar.email('123456'));               // 'baz@qux.com' but should 'foo@bar.com'


console.log('------------------------------------');
console.log(fooBar.hasOwnProperty('displayName'));
console.log(fooBar.hasOwnProperty('resetPassword'));
console.log(bazQux.hasOwnProperty('resetPassword'));