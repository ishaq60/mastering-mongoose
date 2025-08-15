export interface IUser{
    firstname:string,
    lastname:string,
    age:number,
    email:string,
    password:string,
    role:"user"|"admin"
}
export interface UserIntanceMethods{
    hashPassword(password:string):string
}