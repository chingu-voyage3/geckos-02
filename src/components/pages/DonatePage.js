import React from 'react';
import styled, { css } from 'styled-components';

const DonatePageBanner = styled.div`
  background: #f7f7f7;
  height: 75vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AmountSelection = styled.button`
  width: 10vw;
  height: 50px;
  margin: 20px;

  border: 2px solid black;
  font-size: 1em;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 120px;
  }

  &:hover {
    color: white;
    background: black;
  }
`;

const DonorInformation = styled.div`
  max-width: 800px;
  margin: 50px auto;
`;

const DonorInfoTitle = styled.h2`
  border-bottom: 2px solid black;
  max-width: 800px;
  padding: 0px 0px 10px 10px;
  margin: 10px;

  ${props => props.mainHeader && css`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto 50px auto;
    height: 12vh;
    font-size: 4em;

    @media (max-width: 768px) {
      font-size: 3em;
    }

    @media (max-width: 470px) {
      font-size: 2em;
    }
  `}
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

  ${props => props.cvv && css`
    width: 100px;
  `}
`;

const MakeRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0px;

  ${props => props.bannerButtons && css`
    flex-wrap: wrap;
  `}
`;

const FormLabel = styled.span`
  padding-right: 10px;
`;

const FormSelection = styled.select `
  height: 35px;
  margin-right: 5px;
`;

const SubmitDonation = styled.button`
  width: 150px;
  height: 50px;
  margin: 20px;

  border: 2px solid black;
  font-size: 1em;
  text-transform: uppercase;
  cursor: pointer;


  &:hover {
    color: white;
    background: black;
  }
`;

const DonatePage = () => (
  <div>
    <DonatePageBanner>
      <MakeRow bannerButtons>
        <AmountSelection>$25</AmountSelection>
        <AmountSelection>$50</AmountSelection>
        <AmountSelection>$100</AmountSelection>
        <AmountSelection>$200</AmountSelection>
        <AmountSelection>$500</AmountSelection>
        <AmountSelection>Other</AmountSelection>
      </MakeRow>
    </DonatePageBanner>
    <DonorInfoTitle mainHeader>Support Us Today</DonorInfoTitle>

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
          <FormInput cvv type="text" placeholder="CVV" />
        </MakeRow>
        <MakeRow>
          <SubmitDonation>Donate</SubmitDonation>
          <span>(Show Amount Selected Here)</span>
        </MakeRow>
      </DonorInfoForm>
    </DonorInformation>
  </div>
);

export default DonatePage;
