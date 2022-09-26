import React, { useState } from "react";
import styled from "styled-components";
import TeamProfile from "./TeamProfile";
const Footer = () => {
  return (
    <Wrap>
      <Contents>
        <FooterTitle>About us</FooterTitle>
        <TeamInfos>
          {TEAM_PROFILE.map((profile) => {
            return (
              <TeamProfile
                key={profile.id}
                name={profile.name}
                gitURL={profile.gitURL}
                blogURL={profile.blogURL}
                duty={profile.duty}
                impression={profile.impression}
                profileImage={profile.profileImage}
              />
            );
          })}
        </TeamInfos>
      </Contents>
    </Wrap>
  );
};

const TEAM_PROFILE = [
  {
    id: 0,
    name: "김인태",
    gitURL: "ssss",
    blogURL: "dddd",
    duty: "Main Page, backend",
    impression: "핫 역시 내가 제일 잘난듯",
    profileImage: "/images/footerImage/intae.png",
  },
  {
    id: 1,
    name: "박보현",
    gitURL: "ssss",
    blogURL: "dddd",
    duty: "Map Page",
    impression: "핫 역시 내가 제일 잘난듯",
    profileImage: "/images/footerImage/vanessa.png",
  },
  {
    id: 2,
    name: "백광현",
    gitURL: "ssss",
    blogURL: "dddd",
    duty: "Loin Page",
    impression: "핫 역시 내가 제일 잘난듯",
    profileImage: "/images/footerImage/kwang.png",
  },
  {
    id: 3,
    name: "이후경",
    gitURL: "ssss",
    blogURL: "dddd",
    duty: "Outifits, Footer, Design",
    impression: "핫 역시 내가 제일 잘난듯",
    profileImage: "/images/footerImage/hooo.png",
  },
];

const Wrap = styled.footer`
  width: 100%;
  margin-top: 120px;
  background-color: ${(props) => props.theme.deepGrey};
  border-bottom: 8px solid ${(props) => props.theme.hoverBlue};
  ${({ theme }) => theme.flexMixin("", "center")}
`;
const Contents = styled.div`
  padding: 30px 0;
  width: 1080px;
`;

const TeamInfos = styled.div`
  ${({ theme }) => theme.flexMixin("", "")}
`;
const FooterTitle = styled.h2`
  margin-bottom: 1.3em;
  font-size: 1.2em;
  font-weight: 700;
  color: ${(props) => props.theme.white};
`;

export default Footer;
