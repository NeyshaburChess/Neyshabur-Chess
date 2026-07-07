import moment from "moment-jalaali";

moment.loadPersian({ usePersianDigits: true });

export function formatJalali(date: string | Date) {
  return moment(date).format("jYYYY/jMM/jDD");
}