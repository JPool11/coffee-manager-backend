import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LotsService } from './lots.service';
import { CreateLotDto } from '../dto/lotsDTO/create-lot.dto';

@Controller('lots')
export class LotsController {
    constructor(private readonly lotsService: LotsService) { }

    @Post()
    create(@Body() createLotDto: CreateLotDto) {
        return this.lotsService.create(createLotDto);
    }

    @Get()
    findAll() {
        return this.lotsService.findAll();
    }

    @Get('farm/:farmId')
    findByFarm(@Param('farmId') farmId: number) {
        return this.lotsService.findByFarm(farmId);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.lotsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateLotDto: Partial<CreateLotDto>) {
        return this.lotsService.update(id, updateLotDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.lotsService.remove(id);
    }
}
