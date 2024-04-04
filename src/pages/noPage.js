import styled from 'styled-components';
import Header from '../components/header';
import Nav from '../components/nav';
import Body from '../components/body';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NoPageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: var(--body-bg-1);
  color: var(--txt-color-1);
  transition: all 0.3s ease-in-out;
`;

const NoPageInner = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--body-bg-2-alt);
  color: var(--txt-color-1);
  box-shadow: var(--box-shadow-black-bottom-right);
`;

const Find404Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  color: #008ef799;

  @media (max-width: 300px) {
    flex-flow: column nowrap;
  }
`;

const FindContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  font-size: 6rem;

  @media (max-width: 680px) {
    font-size: 4rem;
  }

  @media (max-width: 450px) {
    font-size: 3rem;
  }

  @media (max-width: 350px) {
    font-size: 2rem;
  }
`;

const FileImage = styled.div`
  position: absolute;
  margin: 1.1rem;
  z-index: 99999;
`;

const MagnifyingGlass = styled.div`
  position: absolute;
  animation: find 5s infinite linear;

  @keyframes find {
    0% { transform: scale(1.1) translateX(9px) translateY(80px); }
    12.5% { transform: scale(1.1) translateX(9px) translateY(30px); }
    25% { transform: scale(1.1) translateX(9px) translateY(20px); }
    37.5% { transform: scale(1.1) translateX(9px) translateY(0px); }
    50% { transform: scale(1.1) translateX(9px) translateY(-60px); }
    62.5% { transform: scale(1.1) translateX(9px) translateY(0px); }
    75% { transform: scale(1.1) translateX(9px) translateY(20px); }
    87.5% { transform: scale(1.1) translateX(9px) translateY(30px); }
    100% { transform: scale(1.1) translateX(9px) translateY(80px); }
  }

  @media (max-width: 680px) {
    animation: find 5s infinite linear;

    @keyframes find {
      0% { transform: scale(1.1) translateX(6px) translateY(40px); }
      12.5% { transform: scale(1.1) translateX(6px) translateY(15px); }
      25% { transform: scale(1.1) translateX(6px) translateY(10px); }
      37.5% { transform: scale(1.1) translateX(6px) translateY(0px); }
      50% { transform: scale(1.1) translateX(6px) translateY(-30px); }
      62.5% { transform: scale(1.1) translateX(6px) translateY(0px); }
      75% { transform: scale(1.1) translateX(6px) translateY(10px); }
      87.5% { transform: scale(1.1) translateX(6px) translateY(15px); }
      100% { transform: scale(1.1) translateX(6px) translateY(40px); }
    }
  }

  @media (max-width: 450px) {
    animation: find 5s infinite linear;

    @keyframes find {
      0% { transform: scale(1.1) translateX(4px) translateY(30px); }
      12.5% { transform: scale(1.1) translateX(4px) translateY(10px); }
      25% { transform: scale(1.1) translateX(4px) translateY(5px); }
      37.5% { transform: scale(1.1) translateX(4px) translateY(0px); }
      50% { transform: scale(1.1) translateX(4px) translateY(-20px); }
      62.5% { transform: scale(1.1) translateX(4px) translateY(0px); }
      75% { transform: scale(1.1) translateX(4px) translateY(5px); }
      87.5% { transform: scale(1.1) translateX(4px) translateY(10px); }
      100% { transform: scale(1.1) translateX(4px) translateY(30px); }
    }
  }

  @media (max-width: 350px) {
    animation: find 5s infinite linear;

    @keyframes find {
      0% { transform: scale(1.1) translateX(3px) translateY(20px); }
      12.5% { transform: scale(1.1) translateX(3px) translateY(7px); }
      25% { transform: scale(1.1) translateX(3px) translateY(3px); }
      37.5% { transform: scale(1.1) translateX(3px) translateY(0px); }
      50% { transform: scale(1.1) translateX(3px) translateY(-15px); }
      62.5% { transform: scale(1.1) translateX(3px) translateY(0px); }
      75% { transform: scale(1.1) translateX(3px) translateY(3px); }
      87.5% { transform: scale(1.1) translateX(3px) translateY(7px); }
      100% { transform: scale(1.1) translateX(3px) translateY(20px); }
    }
  }
`;

const NoPage404 = styled.h1`
  font-size: 10rem;
  font-family: Lobster, cursive;
  padding-left: 2.5rem;
  margin-left: 2.5rem;
  transition: all 0.3s ease-in-out;

  @media (max-width: 680px) {
    font-size: 6rem;
    padding-left: 1.5rem;
    margin-left: 1.5rem;
  }

  @media (max-width: 450px) {
    font-size: 4rem;
    padding-left: 1rem;
    margin-left: 1rem;
  }

  @media (max-width: 350px) {
    font-size: 3rem;
    padding-left: 0.5rem;
    margin-left: 0.5rem;
  }
`;

const NoPageText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  font-family: Licorice, cursive;
  transition: all 0.3s ease-in-out;

  @media (max-width: 680px) {
    font-size: 1rem;
  }

  @media (max-width: 450px) {
    font-size: 0.75rem;
  }

  @media (max-width: 350px) {
    font-size: 0.5rem;
  }
`;

export default function NoPage() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Body>
        <NoPageContainer>
          <NoPageInner>
            <Find404Container>
              <FindContainer>
                <FileImage>
                  <span><FontAwesomeIcon icon={faFileAlt} /></span>
                </FileImage>
                <MagnifyingGlass>
                  <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                </MagnifyingGlass>
              </FindContainer>
              <NoPage404>404</NoPage404>
            </Find404Container>
            <NoPageText>Sorry, the page you are looking for does not exist.</NoPageText>
          </NoPageInner>
        </NoPageContainer>
      </Body>
      <Footer />
    </div>
  );
}
