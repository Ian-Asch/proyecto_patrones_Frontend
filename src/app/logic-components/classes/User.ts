export class User {
    public userID: number;
    public name: string;
    public identificationNumber: string;
    public companyName: string;
    public userType: UserType;
    public password: string;

    constructor() {
        this.userID = 0;
        this.name = "";
        this.identificationNumber = "";
        this.companyName = "";
        this.userType = UserType.CLIENT;
        this.password = "";
    }
}

export enum UserType {
    CARRIER = "Carrier",
    CLIENT = "Client",
    ADMINISTRATOR = "Administrator",
    APPROVER = "Approver",
    VIEWER = "Viewer"
}

