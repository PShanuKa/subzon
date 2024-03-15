import { Avatar, Button, Typography } from "@material-tailwind/react";
import Card from "./Card";
import SortableTable from "./Table";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
     
            <div className="flex items-center justify-between">
              <div className="flex  items-center gap-4">
                <Avatar
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                  variant="rounded"
                />
                <div>
                  <Typography variant="h6">Tania Andrew</Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    Member
                  </Typography>
                </div>
              </div>
                <Link to="edit-profile">
                <Button 
                  variant="outlined"
                  className="flex items-center py-3 gap-3"
                  size="sm"
                  >
                  <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Edit
                  Profile
                </Button>
                    </Link>
             
            </div>
            <div className="mt-10 grid gap-2">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Profile Information
              </Typography>
              <div className="flex gap-3    ">
                <Typography variant="h6">First Name: </Typography>
                <Typography variant="paragraph"> Tania</Typography>
              </div>
              <div className="flex gap-3 ">
                <Typography variant="h6">Last Name: </Typography>
                <Typography variant="paragraph"> Andrew</Typography>
              </div>
              <div className="flex gap-3 ">
                <Typography variant="h6">Mobile: </Typography>
                <Typography variant="paragraph"> (44) 123 1234 123</Typography>
              </div>
              <div className="flex gap-3 ">
                <Typography variant="h6">Email: </Typography>
                <Typography variant="paragraph">
                  {" "}
                  alecthompson@mail.com
                </Typography>
              </div>
            </div>
            <div className="mt-10 grid gap-2">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Profile Description
              </Typography>
              <Typography variant="paragraph">
                {" "}
                Hi, I'm Alec Thompson, Decisions: If you can't decide, the
                answer is no. If two equally difficult paths, choose the one
                more painful in the short term (pain avoidance is creating an
                illusion of equality). Hi, I'm Alec Thompson, Decisions: If you
                can't decide, the answer is no. If two equally difficult paths,
                choose the one more painful in the short term (pain avoidance is
                creating an illusion of equality). Hi, I'm Alec Thompson,
                Decisions: If you can't decide, the answer is no. If two equally
                difficult paths, choose the one more painful in the short term
                (pain avoidance is creating an illusion of equality). Hi, I'm
                Alec Thompson, Decisions: If you can't decide, the answer is no.
                If two equally difficult paths, choose the one more painful in
                the short term (pain avoidance is creating an illusion of
                equality).
              </Typography>
            </div>
            <div>
              <Typography variant="h5" color="blue-gray" className="mt-10">
                Favorite Movies & TV Shows
              </Typography>
              <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
            <SortableTable />
    </>
  );
};

export default Profile;
