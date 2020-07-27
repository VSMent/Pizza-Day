const list = ({Question}) => async (req, res, next) => {
  console.log("--> Questions: GET");
  try {
    let {limit, skip} = req.query;
    limit = limit ? parseInt(limit) : 20;
    skip = skip ? parseInt(skip) : 0;
    const questions = await Question.find({})
      .skip(skip)
      .limit(limit);

    res.status(200).send({questions});
  } catch (e) {
    next(e);
  }

};

module.exports = {list};