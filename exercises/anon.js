let Account = {
  init(email, password, firstName, lastName) {

    function createSeq() {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const SEQUENCE_LENGTH = 16;

      return [...new Array(SEQUENCE_LENGTH)].map(val => {
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');
    }

    return {
      displayName: createSeq(),

      firstName(pwd) {
        if(pwd === password) return firstName;
        return 'Invalid Password';
      },

      lastName(pwd) {
        if(pwd === password) return lastName;
        return 'Invalid Password';
      },

      resetPassword(orgPwd, newPwd) {
        if(orgPwd === password) {
          password = newPwd;
          return true;
        }
        return 'Invalid Password';;
      },

      email(pwd) {
        if(pwd === password) return email;
        return 'Invalid Password';
      },

      reanonymize(pwd) {
        if(pwd === password) {
          this.displayName = createSeq();
          return true;
        }
        return 'Invalid Password';;
      }
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
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

// console.log(fooBar.password);
// console.log(fooBar.createSeq());

console.log(fooBar);

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// Note that the foillowing two lines of code are correct as written.
// There are no mistakes. We are attempting to demonstrate that the
// code does not work as might be intended.
console.log(fooBar.firstName('123456'));           // logs foo.
console.log(fooBar.email('123456'));               // 'foo@bar.com'

console.log(bazQux.firstName);                     // returns the firstName function
console.log(bazQux.email);                         // returns the email function
console.log(bazQux.firstName('123456'));           // logs 'baz'

console.log(bazQux.firstName('abc'));              // logs 'Invalid Password'


console.log(bazQux.displayName);                   // logs 16 character sequence