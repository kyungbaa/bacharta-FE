import React, { useState } from "react";

import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
type TeamProfileProps = {
  name: string;
  gitURL: string;
  blogURL: string;
  duty: string;
  impression: string;
  profileImage: string;
};

const TeamProfile = ({
  name,
  gitURL,
  blogURL,
  duty,
  impression,
  profileImage,
}: TeamProfileProps) => {
  const [showProfile, setShowProfile] = useState(false);
  const isShowProfile = () => {
    setShowProfile(true);
  };
  const isHideProfile = () => {
    setTimeout(() => setShowProfile(false), 300);
  };
  return (
    <Wrap onMouseEnter={isShowProfile} onMouseLeave={isHideProfile}>
      {!!showProfile ? (
        <SpeechBubble>
          <BubbleWrap>
            <BubbleHeader>
              <Name>{name}</Name>
              <TeamLink>
                <Link
                  style={{ color: "white", marginRight: "4px" }}
                  to={gitURL}
                >
                  <GitHubIcon sx={{ fontSize: "19px" }} />
                </Link>
                <Link style={{ color: "white" }} to={blogURL}>
                  <HomeIcon sx={{ fontSize: "21px" }} />
                </Link>
              </TeamLink>
            </BubbleHeader>
            <SubInfo>{duty}</SubInfo>
            <Impression>{impression}</Impression>
          </BubbleWrap>
        </SpeechBubble>
      ) : null}

      <TeamMemoji src={profileImage} alt="ddd" />
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  ${({ theme }) => theme.flexMixin("center", "center")}
  margin-right: 30px;
  width: 6em;
  height: 6em;
  background-color: ${(props) => props.theme.white};
  border-radius: 50%;
`;

const SpeechBubble = styled.div`
  ${({ theme }) => theme.flexMixin("center", "center")}
  position: absolute;
  border-radius: 0.4em;
  bottom: 7em;
  width: 10em;
  padding: 16px;
  background-color: ${(props) => props.theme.mainColor};
  box-shadow: ${(props) => props.theme.lowModalDeepShadow};
  transition: top 1s ease-in;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 13px solid transparent;
    border-top-color: ${(props) => props.theme.mainColor};
    border-bottom: 0;
    margin-left: -13px;
    margin-bottom: -13px;
  }
  &.hover {
    top: -14em;
    animation-duration: 3s;
  }
  @keyframes fadeout {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
const BubbleHeader = styled.div`
  ${({ theme }) => theme.flexMixin("center", "")}
  padding-bottom: 10px;
`;
const BubbleWrap = styled.div`
  color: ${(props) => props.theme.white};
`;

const Name = styled.h3`
  font-weight: 700;
  margin-right: 10px;
`;
const SubInfo = styled.p`
  font-size: 15px;
`;
const Impression = styled.p`
  font-size: 14px;
  padding-top: 0.8em;
  line-height: 1.2em;
`;
const TeamMemoji = styled.img`
  width: 100%;
`;
const TeamLink = styled.div`
  margin-left: 10px;
`;

export default TeamProfile;
