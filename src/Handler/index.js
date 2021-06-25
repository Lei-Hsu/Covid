//#region 人數format
export const populationFormat = (population) => {
  return new Intl.NumberFormat().format(population)
}
//#endregion