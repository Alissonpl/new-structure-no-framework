import { InfrastrutureModule } from "../infrastructure/index";
import { ClinicService } from "./clinicService";
export class ServiceModule {
  public getServiceModule() {
    const infrastrutureModule = new InfrastrutureModule();
    const { clinicRepository } = infrastrutureModule.getInfrastrutureModule();
    const clinicService = new ClinicService(clinicRepository);
    return { clinicService };
  }
}
