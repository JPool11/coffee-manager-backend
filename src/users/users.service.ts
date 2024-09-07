import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/userDTO/create-user.dto';
import { UpdateUserDto } from '../dto/userDTO/update-user.dto';

@Injectable()
export class UsersService {
    private users = [];

    create(createUserDto: CreateUserDto) {
        const newUser = { 
            id: Date.now(), 
            ...createUserDto 
        };
        this.users.push(newUser);
        return newUser;
    }

    findAll() {
        return this.users;
    }

    findOne(id: number) {
        return this.users.find(user => user.id === id);
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex >= 0) {
            this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
            return this.users[userIndex];
        }
        return null;
    }

    remove(id: number) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex >= 0) {
            const [deletedUser] = this.users.splice(userIndex, 1);
            return deletedUser;
        }
        return null;
    }
}
