const useFetchBoardCountry = (wholeData) => {
  //全球資料
  let global = wholeData
    .filter((data) => data.continent !== data.country)
    .sort((a, b) => b.cases.new - a.cases.new)
    .slice(0, 5);
  //亞洲資料
  let asia = wholeData
    .filter(
      (data) => data.continent === "Asia" && data.continent !== data.country
    )
    .sort((a, b) => b.cases.new - a.cases.new)
    .slice(0, 5);
  //歐洲資料
  let europe = wholeData
    .filter(
      (data) => data.continent === "Europe" && data.continent !== data.country
    )
    .sort((a, b) => b.cases.new - a.cases.new)
    .slice(0, 5);
  //美洲資料
  let nAmerica = wholeData.filter((data) => data.continent === "North-America");
  let sAmerica = wholeData.filter((data) => data.continent === "South-America");
  Array.prototype.push.apply(nAmerica, sAmerica);
  let americaTatol = nAmerica
    .filter(
      (data) =>
        data.continent === "North-America" && data.continent !== data.country
    )
    .sort((a, b) => b.cases.new - a.cases.new)
    .slice(0, 5);
  //非洲資料
  let africa = wholeData
    .filter(
      (data) => data.continent === "Africa" && data.continent !== data.country
    )
    .sort((a, b) => b.cases.new - a.cases.new)
    .slice(0, 5);
  //大洋洲資料
  let oceania = wholeData
    .filter(
      (data) => data.continent === "Oceania" && data.continent !== data.country
    )
    .sort((a, b) => b.cases.new - a.cases.new)
    .slice(0, 5);
  return { global, asia, europe, americaTatol, africa, oceania };
};

export default useFetchBoardCountry;
