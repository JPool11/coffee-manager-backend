import { Injectable } from '@nestjs/common';
import { CreateLotDto } from '../dto/lotsDTO/create-lot.dto';
import { UpdateLotDto } from '../dto/lotsDTO/update-lot.dto';

@Injectable()
export class LotsService {
    private lots = [];

    create(createLotDto: CreateLotDto) {
        const newLot = {
            id: Date.now(), // De nuevo, esto es solo un ejemplo
            ...createLotDto,
        };
        this.lots.push(newLot);
        return newLot;
    }

    findAll() {
        return this.lots;
    }

    findByFarm(farmId: number) {
        return this.lots.filter(lot => lot.farmId === farmId);
    }

    findOne(id: number) {
        return this.lots.find(lot => lot.id === id);
    }

    update(id: number, updateLotDto: UpdateLotDto) {
        const lotIndex = this.lots.findIndex(lot => lot.id === id);
        if (lotIndex >= 0) {
            this.lots[lotIndex] = { ...this.lots[lotIndex], ...updateLotDto };
            return this.lots[lotIndex];
        }
        return null;
    }


    remove(id: number) {
        const lotIndex = this.lots.findIndex(lot => lot.id === id);
        if (lotIndex >= 0) {
            const [deletedLot] = this.lots.splice(lotIndex, 1);
            return deletedLot;
        }
        return null;
    }
}
