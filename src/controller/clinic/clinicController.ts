import { ClinicService } from "../../service/clinicService";

export class ClinicController {
  private clinicService: ClinicService;

  constructor(clinicService: ClinicService) {
    this.clinicService = clinicService;
  }

  public async Router(
    method: string,
    route: string,
    headers?: any,
    pathParameters?: any,
    queryStringParameters?: any,
    body?: any
  ) {
    const request = {
      headers,
      pathParameters,
      queryStringParameters,
      body,
    };

    const routes = {
      GET: {
        "/clinic/{clinicId}": {
          function: await this.getClinic(request),
        },
      },
      POST: {
        "/clinic/{clinicId}/user/{userId}": {
          function: await this.getPost(request),
        },
      },
    };

    const findRoute = routes[method][route];
    if (findRoute) {
      return findRoute.function;
    }

    return {
      statusCode: 404,
      //body: { message: "Not Found Route" },
    };
  }

  private getClinic(request: any) {
    return this.clinicService.getClinic(request);
  }

  private getPost(request: any) {
    return this.clinicService.getPost(request);
  }
}
