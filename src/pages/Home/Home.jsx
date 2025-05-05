import React from "react";
import Header from "@components/layout/Header/Header";
import Footer from "@components/layout/Footer/Footer";

import {
  HomeSection,
  Title,
  Highlight,
  Description,
  Button,
  TrustBlock,
  TrustText,
  Rating,
  Container,
  Image
} from "@pages/Home/Home.styles";

import burgerImage from "@assets/images/home/food.png";
import starIcon from "@assets/images/home/star.svg";



export default function Home() {
  return (
    <>
      <Header />
      <HomeSection>
        <Container>
          <div>
            <Title>
              Beautiful food & takeaway, <Highlight>delivered</Highlight> to your door.
            </Title>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500.
            </Description>
            <Button disabled>Place an Order</Button>

            <TrustBlock>
              <img src={starIcon} alt="Trustpilot" />
              <TrustText>
                <Rating>4.8 out of 5</Rating> based on 2000+ reviews
              </TrustText>
            </TrustBlock>
          </div>

          <Image src={burgerImage} alt="Food" />

        </Container>
      </HomeSection>
      <Footer />
    </>
  );
}
