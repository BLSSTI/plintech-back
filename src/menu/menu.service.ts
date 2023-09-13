import { Injectable } from '@nestjs/common';

import { MenuRepository } from './menu.repository';
import {dayjs} from '../utils/dayjs.config';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PrismaService } from 'src/database/prisma.service';
import { CreateMenuDto, MenuDto } from './dto/menu.dto';


@Injectable()
export class MenuService {
  constructor(
    private readonly menuRepository: MenuRepository,
    
  ) {}

  async findAll(): Promise<MenuDto[]> {
    return this.menuRepository.findAll();
  }

  async findByPeriod(): Promise<MenuDto> {
    const brazilTime = dayjs()
    const startNight = brazilTime.clone().set('hour', 18).set('minute', 0).set('second', 0);
    const endNight = brazilTime.clone().set('hour', 6).set('minute', 0).set('second', 0);
    dayjs
    let isNight: boolean;

    if (startNight.isBefore(endNight)) {
      isNight = brazilTime.isAfter(startNight) && brazilTime.isBefore(endNight);
    } else {
      isNight = brazilTime.isAfter(startNight) || brazilTime.isBefore(endNight);
    }

    if (isNight) {
      return  await this.menuRepository.findByPeriod('noturno');
    } else {
      return  await this.menuRepository.findByPeriod('diurno');
    }
  
  }

  async findOne(id: string | number): Promise<MenuDto | null> {
    return this.menuRepository.findOne(id);
  }

  async create(data: CreateMenuDto): Promise<MenuDto> {
    return this.menuRepository.create(data);
  }

  async update(id: string | number, data: UpdateMenuDto): Promise<MenuDto | null> {
    return this.menuRepository.update(id, data);
  }

  async remove(id: string | number): Promise<MenuDto | null> {
    return this.menuRepository.remove(id);
  }
}