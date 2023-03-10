import styled from 'styled-components';
// import PropertyCard from '../PropertyCard';
import getThatHomeLogo from "../../assets/images/get-that-home-logo.png";
import { AiOutlineUserAdd } from "react-icons/ai";
import {RiHome8Line, RiLogoutCircleLine} from "react-icons/ri";
import { BsHeartFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 78%;
  margin:16px 0px;
`;

const NavBarItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const WhiteButton = styled("button")`
  border: none;
  background: #FFFFFF;
  border: 2px solid #F48FB1;
  border-radius: 16px;
  padding: 0px 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PinkButton = styled("button")`
  border: none;
  background: #F48FB1;
  border-radius: 16px;
  padding: 0px 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


export function UnauthenticatedNavbar(){
  return (
    <Wrapper1>
      <NavBarContainer>
        <Link  to={"/landing"}>
          <img
          src={getThatHomeLogo}
          alt="get that home app logo"
          style={{ height: "40px", width: "136px"}}
          />
        </Link>
        <NavBarItems>
          <Wrapper2 style={{gap: "6px"}}>
            <FiSearch style={{ color: "#616161" }} />
            <Link  to={"/properties"}>
              <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
                lineHeight: "24px", letterSpacing: "1.25px", color: "#616161"}}>FIND A HOME</p>
            </Link>
          </Wrapper2>
          <WhiteButton style={{gap: "4px", height: "40px"}}>
            <AiOutlineUserAdd style={{width: "19px", height: "21px", color: "#616161"}}/>
            <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
            lineHeight: "24px", letterSpacing: "1.25px", color: "#616161"}}>JOIN</p>
          </WhiteButton>
          <PinkButton style={{gap: "4px", height: "40px"}}>
            <AiOutlineUserAdd style={{width: "19px", height: "21px", color: "#FFFFFF"}}/>
            <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
            lineHeight: "24px", letterSpacing: "1.25px", color: "#FFFFFF"}}>LOGIN</p>
          </PinkButton>
        </NavBarItems>
      </NavBarContainer>
    </Wrapper1>
  )
}

export function LandlordNavbar(){
  return (
    <Wrapper1>
      <NavBarContainer>
        <Link  to={"/landing"}>
          <img
          src={getThatHomeLogo}
          alt="get that home app logo"
          style={{ height: "40px", width: "136px"}}
          />
        </Link>
        <NavBarItems>
          <Wrapper2 style={{gap: "6px"}}>
            <FiSearch style={{ color: "#616161" }} />
            <Link  to={"/properties"}>
              <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
                lineHeight: "24px", letterSpacing: "1.25px", color: "#616161"}}>FIND A HOME</p>
            </Link>
          </Wrapper2>
          <WhiteButton style={{gap: "4px", height: "40px"}}>
            <RiLogoutCircleLine style={{width: "19px", height: "21px", color: "#616161"}}/>
            <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
            lineHeight: "24px", letterSpacing: "1.25px", color: "#616161"}}>LOGOUT</p>
          </WhiteButton>
          <PinkButton style={{gap: "4px", height: "40px"}}>
            <RiHome8Line style={{width: "19px", height: "21px", color: "#FFFFFF"}}/>
            <Link to={"/my-properties"}>
              <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
              lineHeight: "24px", letterSpacing: "1.25px", color: "#FFFFFF"}}>MY PROPERTIES</p>
            </Link>
          </PinkButton>
          <PinkButton style={{gap: "4px", height: "40px"}}>
              <AiOutlineUserAdd style={{width: "19px", height: "21px", color: "#FFFFFF"}}/>
              <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
              lineHeight: "24px", letterSpacing: "1.25px", color: "#FFFFFF"}}>PROFILE</p>
          </PinkButton>
        </NavBarItems>
      </NavBarContainer>
    </Wrapper1>
  )
}

export function HomeSeekerNavbar(){
  return (
    <Wrapper1>
      <NavBarContainer>
        <Link  to={"/landing"}>
          <img
          src={getThatHomeLogo}
          alt="get that home app logo"
          style={{ height: "40px", width: "136px"}}
          />
        </Link>
        <NavBarItems>
          <Wrapper2 style={{gap: "6px"}}>
            <FiSearch style={{ color: "#616161" }} />
            <Link  to={"/properties"}>
              <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
                lineHeight: "24px", letterSpacing: "1.25px", color: "#616161"}}>FIND A HOME</p>
            </Link>
          </Wrapper2>
          <WhiteButton style={{gap: "4px", height: "40px"}}>
              <RiLogoutCircleLine style={{width: "19px", height: "21px", color: "#616161"}}/>
              <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
              lineHeight: "24px", letterSpacing: "1.25px", color: "#616161"}}>LOGOUT</p>
          </WhiteButton>
          <PinkButton style={{gap: "4px", height: "40px"}}>
              <BsHeartFill style={{width: "19px", height: "21px", color: "#FFFFFF"}}/>
              <Link to={"/saved-properties"}>
                <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
                lineHeight: "24px", letterSpacing: "1.25px", color: "#FFFFFF"}}>SAVED PROPERTIES</p>
              </Link>
          </PinkButton>
          <PinkButton style={{gap: "4px", height: "40px"}}>
              <AiOutlineUserAdd style={{width: "19px", height: "21px", color: "#FFFFFF"}}/>
              <p style={{ fontFamily: "Inter", fontWeight: "500", fontSize: "14px",
              lineHeight: "24px", letterSpacing: "1.25px", color: "#FFFFFF"}}>PROFILE</p>
          </PinkButton>
        </NavBarItems>
      </NavBarContainer>
    </Wrapper1>
  )
}
