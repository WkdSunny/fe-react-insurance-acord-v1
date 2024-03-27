import Header from '../components/header';
import Nav from '../components/nav';
import Body from '../components/body';
import Footer from '../components/footer';
import FileUploader from '../components/common/fileHandler/fileUploader';

export default function Home() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Body>
        <FileUploader />
      </Body>
      <Footer />
    </div>
  );
}
