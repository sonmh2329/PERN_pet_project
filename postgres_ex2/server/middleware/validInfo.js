module.exports = function(req, res, next) {
    const { email, username, password } = req.body;
  
    function validEmail(userEmail) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }
  
    if (req.path === "/register") {
      if (![email,username, password].every(Boolean)) {
        return res.json("Missing Credentials");
      } else if (!validEmail(email)) {
        return res.json("Invalid Email");
      }
    } else if (req.path === "/login") {
      if (![email, password].every(Boolean)&&![username, password].every(Boolean)) {
        return res.json("Missing Credentials");
      } else if (email&&!validEmail(email)) {
        return res.json("Invalid Email or username");
      }
    }
  
    next();
  };
  