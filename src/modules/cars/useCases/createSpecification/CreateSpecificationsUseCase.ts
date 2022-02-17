import { inject, injectable } from "tsyringe";
import { SpecificationsRepository } from "../../infra/typeorm/repositories/SpecificationsRepository";
import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";
import { AppError } from "../../../../shared/errors/AppError";

interface IRequest{
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationsUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationsRepository: ISpecificationRepository ){    
    };

    async execute({name, description}: IRequest): Promise<void> {
      const specificationsAlreadyExists = await this.specificationsRepository.findByName(
          name
      );  

      if(specificationsAlreadyExists){
          throw new AppError("Specification already exists!");
      }

      this.specificationsRepository.create({
          name,
          description,
      });
    }
}

export { CreateSpecificationsUseCase };