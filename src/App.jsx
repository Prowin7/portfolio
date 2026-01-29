import './index.css';
import ProfileCard from './components/ProfileCard';
import TechStack from './components/TechStack';
import ProofOfWork from './components/ProofOfWork';
import ExperienceMinimal from './components/ExperienceMinimal';
import Education from './components/Education';
import GitHubContributions from './components/GitHubContributions';
import ContactMinimal from './components/ContactMinimal';

function App() {
  return (
    <div className="app">
      <ProfileCard />
      <TechStack />
      <ProofOfWork />
      <ExperienceMinimal />
      <Education />
      <GitHubContributions />
      <ContactMinimal />
    </div>
  );
}

export default App;
