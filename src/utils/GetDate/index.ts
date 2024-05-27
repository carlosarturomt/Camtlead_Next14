/**
 * This function return an Object with numbers and strings of a Date
 * @param {String} date string of a date
 * @returns Object: {day,weekday, month, year, weekdaysEs, monthEs, MonthEn, NewsMonthEs}
 */
export default function GetDate(dateStr: string): {
  day: number,
  weekday: number,
  month: number,
  year: number,
  weekdaysEs: string,
  monthEs: string,
  monthEn: string,
  nextMonthEs: string,
} {
  const strDate = new Date(dateStr);
  const day = strDate.getDate()
  const weekday = strDate.getDay()
  const month = strDate.getMonth()
  const year = strDate.getFullYear()

  const weekdayEs: { [key: number]: string } = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
  }

  const monthEs: { [key: number]: string } = {
    0: 'Enero',
    1: 'Febrero',
    2: 'Marzo',
    3: 'Abril',
    4: 'Mayo',
    5: 'Junio',
    6: 'Julio',
    7: 'Agosto',
    8: 'Septiembre',
    9: 'Octubre',
    10: 'Noviembre',
    11: 'Diciembre',
  }

  const monthEn: { [key: number]: string } = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  }

  const nextMonthEs = month === 11 ? monthEs[0] : monthEs[month + 1]

  return {
    day: day,
    weekday: weekday,
    month: month,
    year: year,
    weekdayEs: weekdayEs[weekday],
    monthEs: monthEs[month],
    monthEn: monthEn[month],
    nextMonthEs: nextMonthEs
  }
}
