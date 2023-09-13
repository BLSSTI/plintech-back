import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

// Configure o fuso horário padrão
dayjs.tz.setDefault('America/Sao_Paulo');

export {dayjs};