import {
  Avatar,
  Button,
  Input,
  Option,
  Radio,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";

const CreateBlog = () => {
  return (
    <>
      <div className="relative flex rounded-xl overflow-hidden">
        <img
          className="h-96 w-full rounded-lg object-cover object-center"
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        />
        <div className="absolute h-96 w-full bg-black flex justify-center items-center opacity-0 transition-all hover:opacity-75">
          {" "}
          <Button className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
            Upload Image
          </Button>
        </div>
      </div>
      <div className="flex gap-10 mt-5">
        <Radio name="type" label="Movie" defaultChecked />
        <Radio name="type" label="Tv show" />
      </div>
      <div className="flex gap-3 items-center mt-5">
        <Typography variant="h6">Title: </Typography>
        <Input
          className=""
          variant="outlined"
          label="Title"
          placeholder="Standard"
        />
      </div>
      <div className="flex gap-3 items-center mt-5">
        <Typography variant="h6">Sinhala_Title: </Typography>
        <Input
          className=""
          variant="outlined"
          label="Title"
          placeholder="Standard"
        />
      </div>
      <div className="flex gap-3 items-center mt-5">
        <Typography variant="h6">Slug: </Typography>
        <Input
          className=""
          variant="outlined"
          label="Title"
          placeholder="Standard"
        />
      </div>
      <div className="flex gap-3 items-center mt-5">
        <Typography variant="h6">Imdb: </Typography>
        <Input
          className=""
          variant="outlined"
          label="Title"
          placeholder="Standard"
        />
      </div>
      <div className="grid gap-3 items-center mt-5 ">
        <Typography variant="h6">Language: </Typography>
        <Select label="Select Version">
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
      </div>

      <div className="grid gap-3 items-center mt-5 ">
        <Typography variant="h6">Category: </Typography>
        <Select label="Select Version">
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
        <Select label="Select Version">
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
        <Select label="Select Version">
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
      </div>
      <div className="flex gap-3 items-center mt-5">
        <Typography variant="h6">Trailer_URL: </Typography>
        <Input
          className=""
          variant="outlined"
          label="Title"
          placeholder="Standard"
        />
      </div>
      <Typography variant="h6" className="mt-5">
        Other:{" "}
      </Typography>
      <div className="w-full gap-3 items-center overflow-scroll">
        <div className="w-full ">
          <div className="flex gap-3 mt-5">
            <Input
              className=""
              variant="outlined"
              label="Title"
              placeholder="Standard"
            />
            <Input
              className=""
              variant="outlined"
              label="Des"
              placeholder="Standard"
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex gap-3">
            <Input
              className=""
              variant="outlined"
              label="Title"
              placeholder="Standard"
            />
            <Input
              className=""
              variant="outlined"
              label="Des"
              placeholder="Standard"
            />
          </div>
        </div>
        <Button variant="outlined" className="w-full my-4">
          Add more
        </Button>
      </div>
      <div className="mt-10 grid gap-2">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Blog Description
        </Typography>
        <Textarea
          className="h-[350px]"
          variant="Description"
          label="Description"
        />
      </div>
    </>
  );
};

export default CreateBlog;
