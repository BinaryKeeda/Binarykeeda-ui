import { Notifications } from "@mui/icons-material";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Topbar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h2 className="text-4xl font-serif font-bold text-black">DASHBOARD</h2>
        <p className="text-gray-500">Track your progress and achievements</p>
      </div>

      <div className="flex flex-wrap gap-3 ">
        <Button variant="outlined" 
        sx={{borderColor: "gray", color: "gray", fontFamily: "revert" }}>
           <b> Switch Dashboard </b> </Button>
        <Button variant="outlined" sx={{borderColor: "gray", color: "gray", fontFamily: "revert" }}> <b>Available coins</b></Button>
        <Button variant="outlined" sx={{borderColor: "gray", color: "gray", fontFamily: "revert" }} startIcon={<Notifications />}>
          <b>Notification</b>
        </Button>
        <Button
          variant="contained"
          className="!bg-gradient-to-r !from-blue-500 !to-purple-500"
        >
          <b>Avatar</b>
        </Button>
      </div>
    </div>
  );
}
