import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as  customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat)
dayjs.extend(utc);

export function formatDatetime(date: Date | dayjs.Dayjs | string) {
  return dayjs(date).format('HH:mm:ss DD/MM/YYYY')
}

export function convertToUtc(date: Date, utc: number): dayjs.Dayjs {
  return dayjs.utc(date).utcOffset(utc);
}

export { dayjs };