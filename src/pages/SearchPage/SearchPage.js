import React, { useCallback, useState } from "react";
import SearchDataBox from "../../components/Search/SearchDataBox";
import SelectBox from "../../components/Search/SelectBox";
import { API_KEY } from "../../KEY/APIKEY";
import LoadingPage from "../LoadingPage/LoadingPage";
import useFetchAllCountry from "../../customHooks/useFetchAllCountry";
import { SearchWrapper, InputArea, SelectArea, ShowDataArea, Warning } from './Theme/index'



function SearchPage() {
  const [searchData, setSearchData] = useState("");
  const [countryData, setCountryData] = useState("");
  const [allCountryData, setAllCountryData] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [err, setErr] = useState(false);
  // input value
  const handleChange = useCallback((e) => {
    setSearchData(e.target.value);
  }, []);
  // button sent request to API
  const SearchSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // pending -> loadingPage
      setIsPending(true);
      fetch(
        "https://covid-193.p.rapidapi.com/statistics?country=" + searchData,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
          },
        }
      )
        .then((res) => res.json())
        // 取消loadingPage
        .then((data) => setCountryData(data.response[0], setIsPending(false)))
        // 回傳失敗呈現錯誤
        .then(setErr(true))
        .catch((err) => {
          alert(err);
        });
    },
    [searchData]
  );
  //傳給子層回傳回來的method
  const handleChangeSelectBox = (event) => {
    setCountryData(event.target.value);
  };
  useFetchAllCountry(setAllCountryData);
  return (
    <>
      <SearchWrapper>
        <InputArea>
          <input
            type="text"
            placeholder="請輸入英文國家名"
            onChange={handleChange}
            value={searchData}
            onFocus={() => setErr(false)}
          />
          <button onClick={SearchSubmit}>搜尋</button>
        </InputArea>

        {
          err &&
          <Warning>請重新輸入英文國家名</Warning>
        }

        <SelectArea>
          {
            allCountryData ?
              (
                <SelectBox
                  allCountryData={allCountryData}
                  countryData={countryData}
                  setCountryData={setCountryData}
                  handleChangeSelectBox={handleChangeSelectBox}
                />
              )
              :
              (
                <LoadingPage />
              )
          }
        </SelectArea>
        {
          isPending ?
            (
              <LoadingPage />
            )
            :
            (
              <ShowDataArea>
                {countryData && <SearchDataBox countryData={countryData} />}
              </ShowDataArea>
            )
        }
      </SearchWrapper>
    </>
  );
}

export default SearchPage;
