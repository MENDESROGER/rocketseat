import {Request, Response } from "express";
import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";


class CreateSpecificationController{
  constructor(private createSpecificationsUseCase: CreateSpecificationsUseCase){}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createSpecificationsUseCase.execute({ name, description });

    return response.status(201).send();
  }

}

export { CreateSpecificationController }