import { Avatar, Button, Input, Textarea, Typography } from "@material-tailwind/react";


const EditProfile = () => {
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
                
                <Button
                  className="flex items-center py-3"
    
                  >
                   Update
                </Button>
             
            </div>
            <div className="mt-10 grid gap-5">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Profile Information
              </Typography>
              <div className="flex items-center gap-5">
                <Typography  className="w-[100px]" variant="h6">First Name: </Typography>
                <div className="">
                <Input className="" variant="outlined" label="First Name" placeholder="Standard"/>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Typography variant="h6" className="w-[100px]">Last Name: </Typography>
                <Input className="max-w-[400px]" variant="outlined" label="Last Name" placeholder="Standard"/>
              </div>
              <div className="flex gap-3 items-center">
                <Typography variant="h6">Mobile: </Typography>
                <Input className="max-w-[400px]" variant="outlined" label="Mobile" placeholder="Standard"/>
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
              <Textarea className="h-[350px]" label="Description" />
            </div>
            
          </>
  )
}

export default EditProfile