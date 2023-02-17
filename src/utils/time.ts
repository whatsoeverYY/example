export function getTheDaysOfTheYear(year: number) {
    if (year % 400 === 0) {
        return 366
    }
    if (year % 4 === 0 && year % 100 !== 0) {
        return 366
    }
    return 365
}