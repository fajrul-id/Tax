const TeamCard = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg hover:shadow-lg hover:scale-105 duration-500">
      <div className="w-full flex justify-center">
        <Image
          src="https://www.roberthalf.com/sites/default/files/2022-01/How-to-Hire-a-Senior-Accountant-Count-the-Ways-Blog-RH-01-03-2022_0.jpeg"
          alt=""
          className="border rounded-t-lg object-fill w-full max-h-[250px]"
        />
      </div>
      <div className="p-6">
        <h2 className="font-thin group-hover:text-gray-800 text-md relative">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
          laudantium cum aut pariatur esse corrupti voluptatibus, mollitia saepe
          blanditiis, fugiat earum repudiandae debitis porro reiciendis, libero
          quis itaque quod. Hic?
        </h2>
      </div>
    </div>
  );
};

export default TeamCard;
