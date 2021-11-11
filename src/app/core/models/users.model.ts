export class UserModel {

  public _id: string | undefined;
  public token?: string;
  public email: string | undefined;
  public name: string | undefined;
  public phone: string | undefined;
  public gender: string | undefined;
  public dob: string | undefined;
  public password: string | undefined;
  public picture: string | undefined;
  public country: any;
  public about_me: string | undefined;
  public createdAt: string | undefined;
  public updatedAt: string | undefined;
}

/*
country : {
  alpha2: "MY",
  alpha3:"MYS",
  countryCallingCodes:["+60"],
  currencies: ["MYR"],
  emoji: "🇲🇾",
  languages: ["msa", "eng"],
  name: "Malaysia",
  status: "assigned"
}
*/


// address: ""
// postcode: ""
// city: ""
// state: ""
// country: ""
// title: "Mr"
// marital_status: "Single"
// identification_no: ""
// language: "English"
// nationality: ""
// race: ""
// occupation: ""