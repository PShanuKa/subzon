import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Input,
  Avatar,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { FaUser } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import { toast } from "react-toastify";
import { useGetAllCategoryQuery } from "../api/categorySlice";
import { useGetAllLanguageQuery } from "../api/languageSlice";




const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    link: 'Profile'
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  // {
  //   label: "Inbox",
  //   icon: InboxArrowDownIcon,
  // },
  // {
  //   label: "Help",
  //   icon: LifebuoyIcon,
  // },

];


const navListMenuItems = [
  {
    title: "Products",
  },
  {
    title: "About Us",
  },
  {
    title: "Blog",
  },
  {
    title: "Services",
  },
  {
    title: "Support",
  },
  {
    title: "Contact",
  },
  {
    title: "News",
  },
  {
    title: "Products",
  },
  {
    title: "Special Offers",
  },
];

const navMoviesLan = [
  {
    title: "ඉංග්‍රීසි",
  },
  {
    title: "දමිල",
  },
  {
    title: "හින්දි",
  },
  {
    title: "තෙලිගු",
  },
  {
    title: "කොරියානු",
  },
  {
    title: "දමිල",
  },
];

const navMoviesCategory = [
  {
    title: "Action",
  },
  {
    title: "Sci-fi",
  },
];

const navTvShowsLan = [
  {
    title: "Tamil",
  },
  {
    title: "Sinhala",
  },
];

const navTvShowCategory = [
  {
    title: "Action",
  },
  {
    title: "Sci-fi",
  },
  {
    title: "Funny",
  },
];
function ProfileMenu() {
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const  userInfo  = useSelector((state) => state.auth.userInfo);
  const closeMenu = () => setIsMenuOpen(false);

  const dispatch = useDispatch();
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={userInfo.user_image}
          />
          
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
       
        <Link to="/dashboard">
        <MenuItem
              className={`flex items-center gap-2 rounded`}
            >
              {React.createElement(UserCircleIcon, {
                className: `h-4 w-4 `,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color="inherit"
                >
                My Profile
              </Typography>
            </MenuItem>
                </Link>
        <MenuItem
              key="2"
              onClick={()=>(
                closeMenu,
                toast.success("Sign out Successfully"),
                dispatch(logout())
              )}
              className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"`}
            >
              {React.createElement(PowerIcon, {
                className: `h-4 w-4 text-red-500`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color="red"
              >
                Log Out
              </Typography>
            </MenuItem>
      </MenuList>
    </Menu>
  );
}

function MoviesListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { data: categoryData } = useGetAllCategoryQuery()
  const { data: languageData } = useGetAllLanguageQuery()



  const renderItems = categoryData?.categories?.map(( Category , key) => (
    <a href="#" key={key}>
      <MenuItem className="grid items-center gap-3 rounded-lg">
        <p>{Category.title}</p>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <Link to="/category">
            <ListItem
            
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 font-sinhala"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              චිත්‍රපට
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
                />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
                />
            </ListItem>
                </Link>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-2 gap-4 outline-none outline-0">
            <div>
              {" "}
              <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-bold"
              >
                <ListItem className="flex items-center gap-2 py-2 pr-4 font-sinhala">
                භාෂාව
                </ListItem>
              </Typography>
              {languageData?.language?.map(( languageDate , key) => (
                <a href="#" key={key}>
                  <MenuItem className="grid items-center gap-3 rounded-lg font-sinhala">
                    <p>{languageDate?.title} ({languageDate?.sinhalaTitle})</p>
                  </MenuItem>
                </a>
              ))}
            </div>
            <div>
              <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-bold"
              >
                <ListItem className="flex items-center gap-2 py-2 pr-4 font-sinhala" >
                වර්ගිකරණය
                </ListItem>
              </Typography>
              {categoryData?.categories?.map(( category , key) => (
                <a href="#" key={key}>
                  <MenuItem className="grid items-center gap-3 rounded-lg font-sinhala">
                    <p>{category.title} ({category.sinhalaTitle})</p>
                  </MenuItem>
                </a>
              ))}
            </div>
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <ul className="grid grid-cols-2 gap-4 outline-none outline-0">
            <div>
              {" "}
              <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-bold"
              >
                <ListItem className="flex items-center gap-2 py-2 pr-4 font-sinhala">
                භාෂාව
                </ListItem>
              </Typography>
              {languageData?.language?.map(( languageDate , key) => (
                <a href="#" key={key}>
                  <MenuItem className="grid items-center gap-3 rounded-lg font-sinhala">
                    <p>{languageDate?.sinhalaTitle}</p>
                  </MenuItem>
                </a>
              ))}
            </div>
            <div>
              <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-bold"
              >
                <ListItem className="flex items-center gap-2 py-2 pr-4 font-sinhala">
                වර්ගිකරණය
                </ListItem>
              </Typography>
              {categoryData?.categories?.map(( category , key) => (
                <a href="#" key={key}>
                  <MenuItem className="grid items-center gap-3 rounded-lg font-sinhala">
                    <p>{category.title} ({category.sinhalaTitle})</p>
                  </MenuItem>
                </a>
              ))}
            </div>
          </ul>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function TvShowListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const { data: categoryData } = useGetAllCategoryQuery()
  const { data: languageData } = useGetAllLanguageQuery()
  




  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              TV SHOW
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-2 gap-4 outline-none outline-0">
            <div>
              {" "}
              <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-bold"
              >
                <ListItem className="flex items-center gap-2 py-2 pr-4 font-sinhala">
                භාෂාව
                </ListItem>
              </Typography>
              {languageData?.language?.map(( languageDate , key) => (
                <a href="#" key={key}>
                  <MenuItem className="grid items-center gap-3 rounded-lg font-sinhala">
                    <p>{languageDate?.title} ({languageDate?.sinhalaTitle})</p>
                  </MenuItem>
                </a>
              ))}
            </div>
            <div>
              <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-bold"
              >
                <ListItem className="flex items-center gap-2 py-2 pr-4 font-sinhala">
                වර්ගිකරණය
                </ListItem>
              </Typography>
              {categoryData?.categories?.map(( category , key) => (
                <a href="#" key={key}>
                  <MenuItem className="grid items-center gap-3 rounded-lg font-sinhala">
                    <p>{category.title} ({category.sinhalaTitle})</p>
                  </MenuItem>
                </a>
              ))}
            </div>
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <ul className="grid grid-cols-2 gap-4 outline-none outline-0">
            <div>
              {" "}
              <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-bold"
              >
                <ListItem className="flex items-center gap-2 py-2 pr-4 font-sinhala">
                භාෂාව
                </ListItem>
              </Typography>
              {languageData?.language?.map(( languageDate , key) => (
                <a href="#" key={key}>
                  <MenuItem className="grid items-center gap-3 rounded-lg font-sinhala">
                    <p>{languageDate?.sinhalaTitle}</p>
                  </MenuItem>
                </a>
              ))}
            </div>
            <div>
              <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-bold"
              >
                <ListItem className="flex items-center gap-2 py-2 pr-4 font-sinhala">
                වර්ගිකරණය
                </ListItem>
              </Typography>
              {categoryData?.categories?.map(( category , key) => (
                <a href="#" key={key}>
                  <MenuItem className="grid items-center gap-3 rounded-lg font-sinhala">
                    <p>{category.title} ({category.sinhalaTitle})</p>
                  </MenuItem>
                </a>
              ))}
            </div>
          </ul>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  const  userInfo  = useSelector((state) => state.auth.userInfo);
  
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <MoviesListMenu />
      <TvShowListMenu />

      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          MOVIE COLLECTION
        </ListItem>
      </Typography>

      {!userInfo ? (
  <Typography
    as={Link}
    to="/login"
    variant="small"
    color="blue-gray"
    className="font-medium"
  >
    <ListItem className="flex items-center gap-2 py-2 pr-4">
      LOGIN / REGISTER
    </ListItem>
  </Typography>
) : (
  <ProfileMenu />
)}
     
      
    </List>
  );
}

export default function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="max-w-full px-4 py-2 rounded-none">
      <div className="flex items-center max-w-7xl mx-auto justify-between text-blue-gray-900">
        
        <Typography
          as={Link}
          to="/"

          variant="h3"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 "
          >
          SubZon
        </Typography>
    

        <div className="flex items-center">
          <div className="hidden lg:block ">
            <NavList />
          </div>
          <div>


          <div className="relative hidden lg:flex w-full ">
            <Input
              type="email"
              label="Search for..."
              value={email}
              onChange={onChange}
              className="pr-20"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              color="black"
              
              className="!absolute right-1 top-1 rounded"
            >
              Search
            </Button>
          </div>
        </div>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="flex w-full mt-3 flex-nowrap items-center gap-2 lg:hidden">
          <div className="relative flex w-full ">
            <Input
              type="email"
              label="Search for.."
              value={email}
              onChange={onChange}
              className="pr-20"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              color='black'
              
              className="!absolute right-1 top-1 rounded"
            >
              Search
            </Button>
          </div>
        </div>
        <NavList />

      </Collapse>
    </Navbar>
  );
}
