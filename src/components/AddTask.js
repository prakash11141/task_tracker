import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import {
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>Task</label>
        <TextField
          required
          id="outlined-required"
          label=" Add Task"
          defaultValue=""
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>Day & Time</label>
        <TextField
          required
          id="outlined-required"
          label=" Add Day & Time"
          defaultValue=""
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
