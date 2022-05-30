import { ClinicController } from "./clinic/clinicController";
import { ServiceModule } from "../service/index";
export class ControllerModule {
  private clinicController: ClinicController;
  constructor() {
    this.getControllerModule();
  }
  private getControllerModule() {
    const serviceModule = new ServiceModule();
    const { clinicService } = serviceModule.getServiceModule();
    this.clinicController = new ClinicController(clinicService);
  }

  public async Routers(
    method: string,
    route: string,
    headers?: any,
    pathParameters?: any,
    queryStringParameters?: any,
    body?: any
  ) {
    const routesClinic = await this.clinicController.Router(
      headers,
      pathParameters,
      queryStringParameters,
      body
    );

    const routes = {
      ...routesClinic,
    };
    const findRoute = routes[method][route];

    if (findRoute) {
      return findRoute.function;
    }

    return {
      statusCode: 404,
      body: JSON.stringify({
        message: "NOT FOUND ROUTE",
      }),
    };
  }
}
