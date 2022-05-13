const { usersService } = require("../../services");

const service = new usersService();

class usersController {
  signup = async (req, res) => {
    const result = await service.createUser(req.body);

    res.status(200).json({ status: "success", code: 200, result });
  };

  login = async (req, res) => {
    const result = await service.loginUser(req.body);

    res.status(200).json({ status: "success", code: 200, result });
  };

  current = async (req, res) => {
    const { email, subscription } = req.user;

    res.status(200).json({
      status: "success",
      code: 200,
      result: {
        email,
        subscription,
      },
    });
  };

  logout = async (req, res) => {
    await service.logoutUser({ _id: req.user._id });

    res.status(204).json();
  };
}

module.exports = usersController;