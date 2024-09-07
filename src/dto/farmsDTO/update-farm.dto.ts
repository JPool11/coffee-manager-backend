import { PartialType } from '@nestjs/mapped-types';
import { CreateFarmDto } from '../../dto/farmsDTO/create-farm.dto';

export class UpdateFarmDto extends PartialType(CreateFarmDto) {}
