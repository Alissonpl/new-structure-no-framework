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

    const r = [
      {
        GET: "GET",
        "/clinic/{clinicId}": "/clinic/{clinicId}",
        function: await this.getClinic(request),
      },
      {
        POST: "POST",
        "/clinic/{clinicId}/user/{userId}": "/clinic/{clinicId}/user/{userId}",
        function: await this.getPost(request),
      },
    ];

    for (let i = 0; i < r.length; i++) {
      if (r[i][method] && r[i][route]) {
        return r[i].function;
      }
    }

    //const response = r.find((i) => i[method] && i[route]);
    // if (response) {
    //   return response.function;
    // }
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
