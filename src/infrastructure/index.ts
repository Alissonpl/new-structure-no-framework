import { ClinicRepository } from "../infrastructure/repository/clinicRepository";
import knex from "knex";
import { knexConfig } from "../../dbconfig";
export class InfrastrutureModule {
  public getInfrastrutureModule() {
    const databaseInstance = this.databaseInstance();
    const clinicRepository = new ClinicRepository({
      knex: databaseInstance,
    });
    return { clinicRepository };
  }

  private databaseInstance() {
    const connection = knex(knexConfig);

    return connection;
  }
}
