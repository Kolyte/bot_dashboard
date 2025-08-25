import React from 'react';
import styled from 'styled-components';

const InfoButton = () => {
  return (
    <StyledWrapper>
      <div className="tooltip">
        <div className="icon">i</div>
        <div className="tooltiptext">
          Use {'{'}user{'}'} to mention the member, {'{'}server{'}'} to mention the server.
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-family: "Arial", sans-serif;
    margin-left: 8px;  
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 0.6;
  }

  .tooltiptext {
    visibility: hidden;
    width: 450px;
    background: rgba(51, 51, 51, 0.7); /* Semi-transparent background */
    color: #fff;
    text-align: center;
    font-size: 14px;
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    top: 50%; /* Center vertically */
    left: 105%; /* Position to the right */
    transform: translateY(-50%); /* Center vertically */
    opacity: 0;
    transition: opacity 0.3s;
    margin-left: 10px; /* Add margin to create space between the button and tooltip */
  }

  .tooltiptext::after {
    content: "";
    position: absolute;
    top: 50%; /* Center vertically */
    left: -10px; /* Position the arrow to the left of the tooltip */
    margin-top: -10px; /* Adjust to center the arrow */
    border-width: 10px;
    border-style: solid;
    border-color: transparent rgba(51, 51, 51, 0.7) transparent transparent; /* Match the tooltip background */
  }

  .tooltip .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #4a90e2;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
  }
`;

export default InfoButton;
