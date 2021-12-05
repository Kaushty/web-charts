export const randomColorGenerator = (): string => {
    const randomNum = Math.floor(Math.random() * 100);
    const colorList: string[] = [
        '#99D8CE',
        '#6BC3FE',
        '#5060C1',
        '#835EC3',
        '#B16DBD',
        '#FF85BC',
        '#FF7E83',
        '#A2D959',
        '#59BA5E',
    ];
    return colorList[randomNum % colorList.length];
}