import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Bulb = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => (props.isOn ? 'yellow' : 'gray')};
  border-radius: 50%;
  margin: 20px;
  box-shadow: ${props => (props.isOn ? '0 0 20px yellow' : 'none')};
`;

const Switch = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;
export default function BulbSwitch() {
    const [isBulb1On, setBulb1On] = useState(false);
    const [isBulb2On, setBulb2On] = useState(false);
  
    return (
      <Container>
        <div>
          <Bulb isOn={isBulb1On} />
          <Switch isOn={isBulb1On} onClick={() => setBulb1On(!isBulb1On)}>
            {isBulb1On ? 'Turn Off' : 'Turn On'}
          </Switch>
        </div>
        <div>
          <Bulb isOn={isBulb2On} />
          <Switch isOn={isBulb2On} onClick={() => setBulb2On(!isBulb2On)}>
            {isBulb2On ? 'Turn Off' : 'Turn On'}
          </Switch>
        </div>
      </Container>
    );
  }