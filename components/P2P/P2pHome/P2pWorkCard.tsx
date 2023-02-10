export const P2pWorkCard = ({ item }: any) => {
  return (
    <div className="col-md-6 col-lg-4 mt-3 mt-lg-0">
      <div className="workCard px-4 py-5">
        {item.icon}
        <h4 className="py-4">{item.title}</h4>
        <p>{item.discription}</p>
      </div>
    </div>
  );
};
