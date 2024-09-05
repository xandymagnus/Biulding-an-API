import { request, Request, Response } from "express";
import type petType from "./src/types/petType";
import EnumSpecies from "./enum/EnumSpecies";

let petList: Array<petType> = [];

let id = 0;
function generateId() {
  id = id + 1;
  return id;
}
export default class PetController {
    
    createPet(req: Request, res: Response) {
        const { adopted, species, birthDate, name } = <petType>req.body;

            if(!Object.values(EnumSpecies).includes(species)) {
                 return res.status(400).json({ error: "Invalid Specie" });
            };
            
        const newPet: petType = { id:generateId(), adopted, species, birthDate, name };

        petList.push(newPet);
        return res.status(201).json(newPet);
    }


    petList(req: Request, res: Response) {
        return res.status(200).json(petList);
    }

    updatePet(req: Request, res: Response) {
        const { id } = req.params;
        const { adopted, species, birthDate, name } = req.body as petType;
        const pet = petList.find((pet) => pet.id === Number(id));

        if (!pet) {
            return res.status(404).json({ message: "Pet not found" });
        }

        pet.name = name;
        pet.birthDate = birthDate;
        pet.species = species;
        pet.adopted = adopted;

            return res.status(200).json(pet)
    }

    deletePet(req: Request, res: Response) {
        const { id } = req.params;
        const pet = petList.find((pet) => pet.id === Number(id));

        if (!pet) {
            return res.status(404).json({ error: "Pet Not Found" });
        }

        const index = petList.indexOf(pet);

        petList.splice(index, 1);

            return res.status(200).json({ message: "Pet Successfully Deleted" })
    }
}

