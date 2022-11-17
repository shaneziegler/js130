let AccountGenerator = (function() {

  let z = function() {
    // console.log('fggf');
    let firstName, lastname, email, password;

    function validPassword(pwd) {
      return (pwd === password);
    }

    function createSequence() {
      const CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const SEQ_LENGTH = 16;

      let sequence = [...Array(SEQ_LENGTH)].map(_ => Math.floor(Math.random() * CHARS.length)).join('');
      return sequence;
    }

    return {
      // displayName: undefined,

      init(accountEmail, pwd, fName, lName) {
        firstName = fName;
        lastName = lName;
        password = pwd;
        email = accountEmail;
        this.displayName = createSequence();
        return this;
      },

      firstName(pwd) {
        if (validPassword(pwd)) {
          return firstName;
        }
        return 'Invalid Password';
      },

      lastName(pwd) {
        if (validPassword(pwd)) {
          return lastName;
        }
        return 'Invalid Password';
      },

      email(pwd) {
        if (validPassword(pwd)) {
          return email;
        }
        return 'Invalid Password';
      },

      resetPassword(oldPwd, newPwd) {
        if (validPassword(oldPwd)) {
          password = newPwd;
          return true;
        }
        return 'Invalid Password';
      },

      reanonymize(pwd) {
        if (validPassword(pwd)) {
          this.displayName = createSequence();
          return true;
        }
        return 'Invalid Password';
      },
    }    
  }
  return z;
})();
// console.log(AccountGenerator);
let x = AccountGenerator();
// console.log(x);
let x2 = AccountGenerator();


let fooBar = Object.create(x).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
console.log(fooBar.displayName);

console.log('--------------------------------------------');
let bazQux = Object.create(x2).init('baz@qux.com', '123456', 'baz', 'qux');
// Note that the foillowing two lines of code are correct as written.
// There are no mistakes. We are attempting to demonstrate that the
// code does not work as might be intended.
console.log(fooBar.firstName('abc'));           // logs 'baz' but should log foo.
console.log(fooBar.email('abc'));               // 'baz@qux.com' but should 'foo@bar.com'