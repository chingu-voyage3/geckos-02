import React from 'react';
import styled, { css } from 'styled-components';

const DonatePageContainer = styled.div`
  margin: 10px;
`;

const DonorInformation = styled.div`
  margin-bottom: 100px;
`;

const DonorInfoTitle = styled.h2`
  border-bottom: 2px solid black;
  max-width: 800px;
  padding: 0px 0px 10px 10px;
  margin: 10px;
`;

const DonorInfoForm = styled.form`
  box-sizing: border-box;
  max-width: 800px;
  margin: 10px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${props => props.payment && css`
    display: flex;
    flex-direction: column;
  `}
`;

const FormInput = styled.input`
  box-sizing: border-box;
  width: 45%;
  padding: 10px;
  margin: 5px;

  @media (max-width: 470px) {
    width: 100%;
  }

  ${props => props.location && css`
    width: 29.5%;

    @media (max-width: 470px) {
      width: 100%;
    }
  `}
`;

const MakeRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0px;
`;

const FormLabel = styled.span`
  padding-right: 10px;
`;

const FormSelection = styled.select `
  height: 35px;
  margin-right: 5px;
`;

const DonatePage = () => (
  <DonatePageContainer>
    <h1>Donate Page</h1>

    <p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;</p>

    <DonorInformation>
      <DonorInfoTitle>Donor Information</DonorInfoTitle>
      <DonorInfoForm>
        <FormInput type="text" placeholder="First Name" />
        <FormInput type="text" placeholder="Last Name" />
        <FormInput type="text" placeholder="Address 1" />
        <FormInput type="text" placeholder="Address 2" />
        <FormInput location type="text" placeholder="City" />
        <FormInput location placeholder="State" />
        <FormInput location type="text" placeholder="Zip" />
        <FormInput type="text" placeholder="Country" />
        <FormInput type="email" placeholder="Email Address" />
      </DonorInfoForm>
    </DonorInformation>
    <DonorInformation>
      <DonorInfoTitle>Payment Information</DonorInfoTitle>
      <DonorInfoForm payment>
        <MakeRow>
          <FormLabel>Payment Type:</FormLabel>
          <FormSelection>
            <option value="VISA">VISA</option>
            <option value="MASTERCARD">MASTERCARD</option>
            <option value="DISCOVER">DISCOVER</option>
            <option value="AMEX">AMEX</option>
          </FormSelection>
        </MakeRow>
        <MakeRow>
          <FormLabel>Credit Card Number</FormLabel>
          <FormInput type="text" placeholder="**** **** **** ****" />
        </MakeRow>
        <MakeRow>
          <FormLabel>Expiration Date</FormLabel>
          <FormSelection>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </FormSelection>
          <FormSelection>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
          </FormSelection>
        </MakeRow>
        <MakeRow>
          <FormLabel>CVV Number</FormLabel>
          <FormInput type="text" placeholder="CVV" />
        </MakeRow>
      </DonorInfoForm>
    </DonorInformation>
  </DonatePageContainer>
);

export default DonatePage;
