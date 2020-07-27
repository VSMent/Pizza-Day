const get = ({Question}) => async (req, res, next) => {
  console.log("--> Questions: GET one");
  try {
    const {_id} = req.params;
    const questions = await Question.find({_id});
    res.status(200).send({questions});
  } catch (e) {
    next(e);
  }

};

module.exports = {get};