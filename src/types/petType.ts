import EnumSpecies from "../../enum/EnumSpecies";

type petType = {
    id: number;
    name: string;
    species: EnumSpecies;
    adopted: boolean;
    birthDate: Date;
}

export default petType;