import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateCategoryUseCase } from "../modules/cars/useCases/createCategory/CreateCategoryUseCase";

const specificationsRoutes = Router();
const specificationRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateCategoryUseCase(
    specificationRepository
  );
  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRoutes };
