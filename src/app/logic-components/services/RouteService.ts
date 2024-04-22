import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from "../classes/Route";

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  private apiUrl = 'http://localhost:8080/routes';

  constructor(private http: HttpClient) { }

  public getAllRoutes() {
    return this.http.get<Array<Route>>(this.apiUrl);
  }

  public saveRoute(route: Route) {
    return this.http.post<Route>(this.apiUrl, route);
  }

  public updateRoute(routeId: number, updatedRoute: Route) {
    const updateUrl = `${this.apiUrl}/${routeId}`;
    return this.http.put<Route>(updateUrl, updatedRoute);
  }

  public getRouteById(routeId: number) {
    const routeUrl = `${this.apiUrl}/${routeId}`;
    return this.http.get<Route>(routeUrl);
  }

  public deleteRoute(routeId: number) {
    const deleteUrl = `${this.apiUrl}/${routeId}`;
    return this.http.delete(deleteUrl);
  }

  public cloneRoute(routeId: number) {
    const cloneUrl = `${this.apiUrl}/${routeId}/clone`;
    return this.http.post(cloneUrl, {});
  }
}
