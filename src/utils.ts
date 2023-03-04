export const numberToSimplifiedChinese = (num: number) => {
    switch (num) {
        case 2:
            return "二";
        case 3:
            return "三";
        case 4:
            return "四";
        case 5:
            return "五";
        default:
            return "";
    }
}



export const getIChingKidName = (number: number, firstED: any, secondED: any) => {
    let yaoList = firstED.yaoming.concat(secondED.yaoming);
    switch (number) {
        case 0:
            return `上${yaoList[5]}`
        case 1:
            return `初${yaoList[0]}`
        default:
            return `${yaoList[number - 1]}${numberToSimplifiedChinese(number)}`
    }

}

export const get3FiguresRandom = () => {
    return Math.floor(Math.random() * 899) + 100;
}