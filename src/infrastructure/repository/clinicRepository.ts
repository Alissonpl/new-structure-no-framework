import { KnexRepository } from "./baseRepository";

export interface Clinic {
  id: string;
  name: string;
  count: number;
  price: number;
}

export class ClinicRepository extends KnexRepository<Clinic> {
  constructor({ knex }) {
    super(knex, "Clinic");
  }

  public async postClinic(request) {
    const response = await this.find();

    return { request, response };
  }
}
