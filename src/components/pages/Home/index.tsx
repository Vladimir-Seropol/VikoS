import About from "../../AboutUs";
import Accordion from "../../Accordion/Accordion";
import OurContacts from "../../Contacts/Index";
import FormQuestion from "../../FormQuestions";
import OurTeam from "../../OurTeam";
import PerfectCouple from "../../PerfectCouple";
import Sneakers from "../../sneakers";
// import Main from "../../main/main";



const Home = () => {
  return (
    <div>
      {/* <Main /> */}
      <Sneakers />
      <About />
      <PerfectCouple />
      <OurTeam />
      <Accordion />
      <OurContacts />
      <FormQuestion />
    </div>
  );
}

export default Home;