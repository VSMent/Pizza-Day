const list = ({Question}) => async (req, res, next) => {
  console.log("--> Questions: GET");
  try {
    const questions = await Question.find({});
    res.status(200).send({questions});
  } catch (e) {
    next(e);
  }

};

module.exports = {list};