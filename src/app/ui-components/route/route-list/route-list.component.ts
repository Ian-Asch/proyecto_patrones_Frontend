import {Component, OnInit} from '@angular/core';
import {RouteService} from "../../../logic-components/services/RouteService";
import {Route} from "../../../logic-components/classes/Route";
import {RouteEditModalComponent} from "../route-edit-modal/route-edit-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {
  routes: Route[] = [];

  constructor(private routeService: RouteService, private modalService: NgbModal) {}

  ngOnInit() {
    this.routeService.routes$.subscribe((routes: Route[]) => {
      this.routes = routes;
      console.log("routes", routes);
    });
  }

  onCloneRoute(routeId: number) {
    // Llama al servicio para actualizar el Route
    // @ts-ignore
    this.routeService.cloneRouteById(routeId).subscribe(
      (clonedRoute) => {
        alert('Route actualizado:'+ JSON.stringify(clonedRoute));
      },
      (error) => {
        alert('Error al clonar el route:'+ JSON.stringify(error));
  
      }
    );
  }
  openEditModal(routeId: number) {
    this.routeService.getRouteById(routeId).subscribe((route: any) => {
      const modalRef = this.modalService.open(RouteEditModalComponent, { size: 'lg' });
      modalRef.componentInstance.route = route;
    });
  }
  onDeleteRoute(route: Route) {
    this.routeService.deleteRoute(route.routeID).subscribe((response:any) => {
      console.log("borrado", response);
    });
  }


}

