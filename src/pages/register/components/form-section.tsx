import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { useState } from "react";
import { IFormData } from "../../../interfaces/form-data";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function FormSection() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<IFormData>({
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (
      formData.name === "" ||
      formData.phone === "" ||
      formData.email === ""
    ) {
      toast.error("Please register the details to continue...", {
        duration: 3000,
      });
      return;
    }
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate("/user-data");
    toast.success("Registered successfully!!!", { duration: 3000 });
  };
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            Register Here
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Please, Register your details to continue...
          </Typography>
          <Box
            component="form"
            sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              type="text"
              id="outlined-basic"
              size="small"
              label="Enter your name"
              variant="outlined"
            />
            <TextField
              type="text"
              id="outlined-basic"
              size="small"
              label="Enter your phone no."
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              variant="outlined"
            />
            <TextField
              type="email"
              id="outlined-basic"
              size="small"
              label="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Box>
        </CardContent>
        <CardActions sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
          <Button size="medium" variant="contained" onClick={handleSubmit}>
            Get Started
          </Button>
        </CardActions>
      </Card>
      <Toaster />
    </Box>
  );
}
