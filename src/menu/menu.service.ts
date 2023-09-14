import { Injectable } from '@nestjs/common';

import { MenuRepository } from './menu.repository';
import {dayjs} from '../utils/dayjs.config';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { CreateMenuDto, MenuDto } from './dto/menu.dto';


@Injectable()
export class MenuService {
  constructor(
    private readonly menuRepository: MenuRepository,
    
  ) {}

   findAll(): Promise<MenuDto[]> {
    return this.menuRepository.findAll();
  }

   findByPeriod(): Promise<MenuDto> {
    const brazilTime = dayjs();
    const startNight = brazilTime.clone().set('hour', 18).set('minute', 0).set('second', 0);
    const endNight = brazilTime.clone().set('hour', 6).set('minute', 0).set('second', 0);
  
    const isNight =
      startNight.isBefore(endNight)
        ? brazilTime.isAfter(startNight) && brazilTime.isBefore(endNight)
        : brazilTime.isAfter(startNight) || brazilTime.isBefore(endNight);
  
    return  this.menuRepository.findByPeriod(isNight ? 'noturno' : 'diurno');
  }

   findOne(id: string): Promise<MenuDto | null> {
    return this.menuRepository.findOne(id);
  }

   create(data: CreateMenuDto): Promise<MenuDto> {
    return this.menuRepository.create(data);
  }

   update(id: string, data: UpdateMenuDto): Promise<MenuDto | null> {
    return this.menuRepository.update(id, data);
  }

   remove(id: string): Promise<MenuDto | null> {
    return this.menuRepository.remove(id);
  }
}