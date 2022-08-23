import { AppView } from '../styles/appStyle';
import Sidebar from '../components/sidebar/Sidebar';
import { HomeView, HomeIllustration, HomeHeading } from '../styles/homeStyles';
import illustration from '../assets/images/Illustration.png';

const Homepage = function (props) {
  return (
    <AppView>
      <Sidebar toggleTheme={props.toggleTheme} />
      <HomeView>
        <HomeIllustration src={illustration}></HomeIllustration>
        <HomeHeading>Keep your phone connected</HomeHeading>
      </HomeView>
    </AppView>
  );
};

export default Homepage;
