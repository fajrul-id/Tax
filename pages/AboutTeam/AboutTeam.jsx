import TeamCard from "../../components/Card/TeamCard";

const AboutTeam = () => {
  return (
    <section
      id="about_team"
      className="flex flex-col items-center my-8 mx-8 sm:mx-10 lg:mx-24 gap-4"
    >
      <div className="w-full text-center text-4xl leading-none">
        <h1>About Team</h1>
        <p className="text-blue-400 text-sm font-extrabold">
          ____________________
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        <TeamCard />
        <TeamCard />
      </div>
    </section>
  );
};

export default AboutTeam;
