import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FarmsService } from './farms.service';
import { CreateFarmDto } from '../dto/farmsDTO/create-farm.dto';

@Controller('farms')
export class FarmsController {
    constructor(private readonly farmsService: FarmsService) { }

    @Post()
    create(@Body() createFarmDto: CreateFarmDto) {
        return this.farmsService.create(createFarmDto);
    }

    @Get()
    findAll() {
        return this.farmsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.farmsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateFarmDto: Partial<CreateFarmDto>) {
        return this.farmsService.update(id, updateFarmDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.farmsService.remove(id);
    }
}
