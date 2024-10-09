import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import HomeCard from "@/components/HomeCard";
import JobListins from "@/components/JobListings";
import ViewAllJobs from "@/components/ViewAllJobs";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCard />
      <JobListins />
      <ViewAllJobs />
    </>
  );
};

export default App;
