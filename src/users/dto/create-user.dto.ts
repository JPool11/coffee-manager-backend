export class CreateUserDto {
    readonly nombre: string;
    readonly apellido: string;
    readonly celular: string;
    readonly correo: string;
    readonly cedula: string;
    readonly imagen_perfil: string;
    readonly tipo_usuario: string;
    readonly id_finca: number;
    readonly id_pase: number;
}
