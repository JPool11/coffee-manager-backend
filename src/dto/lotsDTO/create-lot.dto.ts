export class CreateLotDto {
    readonly name: string;
    readonly area: number; // Tamaño del lote en metros cuadrados o hectáreas
    readonly cropType: string; // Tipo de cultivo
    readonly farmId: number; // ID de la finca a la que pertenece
}
