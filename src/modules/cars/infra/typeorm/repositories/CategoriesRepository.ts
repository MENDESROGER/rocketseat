import { getRepository, Repository } from "typeorm";
import { ICategoriesRepository, ICreateCategoryDTO } from "@modules/cars/repositories/ICategoriesRepository";
import { Category } from "../entities/Category";

class CategoriesRepository implements ICategoriesRepository{
     
    private repository: Repository<Category>;

    private static INSTANCE: CategoriesRepository;

    constructor(){
       this.repository = getRepository(Category);
    }

    async create({description, name}: ICreateCategoryDTO): Promise<void>{ 
        const category = this.repository.create({
            name,
            description,           
        });

        await this.repository.save(category);
    }

    async list(): Promise<Category[]>{
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne( { name } );
        return category;
    }

}

export { CategoriesRepository }