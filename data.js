const input = prompt('Enter a date: ');
const [day, month, year] = input.split('.');
const inputDate = new Date(`${year}-${month}-${day}`);
const dayOfWeek = inputDate.getDay();
switch (dayOfWeek) {
    case 0:
        console.log('Воскресенье');
        break;
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник');
        break;
    case 3:
        console.log('Среда');
        break;
    case 4:
        console.log('Четверг');
        break;
    case 5:
        console.log('Пятница');
        break;
    case 6:
        console.log('Суббота');
        break;
}