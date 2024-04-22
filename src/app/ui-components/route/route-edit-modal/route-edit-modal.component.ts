import {Component, Input, OnInit} from '@angular/core';
import {Route} from "../../../logic-components/classes/Route";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {RouteService} from "../../../logic-components/services/RouteService";

@Component({
  selector: 'app-route-edit-modal',
  templateUrl: './route-edit-modal.component.html',
  styleUrls: ['./route-edit-modal.component.css']
})
export class RouteEditModalComponent implements OnInit{
  @Input() route: Route | undefined;
  toUpdateRoute: Route = new Route();// Recibe el objeto Route del componente padre
  constructor(public activeModal: NgbActiveModal, private routeService: RouteService) {
  }

  ngOnInit() {
    if (this.route) {
      // @ts-ignore
      this.toUpdateRoute = new Route(this.route?.routeID, this.route?.name, this.route?.description, this.route?.startPointID, this.route?.endPointID, this.route?.shippingCost, this.route?.approved, this.route?.durationType)
      console.log('route', this.toUpdateRoute);
    }
  }

  onSubmit() {
    // Llama al servicio para actualizar el Route
    // @ts-ignore
    this.routeService.updateRoute(this.toUpdateRoute.routeID, this.toUpdateRoute).subscribe(
      (updatedRoute) => {
        alert('Route actualizado:'+ JSON.stringify(updatedRoute));
        // Realiza acciones adicionales después de actualizar el route si es necesario

        // Cierra el modal
        this.activeModal.close('Cambios guardados');
      },
      (error) => {
        alert('Error al actualizar el route:'+ JSON.stringify(error));
        // Maneja el error apropiadamente

        // Cierra el modal (opcional, dependiendo de cómo quieras manejar los errores)
        this.activeModal.dismiss();
      }
    );
  }
}




