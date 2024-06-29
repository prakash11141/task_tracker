import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Typography>
        This is a task tracker Application to keep record of tasks.
      </Typography>
      <h4>Version 4.0.0</h4>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
