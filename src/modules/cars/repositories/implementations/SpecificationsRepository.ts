import { ISpecificationRepository,ICreateSpecificationDTO } from "../ISpecificationsRepository";
import { Specification } from "../../entities/Specification";


class SpecificationsRepository implements ISpecificationRepository{
    private specifications: Specification[];

    constructor(){
        this.specifications=[];
    }


    create({ description, name }: ICreateSpecificationDTO): void {
        const specifications = new Specification();

        Object.assign(specifications, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specifications);
    }

    findByName(name: String): Specification{
        const specifications = this.specifications.find(specifications => specifications.name === name);
        return specifications;
    }

}

export { SpecificationsRepository };