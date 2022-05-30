import { InfrastructureModule } from "../infrastructure/index";
import { ClinicService } from "./clinicService";
export class ServiceModule {
  public getServiceModule() {
    const infrastrutureModule = new InfrastructureModule();
    const { clinicRepository } = infrastrutureModule.getInfrastructureModule();
    const clinicService = new ClinicService(clinicRepository);
    return { clinicService };
  }
}
