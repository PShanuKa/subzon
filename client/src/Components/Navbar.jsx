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
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

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

function MoviesListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem className="grid items-center gap-3 rounded-lg">
        <p>{title}</p>
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
              {navMoviesLan.map(({ title }, key) => (
                <a href="#" key={key}>
                  <MenuItem className="grid items-center gap-3 rounded-lg font-sinhala">
                    <p>{title}</p>
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
              {navMoviesCategory.map(({ title }, key) => (
                <a href="#" key={key}>
                  <MenuItem className="grid items-center gap-3 rounded-lg font-sinhala">
                    <p>{title}</p>
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
              {navMoviesLan.map(({ title }, key) => (
                <a href="#" key={key}>
                  <MenuItem className="grid items-center gap-3 rounded-lg font-sinhala">
                    <p>{title}</p>
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
              {navMoviesCategory.map(({ title }, key) => (
                <a href="#" key={key}>
                  <MenuItem className="grid items-center gap-3 rounded-lg">
                    <p>{title}</p>
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

  const renderItems = navListMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem className="grid items-center gap-3 rounded-lg font-sinhala">
        <p>{title}</p>
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
              {navTvShowsLan.map(({ title }, key) => (
                <a href="#" key={key}>
                  <MenuItem className="grid items-center gap-3 rounded-lg font-sinhala">
                    <div><p>{title}</p></div>
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
              {navTvShowCategory.map(({ title }, key) => (
                <a href="#" key={key}>
                  <MenuItem className="grid items-center gap-3 rounded-lg font-sinhala">
                    <div><p>{title}</p></div>
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
              {navTvShowsLan.map(({ title }, key) => (
                <a href="#" key={key}>
                  <MenuItem className="grid items-center gap-3 rounded-lg font-sinhala">
                    <div><p>{title}</p></div>
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
              {navTvShowCategory.map(({ title }, key) => (
                <a href="#" key={key}>
                  <MenuItem className="grid items-center gap-3 rounded-lg font-sinhala">
                    <div><p>{title}</p></div>
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

      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          LOGIN / REGISTER
        </ListItem>
      </Typography>
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
