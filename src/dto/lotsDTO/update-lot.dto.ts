import { PartialType } from '@nestjs/mapped-types';
import { CreateLotDto } from '../lotsDTO/create-lot.dto';

export class UpdateLotDto extends PartialType(CreateLotDto) {}
