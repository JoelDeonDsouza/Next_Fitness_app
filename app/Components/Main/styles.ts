import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
    order: 2;
  }
`;

export const MainTextContainer = styled.div`
  display: flex;
  background: #d9f2f5;
  width: 50%;
  height: 100vh;
  justify-content: center;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const TextContainerBox = styled.div`
  display: flex;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const MainText = styled.span`
  font-size: 82px;
  font-weight: bold;
  opacity: 0.9;
`;

export const SubText = styled.span`
  font-size: 28px;
  font-weight: 600;
  margin-top: 12px;
  color: #ff7d1a;
`;

export const MuscleTextSelectedContainer = styled.div`
  margin-top: 60px;
  padding-left: 10px;
  @media screen and (max-width: 960px) {
    margin-top: 10px;
  }
`;

export const MuscleText = styled.span`
  margin-top: 60px;
  font-size: 52px;
  font-weight: bold;
  opacity: 0.9;
`;

export const MainImgContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  //! hover effect //
  & > svg:hover {
    cursor: pointer;
    transition: fill 0.3s ease;
  }
  & > svg path:hover {
    fill: #ff7d1a;
    transition: fill 0.3s ease;
  }
  //! hover effect //
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 50vh;
  }
`;

export const BodySvg = styled.svg`
  height: 600px;
  width: 600px;
  @media screen and (max-width: 960px) {
    width: 300px;
    height: 300px;
  }
`;

// Utility styles //

export const ListContainer = styled.div`
  width: 100%;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0px 80px;
  flex-direction: row;
  @media screen and (max-width: 960px) {
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    padding: 0px 20px;
  }
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50.33% - 20px);
  height: 120%;
  margin-bottom: 20px;
  padding: 15px 20px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const HeaderWorkoutText = styled.span`
  font-size: 28px;
  font-weight: 600;
  margin-top: 12px;
  color: #ff7d1a;
`;

export const HeaderWorkoutSets = styled.span`
  font-size: 18px;
  font-weight: bold;
  opacity: 0.9;
  margin-top: 12px;
`;
