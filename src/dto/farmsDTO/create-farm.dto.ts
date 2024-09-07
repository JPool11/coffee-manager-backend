export class CreateFarmDto {
    readonly name: string;
    readonly agricultureType: 'Familiar' | 'Contratada'; // Puedes usar un enum en lugar de string
    readonly country: string; // Puede ser un ID si estás relacionándolo con otra entidad
    readonly department: string; // Igual que país, puede ser un ID
    readonly cityOrMunicipality: string;
    readonly address: string;
}
