import React, { useCallback, useState } from "react";
import styled from "styled-components";
import SearchDataBox from "../../components/Search/SearchDataBox";
import SelectBox from "../../components/Search/SelectBox";
import { device } from "../../media/";
import { API_KEY } from "../../KEY/APIKEY";
import LoadingPage from "../LoadingPage/LoadingPage";
import useFetchAllCountry from "../../customHooks/useFetchAllCountry";
import { FONT, COLOR } from "../../constants/style";
import { animation } from "../../animation";

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${animation};
`;
const InputArea = styled.div`
  min-width: 60%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${device.pad} {
    flex-direction: row;
  }
  input {
    width: 100%;
    height: 6vh;
    text-align: center;
    font-size: ${FONT.md};
    border: none;
    border-bottom: 2px solid #333;
    border-radius: 0;
    outline: none;
    @media ${device.pad} {
      width: 80%;
    }
  }
  button {
    width: 100%;
    height: 6vh;
    margin-top: 10px;
    font-size: ${FONT.md};
    color: ${COLOR.secondColor};
    border-radius: 10px;
    border: none;
    background: red;
    @media ${device.pad} {
      width: 15%;
      margin-left: 15px;
    }
  }
`;
const SelectArea = styled.div`
  text-align: center;
  margin-top: 40px;
  min-width: 60%;
  @media ${device.pad} {
    margin-top: 100px;
  }
`;

const ShowDataArea = styled.div``;
const Warning = styled.p`
  color: ${COLOR.mainColor};
  font-size: ${FONT.sm};
`;
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
        {err && <Warning>請重新輸入英文國家名</Warning>}
        <SelectArea>
          {allCountryData ? (
            <SelectBox
              allCountryData={allCountryData}
              countryData={countryData}
              setCountryData={setCountryData}
              handleChangeSelectBox={handleChangeSelectBox}
            />
          ) : (
            <LoadingPage />
          )}
        </SelectArea>
        {isPending ? (
          <LoadingPage />
        ) : (
          <ShowDataArea>
            {countryData && <SearchDataBox countryData={countryData} />}
          </ShowDataArea>
        )}
      </SearchWrapper>
    </>
  );
}

export default SearchPage;
