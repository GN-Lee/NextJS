const Peach = ({ params }) => {
  const { peach } = params;
  return <div>피치피치야:{peach.join(".")}</div>;
};

export default Peach;
