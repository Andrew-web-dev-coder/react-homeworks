import styled from 'styled-components';
import trapezoidBg from "@assets/images/backgrounds/Trapezoid.png";


export const HomeSection = styled.section`
  background-image: url(${trapezoidBg});
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
  padding: 40px 0;
  min-height: 100vh;
`;


export const Container = styled.div`

  max-width: 1232px;
  margin: 100px auto;
  display: flex;
  align-items: center;  
  justify-content: space-between;
  font-family: Inter;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 500;
  line-height: 60px;
  margin-bottom: 20px;
`;

export const Highlight = styled.span`
  color: #35b8be;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 24px;
  max-width: 520px;
  color: #546285;
`;

export const Button = styled.button`
  background-color: #35b8be;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: not-allowed;
`;

export const TrustBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 32px;
`;


export const TrustText = styled.p`
  font-size: 16px;
  margin-left: 2px;
  margin-top: 10px;
`;

export const Rating = styled.span`
  color: #35b8be;
  font-weight: bold;
`;



export const Image = styled.img`
  width: 600px;
  height: auto;
  border-radius: 20px;
  position: relative;
`;
