import { ClinicRepository } from "../infrastructure/repository/clinicRepository";

export class ClinicService {
  private clinicRepository: ClinicRepository;
  constructor(clinicRepository: ClinicRepository) {
    this.clinicRepository = clinicRepository;
  }
  public async getClinic(request: any) {
    return request;
  }

  public async getPost(request: any) {
    return this.clinicRepository.postClinic(request);
  }
}
