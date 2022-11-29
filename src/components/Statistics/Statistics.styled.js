import styled from 'styled-components';

export const Section = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  width: 300px;
  text-align: center;
  color: #555555;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Title = styled.h2`
  padding: 15px;
  text-transform: uppercase;
`;

export const DataList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const DataItem = styled.li`
  box-sizing: border-box;
  width: 20%;
  height: 65px;
  padding: 10px;
  color: white;
  background-color: ${props => {
    return (
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
    );
  }};
`;

export const Label = styled.span`
  display: block;
`;

export const Percentage = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 18px;
`;
