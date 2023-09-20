import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import { Button } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Person from "../../assets/person.svg";
import Edit from "../../assets/edit.svg";
import Save from "../../assets/save.svg";
import Eye from "../../assets/eye.svg";

const cardData = [
  {
    title: "Active Projects",
    value: "07",
    image: Person,
  },
  {
    title: "Proposals",
    value: "04",
    image: Edit,
  },
  {
    title: "Active Jobs",
    value: "03",
    image: Save,
  },
  {
    title: "Application",
    value: "240",
    image: Eye,
  },
];

const Dashboard = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex flex-row ml-5 mt-5">
        <Paper
          component="form"
          sx={{
            p: "2px",
            display: "flex",
            alignItems: "center",
            width: 350,
            background: "black",
            borderRadius: "25px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <IconButton
            type="button"
            sx={{ p: "10px", color: "white" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: "white" }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Paper>
        <div className="flex flex-row gap-x-5 items-center ml-[50%]">
          <Badge
            badgeContent=""
            color="error"
            variant="dot"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <NotificationsNoneOutlinedIcon sx={{ color: "white" }} />
          </Badge>
          <Button
            variant="contained"
            sx={{
              background: "#3FA268",
              borderRadius: "25px",
              py: "10px",
              textTransform: "none",
              fontFamily: "Poppins",
              "&:hover": {
                background: "green", // Change the background color on hover
              },
            }}
            startIcon={<AddOutlinedIcon />}
          >
            Create New Project
          </Button>
        </div>
      </div>
      <div className="flex flex-col px-10 py-20 font-poppins justify-between mr-auto">
        <h1 className="text-white text-3xl">Welcome back, Olivia</h1>
        <h3 className="text-white text-sm pl-1">
          Track, manage researchers and submissions.
        </h3>
      </div>
      <div className="flex flex-row justify-center gap-x-10 items-center font-poppins text-white mt-[-3%]">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-row bg-white bg-opacity-[8%] w-[250px] p-3 py-5 gap-x-5 rounded-md border border-gray-500 border-opacity-75 backdrop-blur-5"
          >
            <div className="flex flex-col">
              <h1 className="text-5xl">{card.value}</h1>
              <p>{card.title}</p>
            </div>
            <div className="flex ml-auto flex-col justify-center items-center">
              <img
                src={card.image}
                alt={card.title}
                className="bg-[#3FA268] h-[60px] w-50 rounded-[50px] p-3"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center text-white gap-x-5 mt-5 font-poppins">
        <div className="flex flex-col bg-white bg-opacity-[8%] py-5 px-5 rounded-md w-[550px] border border-gray-500 border-opacity-75 backdrop-blur-5">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-2xl">Posted Projects</h1>
            <p className="underline text-md">See All</p>
          </div>
          <div className="bg-gray-500 h-[1px] w-[500px] mt-5 rounded-md"></div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center bg-[#21282C80]">
              <p>Thermal protective performance an...</p>
              <div>
                <div className="flex flex-row justify-start items-center gap-x-1 w-40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <circle cx="10" cy="10" r="5" />
                  </svg>
                  <p className="text-start">Resume review</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <p>Effect of heat flux and moisture cont...</p>
              <div>
                <div className="flex flex-row justify-start items-center gap-x-1 w-40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-orange-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <circle cx="10" cy="10" r="5" />
                  </svg>
                  <p className="text-start">Interview</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <p>Thermal protective performance an...</p>
              <div>
                <div className="flex flex-row justify-start items-center gap-x-1 w-40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="#73C2B4"
                  >
                    <circle cx="10" cy="10" r="5" />
                  </svg>
                  <p className="text-start">Task</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <p>Testing and evaluation of functional te...</p>
              <div>
                <div className="flex flex-row justify-start items-center gap-x-1 w-40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="#44C677"
                  >
                    <circle cx="10" cy="10" r="5" />
                  </svg>
                  <p className="text-start">Payment</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <p>Development of thermal liner for Extre...</p>
              <div>
                <div className="flex flex-row justify-start items-center gap-x-1 w-40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="white"
                  >
                    <circle cx="10" cy="10" r="5" />
                  </svg>
                  <p className="text-start">Closed</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <p>Testing and evaluation of functional...</p>
              <div>
                <div className="flex flex-row justify-start items-center gap-x-1 w-40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="#44C677"
                  >
                    <circle cx="10" cy="10" r="5" />
                  </svg>
                  <p className="text-start">Payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white bg-opacity-[8%] py-5 px-5 rounded-md w-[550px] border border-gray-500 border-opacity-75 backdrop-blur-5">
          <div className="flex flex-row">
            <h1 className="text-2xl">Recent Activities</h1>
          </div>
          <div className="bg-gray-500 h-[1px] w-[500px] mt-5 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
