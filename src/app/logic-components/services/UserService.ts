// transporter.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../classes/User";

const config = {
    headers: {
        'Content-Type': "application/json"
    }
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'http://localhost:8080/user';

    constructor(private http: HttpClient) { }

    public getAllUsers() {
        return this.http.get<Array<User>>(this.apiUrl);
    }

    public saveUser(user: User) {
        return this.http.post<Array<User>>(this.apiUrl, JSON.stringify(user), config);
    }

    public authUser(identificationNumber: string, password: string) {
        const authUrl = `${this.apiUrl}/auth`;
        return this.http.get<User>(authUrl, { params: { identificationNumber, password } });
    }
}
