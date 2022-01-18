import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest{
    name: string;
    description: string;
}

class CreateSpecificationsUseCase {
    constructor(private specificationsRepository: ISpecificationRepository ){    
    };

    execute({name, description}: IRequest): void {
      const specificationsAlreadyExists = this.specificationsRepository.findByName(
          name
      );  

      if(specificationsAlreadyExists){
          throw new Error("Specification already exists!");
      }

      this.specificationsRepository.create({
          name,
          description,
      });
    }
}

export { CreateSpecificationsUseCase };