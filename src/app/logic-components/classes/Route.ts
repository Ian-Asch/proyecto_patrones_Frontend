export class Route {
  routeID: number;
  name: string;
  description: string;
  startPointID: number;
  endPointID: number;
  shippingCost: number;
  approved: boolean;
  durationType: 'Short' | 'Medium' | 'Long';

  constructor(
    routeID: number = 0,
    name: string = '',
    description: string = '',
    startPointID: number = 0,
    endPointID: number = 0,
    shippingCost: number = 0,
    approved: boolean = false,
    durationType: 'Short' | 'Medium' | 'Long' = 'Short'
  ) {
    this.routeID = routeID;
    this.name = name;
    this.description = description;
    this.startPointID = startPointID;
    this.endPointID = endPointID;
    this.shippingCost = shippingCost;
    this.approved = approved;
    this.durationType = durationType;
  }
}
