import { Component } from '@angular/core';
import {RouteService} from "../../../logic-components/services/RouteService";
import { Route } from 'src/app/logic-components/classes/Route';

@Component({
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.css']
})
export class RouteFormComponent {
  route: Route;

  constructor(private routeService: RouteService) {
    this.route = new Route();
  }

  onSubmit() {
    // Envía el nuevo route al servidor a través del servicio si es necesario
    this.routeService.saveRoute(this.route).subscribe(
      (response: any) => {
        // hacer un alert de la respuesta
        // alert('Route agregado correctamente' + response.name + " - " + response.description + " - " + response.routeID);
        alert('Route agregado correctamente: ' + JSON.stringify(response));

        // Puedes redirigir o realizar otras acciones después de agregar el route
      },
      (error: any) => {
        console.error('Error al agregar el route:', error);
        // Maneja el error apropiadamente
      }
    );
  }
}
