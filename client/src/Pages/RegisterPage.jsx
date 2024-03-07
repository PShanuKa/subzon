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
import { Link } from "react-router-dom";

export default function RegisterCard() {
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
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Register
          </Button>
          <Button
            variant="outlined"
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
