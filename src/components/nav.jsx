import styled from "styled-components";
import { HomeButton } from "./common/buttons";
import Dropdown, { DropdownStyle } from "./common/dropdown";
import UserDetails from "./common/userDetails";
import ProfielImage from "./assets/dummy-profile-img.png"

const NavContainer = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 5px;
  background-color: var(--body-bg-4);
  box-shadow: var(--box-shadow-1);
  transition: all 0.5s ease-in-out;

  button {
    font-size: 1rem;
    height: 2rem;
    width: 2rem;
  }

  @media (max-width: 480px) {
    a {
      font-size: 0.8rem;
    }
  }
`;

function Nav() {
  return (
    <NavContainer>
      <HomeButton />
      <Dropdown 
        ddList={
          [
            <UserDetails 
              name={"John Doe"} 
              email={"john.doe@domain.com"} 
              image={ProfielImage}
            />, 
            "Profile", 
            "Settings", 
            "Sign Out"
          ]
        } ddStyle={DropdownStyle.Hamburger}
      />
    </NavContainer>
  );
}

export default Nav;