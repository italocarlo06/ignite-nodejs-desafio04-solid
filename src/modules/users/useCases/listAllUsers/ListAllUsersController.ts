import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const  id =  request.headers.id as string;
    try {
      const users = this.listAllUsersUseCase.execute({ user_id: id });  
      return response.json(users);
    } catch (error) {
      return response.status(400).json({ error: "Erro while list users"});
    }
    


  }
}

export { ListAllUsersController };
