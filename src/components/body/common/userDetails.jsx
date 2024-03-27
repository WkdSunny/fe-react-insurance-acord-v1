import styled from "styled-components";

const UserContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding: 5px 0;
  border-bottom: 1px solid var(--border-color-4);
`;

const UserImage = styled.img`
  padding: 5px;
  width: 30%;
  padding-right: 10px;
`;

const UserDetailsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

const UserName = styled.h3`
  color: var(--txt-color-1);
  font-size: 1rem;
  font-weight: bold;
`;

const UserDetailsText = styled.p`
  color: var(--txt-color-2);
  font-size: 0.6rem;
`;

function UserDetails({ image, name, email, phone }) {
  return (
    <>
      <UserContainer>
        <UserImage src={image} alt={name} />
        <UserDetailsContainer>
          <UserName>{name}</UserName>
          <UserDetailsText>{email}</UserDetailsText>
          <UserDetailsText>{phone}</UserDetailsText>
        </UserDetailsContainer>
      </UserContainer>
    </>
  );
}

export default UserDetails;
