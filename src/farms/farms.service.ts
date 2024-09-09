import { Injectable } from '@nestjs/common';
import { CreateFarmDto } from '../dto/farmsDTO/create-farm.dto';

@Injectable()
export class FarmsService {
    private farms = [];

    create(createFarmDto: CreateFarmDto) {
        const newFarm = {
            id: Date.now(), // Esto solo es un ejemplo, deberías usar un ID generado por la base de datos
            ...createFarmDto,
        };
        this.farms.push(newFarm);
        return newFarm;
    }

    findAll() {
        return this.farms;
    }

    findOne(id: number) {
        return this.farms.find(farm => farm.id === id);
    }

    update(id: number, updateFarmDto: Partial<CreateFarmDto>) {
        const farmIndex = this.farms.findIndex(farm => farm.id === id);
        if (farmIndex >= 0) {
            this.farms[farmIndex] = { ...this.farms[farmIndex], ...updateFarmDto };
            return this.farms[farmIndex];
        }
        return null;
    }

    remove(id: number) {
        const farmIndex = this.farms.findIndex(farm => farm.id === id);
        if (farmIndex >= 0) {
            const [deletedFarm] = this.farms.splice(farmIndex, 1);
            return deletedFarm;
        }
        return null;
    }
}
