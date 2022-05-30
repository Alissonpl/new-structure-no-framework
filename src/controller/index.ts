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
    const path = route.split("/")[1];
    const routers = [
      {
        clinic: "clinic",
        routers: await this.clinicController.Router(
          method,
          route,
          headers,
          pathParameters,
          queryStringParameters,
          body
        ),
      },
    ];

    for (let i = 0; i < routers.length; i++) {
      if (routers[i][path]) {
        return routers[i].routers;
      }
    }

    return { statusCode: 404 };
  }
}
