export default class DateConverter {
    date: Date;
    constructor(date: Date) {
        this.date = date;
    }

    getDateDifferenceString(inputDate?: Date): string {
        if (inputDate === undefined) {
            inputDate = new Date();
        }

        const secondsDifference = Math.floor((inputDate.valueOf() - this.date.valueOf()) / 1000);
        if (secondsDifference < 60)
        {
            return `${secondsDifference} секунд назад`;
        }
        else if (secondsDifference < 3600)
        {
            const minutes = Math.floor(secondsDifference / 60);
            return `${minutes} минут назад`;
        }
        else if (secondsDifference < 3600 * 24)
        {
            const hours = Math.floor(secondsDifference / 3600);
            return `${hours} часов назад`;
        }
        else if (inputDate.getFullYear() === this.date.getFullYear())
        {
            const month = this.getMonthName(this.date.getMonth());
            return `${this.date.getDay()} ${month} в ${this.date.getHours()}:${this.date.getMinutes()}`;
        }
        else
        {
            const month = this.getMonthName(this.date.getMonth());
            return `${this.date.getDay()} ${month} ${this.date.getFullYear()}`;
        }
    }

    getMonthName(month: number): string {
        switch (month) {
            case 1: return 'января';
            case 2: return 'февраля';
            case 3: return 'марта';
            case 4: return 'апреля';
            case 5: return 'мая';
            case 6: return 'июня';
            case 7: return 'июля';
            case 8: return 'августа';
            case 9: return 'сентября';
            case 10: return 'октября';
            case 11: return 'ноября';
            case 12: return 'декабря';
        }

        throw new Error('Argument Error: Invalid month number');
    }
}