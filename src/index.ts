export {};

// Cannot assign to 'X' because it is a read-only property (TS)

// EXAMPLE 1 - Remove the `readonly` modifier if you have access to the code

class Employee {
  country = 'Germany';

  changeCountry() {
    this.country = 'Chile';
  }
}

// // ------------------------------------

// type Person = {
//   name: string;
// };

// const obj: Person = {
//   name: 'Bobby Hadz',
// };

// obj.name = 'Frank';

// ---------------------------------------------------

// // EXAMPLE 2 - Using a type assertion to solve the error

// class Employee {
//   readonly country: string = 'Germany';

//   changeCountry() {
//     (this.country as any) = 'Chile';
//   }
// }

// // ------------------------------------

// type Person = {
//   readonly name: string;
// };

// const obj: Person = {
//   name: 'Bobby Hadz',
// };

// (obj.name as any) = 'Frank';

// ---------------------------------------------------

// // EXAMPLE 3 - Using protected class properties

// class Employee {
//   protected _country = 'Germany';

//   get country(): string {
//     return this._country;
//   }

//   changeCountry() {
//     this._country = 'Chile';
//   }
// }

// const employee = new Employee();

// console.log(employee.country); // 👉️ "Germany"

// // ⛔️ Cannot assign to 'country' because it is a read-only property.ts(2540)
// employee.country = 'Belgium';
