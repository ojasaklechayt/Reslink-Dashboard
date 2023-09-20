import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import { Button } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

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
      <div className="flex flex-col px-10 py-20 font-poppins">
        <h1 className="text-white text-3xl">Welcome back, Olivia</h1>
        <h3 className="text-white text-sm pl-1">Track, manage researchers and submissions.</h3>
      </div>
    </div>
  );
};

export default Dashboard;
