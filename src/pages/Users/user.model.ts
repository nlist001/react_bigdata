import { BaseModel } from "../../model/BaseModel";

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IGeo {
  lat: string;
  lng: string;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export type UserId = string;

export interface IUser {
    id: UserId;
    ind: number;
    name: string;
    email: string;

    region: string;
    department: string;
    age: number;
    currency: string;
    address: string;
    postalZip: string;
    country: string;
    alphanumeric: string;
    startdate: number;
    enddate: number;
    position: string;
    pan: string;
    trusted: boolean;
}

export class User extends BaseModel<IUser> implements IUser {
    id = '';
    ind = 0;
    name = '';
    email = '';
    region = '';
    department = '';
    age = 0;
    currency = '';
    address = '';
    postalZip = '';
    country = '';
    alphanumeric = '';
    startdate = Date.now();
    enddate = Date.now();
    position = '';
    pan = '';
    trusted = false;

    constructor(o?: object) {
      super();
      super.checkFields(o)
    }
}