import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from "../classes/Route";
import {BehaviorSubject, Observable, Subject, tap} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private apiUrl = 'http://localhost:8080/routes';
  private routesSubject = new BehaviorSubject<Route[]>([]);
  routes$ = this.routesSubject.asObservable();

  constructor(private http: HttpClient) { 
    this.getAllRoutes();
  }

  // public getAllRoutes() {
  //   return this.http.get<Array<Route>>(this.apiUrl);
  // }

  getAllRoutes(): void{
    this.http.get<Route[]>(this.apiUrl).subscribe(
      (initialTransporters) => {
        this.routesSubject.next(initialTransporters);
      },
      (error) => {
        console.error('Error al obtener la lista de transportistas:', error);
      }
    );
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
