import Profile from "../../assets/profile.png";
const header = () => {
  return (
    <div className="flex justify-between p-4 border-b-2 w-11/12 mx-auto">
      <h3 className="text-4xl">Knowledge Hunt</h3>
      <img src={Profile} alt="" />
    </div>
  );
};

export default header;
