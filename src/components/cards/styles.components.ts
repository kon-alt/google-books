import styled from 'styled-components';

export const CardsList = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 24px;
`;

export const Tooltip = styled('span')`
  position: absolute;
  top: -100%;
  left: 0;
  right: 0;
  border-bottom: 1px solid #c2c2c2;
  // transform: translateY(-30px);
  transition: .3s;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.93);
  color: #000000;
`;

export const Card = styled('div')`
  width: 300px;
  height: 450px;
  border-radius: 4px;
  background-color: #ececec;
  margin-bottom: 24px;
  transform: translateY(0px);
  transition: .3s;
  border: 1px solid transparent;
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  overflow: hidden;
  
  @media(max-width: 991px){
    width: 48%;
  }
  
  @media(max-width: 600px){
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    transition: .3s;
    box-shadow: 0 10px 15px #c9c9c9;
    border: 1px solid #bbbbbb;
    
    & ${Tooltip} {
      top: 0;
    }
  }
`;

export const Title = styled('h3')`
  color: #000000;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Category = styled('p')`
    margin: 0;
  font-size: 16px;
  color: #000000;
`;

export const Authors = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

export const Author = styled('span')`
  color: grey;
  font-size: 14px;
  margin-left: 3px;
`;

export const Image = styled('img')`
  width: 200px;
  height: 250px;
  object-fit: contain;
`;
