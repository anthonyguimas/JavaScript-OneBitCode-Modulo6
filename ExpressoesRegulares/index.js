function PhoneNumber(phoneNumberString) {
  const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "");
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0];
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0];
  this.number = fixedString.match(/(?<=\)).+/)[0];
}

console.log(new PhoneNumber("+55 (22) 9 98745-5152"));
console.log(new PhoneNumber("+ 1 (55) as555-123-7777"));
