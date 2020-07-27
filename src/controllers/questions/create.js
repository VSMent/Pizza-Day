const create = ({Question}) => async (req, res, next) => {
  console.log("--> Questions: POST");
  try {
    const {body} = req;
    body.createdAt = new Date();
    const saved = await Question.create(body);
    res.status(200).send({question: saved});
  } catch (e) {
    next(e);
  }

};

module.exports = {create};