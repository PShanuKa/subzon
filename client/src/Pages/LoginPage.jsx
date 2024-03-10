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
import {  useLoginMutation } from "../api/users";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/authSlice";
import { toast } from "react-toastify";



   
  export default function LoginCard() {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
      // Extract token and user info parameters from URL
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      const role = params.get('role');
      const firstname = params.get('firstname');
      const lastname = params.get('lastname');
      const user_image = params.get('user_image');
      const _id = params.get('userid');
  
      if (token) {
        // Construct userInfo object
        const userInfo = {
          role,
          firstname,
          lastname,
          user_image,
          _id
        };
  
        // Dispatch setUser action with user info and token
        dispatch(setUser({ userInfo, token }));
  
        // Show success message using react-toastify
        toast.success("Logged In Successfully");
      }
    }, []);

    useEffect(() => {
      if (userInfo) {
        navigate('/');
      }
    }, [userInfo]);

    const [login, { isLoading }] = useLoginMutation();


    const submitGoogleHandler = async (e) => {
      e.preventDefault();
      window.location.href = "http://localhost:3000/auth/google"
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if ( !email || !password) {
          toast.error("Please fill in all fields");
          return;
        }
        try {
            const res = await login({email,password})
            console.log(res.data?.status);
            if(res.error){
              toast.error(res.error.data.message)
            }else if (res.data?.status){
              toast.success(res.data.message)
            }
            dispatch(setUser(res.data));
        } catch (error) {
            console.log("Error",error);
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
            Log in
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" value={email} size="lg" onChange={(e) => setEmail(e.target.value)} />
          <Input label="Password" value={password} onChange={(e) => setPassword(e.target.value)} size="lg" />
          <div className="-ml-2.5">
            <Checkbox disabled label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
        
          <Button onClick={(e)=>submitHandler(e)} variant="gradient" fullWidth >
            log in
          </Button>
          <Button
            variant="outlined"
            className="flex items-center mt-3 h-10 gap-3 justify-center"
            fullWidth
            onClick={(e)=>submitGoogleHandler(e)}
          >
            <img
              src="https://docs.material-tailwind.com/icons/google.svg"
              alt="metamask"
              className="h-6 w-6 "
            />
            Continue with Google
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as={Link}
              to="/register"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Register
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
      </div>
    );
  }