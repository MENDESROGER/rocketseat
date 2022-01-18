import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

import { CreateSpecificationController } from "./CreateSpecificationController";

import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";


const specificationsRepository = new SpecificationsRepository();

const createSpecificationsUseCase = new CreateSpecificationsUseCase(specificationsRepository);

const createSpecificationsController = new CreateSpecificationController(
    createSpecificationsUseCase
    );

export { createSpecificationsController } 