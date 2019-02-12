import fillzero from './fillzero';

export default time =>{
    let date = new Date();
    console.log(date);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    return `${year}:${fillzero(month)}:${fillzero(day)}:${fillzero(hour)}:${fillzero(minute)}:${fillzero(second)}`;
}