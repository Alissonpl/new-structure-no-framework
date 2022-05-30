import { ClinicService } from "../../service/clinicService";

export class ClinicController {
  private clinicService: ClinicService;

  constructor(clinicService: ClinicService) {
    this.clinicService = clinicService;
  }

  public async Router(
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
        "/clinic/{clinicId}/user": {
          function: await this.getPost(request),
        },
      },
    };
    return routes;
  }

  private getClinic(request: any) {
    return this.clinicService.getClinic(request);
  }

  private getPost(request: any) {
    return this.clinicService.getPost(request);
  }
}
