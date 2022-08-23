import { AppView } from '../styles/appStyle';
import Sidebar from '../components/sidebar/Sidebar';
import {
  HomeView,
  HomeIllustration,
  HomeHeading,
  HomeParagraph,
} from '../styles/homeStyles';
import illustration from '../assets/images/Illustration.png';

const Homepage = function (props) {
  return (
    <AppView>
      <Sidebar toggleTheme={props.toggleTheme} />
      <HomeView>
        <HomeIllustration src={illustration}></HomeIllustration>
        <HomeHeading>Keep your phone connected</HomeHeading>
        <HomeParagraph>
          Whatsapp connects to your phone to sync messages. To reduce data
          usage. connect your phone to Wi-Fi.
        </HomeParagraph>
      </HomeView>
    </AppView>
  );
};

export default Homepage;
