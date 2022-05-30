import { Callback, Context, Handler } from "aws-lambda";
import { knex } from "knex";
import { ControllerModule } from "./src/controller";
import { ClinicController } from "./src/controller/clinic/clinicController";
import { ClinicRepository } from "./src/infrastructure/repository/clinicRepository";
import { ServiceModule } from "./src/service";

const routerRequest = (routeKey: string) => {
  const routeKeyArray = routeKey.split(" ");

  const method = routeKeyArray[0];
  const route = routeKeyArray[1];
  return {
    method,
    route,
  };
};

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback
) => {
  const { method, route } = routerRequest(event.routeKey);

  const controller = new ControllerModule();
  const response = await controller.Routers(
    method,
    route,
    event?.headers,
    event?.pathParameters,
    event?.queryStringParameters,
    event?.body
  );

  return response;
};
