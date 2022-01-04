import { IConstantRegExp } from '../interfaces/iconstant_regexp';

export const CONSTANT_REGEXP: IConstantRegExp = {
  email: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
  phone: /^1[0-9]{8,9}$/,
  fullName: /^[A-Za-z][A-Za-z\'\-\.]+([\ A-Za-z][A-Za-z\'\-\.]+)*/,
};
