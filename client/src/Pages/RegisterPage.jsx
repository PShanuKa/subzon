import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../api/users";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function RegisterCard() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState({ status: true, message: "" });

  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo]);

  const submitGoogleHandler = async (e) => {
    e.preventDefault();
    window.location.href = "http://localhost:3000/auth/google"
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const res = await register({ email, password, firstname, lastname });
      if (!res.data.status) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
      }
      if (res.data.status === true) {
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while registering");
    }
  };

  return (
    <div className=" max-w-7xl mx-auto">
      <Card className="w-96 mt-20 mx-auto">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Register
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="First name"
            size="lg"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <Input
            label="Last name"
            size="lg"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <Input
            label="Email"
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <Input label="Confirm Password" size="lg" /> */}
          <div className="-ml-2.5">
            <Checkbox disabled label="Remember Me" />
          </div>
        </CardBody>
        
        <CardFooter className="pt-0">
          <Button onClick={submitHandler} variant="gradient" fullWidth>
            Register
          </Button>
          <Button
            variant="outlined"
            onClick={(e)=>submitGoogleHandler(e)}
            className="flex items-center mt-3 h-10 gap-3 justify-center"
            fullWidth
          >
            <img
              src="https://docs.material-tailwind.com/icons/google.svg"
              alt="metamask"
              className="h-6 w-6 "
            />
            Continue with Google
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Do have an account?
            <Typography
              as={Link}
              to="/login"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Log in
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
