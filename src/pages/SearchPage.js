import React, { useCallback, useState, useRef } from "react";
import styled from "styled-components";
import SearchDataBox from "../components/SearchDataBox";
import SelectBox from "../components/SelectBox";
import { device } from "../media/media";
import { API_KEY } from "../KEY/APIKEY";
import LoadingPage from "./LoadingPage";
import useFetchAllCountry from "../customHooks/useFetchAllCountry";

const SearchWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: hide 250ms ease-in forwards;
  @keyframes hide {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
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
    font-size: 18px;
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
    font-size: 16px;
    color: #ffffff;
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
const Warnning = styled.p`
  color: red;
  font-size: 16px;
`;
function SearchPage() {
  const [searchData, setSearchData] = useState("");
  const [countryData, setCountryData] = useState("");
  const [allCountryData, setAllcounryData] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [err, setErr] = useState(false);
  // input value
  const handleChange = useCallback((e) => {
    setSearchData(e.target.value);
  }, []);
  // button sent requset to API
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
  const select = useRef();
  useFetchAllCountry(setAllcounryData);
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
        {err && <Warnning>請重新輸入英文國家名</Warnning>}
        <SelectArea ref={select}>
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
