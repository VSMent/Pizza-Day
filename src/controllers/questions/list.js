const list = ({Question}) => (req, res, next) => {
  console.log("got questions");
  res.status(200).send({message: "got questions"});
};

module.exports = {list};