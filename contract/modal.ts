import { PersistentVector } from "near-sdk-as";

// export const MAX_SUPPLY = new Uint32Array(2)


// Creamos una clase llamada Building para cada edificación
@nearBindgen
export class Building {
    token_id: string;
    owner_id: string;
    title: string;
    sold: boolean;
    amount: number;
    description: string;
    location: string;
    size: number;
    media: string;

    //Inicializamos el objeto
    constructor(token: string, owner: string, titleArg: string, amountArg: number, descriptionArg: string, locationArg: string, sizeArg: number, mediaArg: string) {
        this.token_id = token,
        this.owner_id = owner,
        this.title = titleArg,
        this.sold = false,
        this.amount = amountArg,
        this.description = descriptionArg,
        this.location = locationArg,
        this.size = sizeArg,
        this.media = mediaArg
    }
}

export const buildings = new PersistentVector<Building>('b');



