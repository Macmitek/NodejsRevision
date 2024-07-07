const createFactory = (Model) => {
  return async (req, res) => {
    try {
      let elementModel = Model.create(req.body);

      if (!elementModel) {
        res.status(400).json({
          status: 'failure',
        });
      }

      res.status(200).json({
        status: 'success',
        message: 'Data has been created successfully!',
      });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
};

module.exports = {
  createFactory,
};
