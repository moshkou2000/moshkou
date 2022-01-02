export class UserModel {
  public _id: string | undefined;
  public token: string | undefined;
  public email: string | undefined;
  public name: string | undefined;
  public phone: string | undefined;
  public gender: string | undefined;
  public dob: string | undefined;
  public picture: string | undefined;
  public country: any | undefined;
  public about_me: string | undefined;
  public createdAt: string | undefined;
  public updatedAt: string | undefined;

  public constructor(init: UserModel) {
    Object.assign(this, init);
  }
}

/*
localStorage.setItem('hn1363_user', '{"_id":"user_id","token":"user_token","email":"user_email@email.com","name":"user_name","phone":"user_phone","gender":"male","dob":"04.06.1984","password":"user_password","about_me":"user_about_me","createdAt":"2021-10-27T08:25:11.803Z","updatedAt":"2021-10-27T08:25:11.803Z"}')
*/

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
