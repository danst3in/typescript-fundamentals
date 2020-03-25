import { HasPhoneNumber, HasEmail } from "./1-basics";

// == CLASSES == //

/**
 * (1) Classes work similarly to what you're used to seeing in JS
 * -   They can "implement" interfaces
 */

export class Contact implements HasEmail {
  email: string;
  name: string;
  constructor(name: string, email: string) {
    this.email = email;
    this.name = name;
  }
}

/**
 * (2) This looks a little verbose -- we have to specify the words "name" and "email" 3x.
 * -   Typescript has a shortcut: PARAMETER PROPERTIES
 */

/**
 * (3) Access modifier keywords - "who can access this thing"
 *
 * - public - everyone
 * - protected - me and subclasses
 * - private - only me
 */

class ParamPropContact implements HasEmail {
  constructor(
    public name: string,
    public email: string = "no email"
   ) {
    // nothing needed
  }
}

const x = new ParamPropContact('a', 'b');
x.name;
// x.email; if this is set to protected we can no longer access this and receive
// an error. Also the class gives an error that we incorrectly implement the interface because
// HasEmail expects email to be visible

/**
 * (4) Class fields can have initializers (defaults)
 */
class OtherContact implements HasEmail, HasPhoneNumber {
  protected age: number = 0;
  private password: string;
  // in the case where it is not definite that password will exist from the
  // beginning of creating the class an alternate technique of lazy instantiation:
  private passwordLazy: string | undefined;
  constructor(
    public name: string,
    public email: string,
    public phone: number
  ) {
    // () age must either be initialized like this above the constructor, or
    // have a default value for example:
    this.age = 35; // if this is not commented out it will supercede what was used as default value ( 0 in this case)
    // original comment below for lazy initialization video
    // () password must either be initialized like this, or have a default value
    // this.password = Math.round(Math.random() * 1e14).toString(32);
  }
  get passwordLazyGet(): string {
    if (!this.passwordLazy) {
      this.passwordLazy = Math.round(Math.random() * 1e14).toString(32);
    }
    return this.passwordLazy;
  }
}

/**
 * (5) TypeScript even allows for abstract classes, which have a partial implementation
 */

// abstract class AbstractContact implements HasEmail, HasPhoneNumber {
//   public abstract phone: number; // must be implemented by non-abstract subclasses

//   constructor(
//     public name: string,
//     public email: string // must be public to satisfy HasEmail
//   ) {}

//   abstract sendEmail(): void; // must be implemented by non-abstract subclasses
// }

/**
 * (6) implementors must "fill in" any abstract methods or properties
 */
// class ConcreteContact extends AbstractContact {
//   constructor(
//     public phone: number, // must happen before non property-parameter arguments
//     name: string,
//     email: string
//   ) {
//     super(name, email);
//   }
//   sendEmail() {
//     // mandatory!
//     console.log("sending an email");
//   }
// }
