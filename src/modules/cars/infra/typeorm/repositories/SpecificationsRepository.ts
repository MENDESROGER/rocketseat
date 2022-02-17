import { getRepository, Repository } from "typeorm";
import { ISpecificationRepository, ICreateSpecificationDTO } from "@modules/cars/repositories/ISpecificationsRepository";
import { Specification } from "../entities/Specification";

class SpecificationsRepository implements ISpecificationRepository{
    private repository: Repository<Specification>

    constructor(){
        this.repository = getRepository(Specification);
    }


    async create({ description, name }: ICreateSpecificationDTO): Promise<void> {  
        const specifications = this.repository.create( {
            name,
            description,           
        });

          await this.repository.save(specifications);
    }

    async findByName(name: string): Promise<Specification>{
        const specifications = await this.repository.findOne( { name } );                            
        return specifications;
    }

}

export { SpecificationsRepository };