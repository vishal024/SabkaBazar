import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
// import DiscountData from "../server/banners/get.json"
// import CategoriesData from "../server/categories/get.json"
import styled from 'styled-components';
import { AiOutlineCopyright } from "react-icons/ai"

const StyledContainer = styled.div`
width: 70%;
margin: 0px auto;
`;

const StyledCarousel = styled(Carousel)`
height:300px;
   & div{
       height:260px;
       box-shadow: 0px 13px 10px -16px #111;
   }
   & div div div div div div img{
    width: 90%;
    margin-inline: auto;
    margin: 60px 0px 0px 0px;
   }
   }
`;
const StyledCategoryContainer = styled.div`
padding: 10px 60px;
`;
const StyledDiv = styled.div`
display: flex;
justify-content: space-between;
margin: 30px 0px;
box-shadow: 0px 13px 10px -16px #111;
`;
const StyledHeading = styled.h3`
font-size: 13px;
font-weight: 700;
font-family: system-ui;
`;
const StyledP = styled.p`
font-size: 10px;
font-family: system-ui;
`;
const StyledButton = styled.button`
font-size: 10px;
font-family: system-ui;
padding: 8px;
border: none;
background-color: #c50707f0;
color: white;
`;
const StyledFooter = styled.div`
background-color: #80808021;
padding: 12px 0px 12px 138px;
margin: 0px 0px 50px 20px;
font-size: 11px;
font-family: cursive;
width: 97%;

& svg{
    vertical-align: baseline;
    height: 10px;
}
`;
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

const Home = ({discountItem, categoryItem}) => {
    const [offerData, setOfferData] = useState(discountItem)
    console.log(discountItem, categoryItem)
    return (
        <StyledContainer>
            <StyledCarousel breakPoints={breakPoints}>
                {
                    offerData.map((currEle) => (
                        <img src={currEle.bannerImageUrl} alt={currEle.bannerImageAlt} />
                    ))}
            </StyledCarousel>
            <StyledCategoryContainer>
                {
                    categoryItem.map((currEle, i) => {
                        return (
                            currEle.order % 2 !== 0 ?
                                <StyledDiv key={currEle.id}>
                                    <img style={{ width: "300px", height: "200px" }} src={currEle.imageUrl} alt="categoryImages" />
                                    <div style={{ padding: "60px 60px 0px 0px", textAlign: "center" }}>
                                        <StyledHeading>{currEle.name}</StyledHeading>
                                        <StyledP>{currEle.description}</StyledP>
                                        <StyledButton>Explore {currEle.key}</StyledButton>
                                    </div>
                                </StyledDiv> :

                                <StyledDiv key={currEle.id}>
                                    <div style={{ padding: "60px 0px 0px 0px", textAlign: "center" }}>
                                        <StyledHeading>{currEle.name}</StyledHeading>
                                        <StyledP>{currEle.description}</StyledP>
                                        <StyledButton>Explore {currEle.key}</StyledButton>
                                    </div>
                                    <img style={{ width: "300px", height: "200px" }} src={currEle.imageUrl} alt="categoryImages" />
                                </StyledDiv>
                        )
                    })
                }
            </StyledCategoryContainer>
            <StyledFooter>Copyright <AiOutlineCopyright /> 2011-2018 Sabka Bazar Grocery Supplies Pvt Ltd</StyledFooter>
        </StyledContainer>
    )
}
export default Home;