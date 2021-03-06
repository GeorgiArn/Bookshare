export interface IUser {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    requests: [];
    books: [];
    roles: Array<string>;
}