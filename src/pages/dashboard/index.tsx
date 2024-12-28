import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import CompletedRegistrationsIcon from "../../components/icons/completed-registrations-icon";
import FolderIcon from "../../components/icons/folder-icon";
import PendingUserIcon from "../../components/icons/pending-user-icon";
import SearchIcon from "../../components/icons/search-icon";
import ShareIcon from "../../components/icons/share-icon";
import Sidebar from "../../components/layout/sidebar";
import Table from "../../components/ui/table";
import { useState } from "react";

const Dashboard = () => {
  const [age, setAge] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-[48px] px-[32px]  ">
        <div className="flex flex-col gap-[58px]">
          <div className="flex justify-between items-center gap-8  mb-24">
            <div className="flex gap-8">
              <button className="p-[6px] px-8 bg-grayLight rounded-8 border border-gray text-surfaceLight flex items-center gap-8 whitespace-nowrap">
                <PendingUserIcon /> Pending registrations
              </button>
              <button className="p-[6px] px-8  rounded-8 border border-gray text-surfaceLight flex items-center gap-8 whitespace-nowrap">
                <CompletedRegistrationsIcon />
                Completed registrations
              </button>
              <div className="border border-gray rounded-24 flex items-center gap-8 relative overflow-hidden">
                <div className="absolute left-16">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  className="ps-[42px] pe-16 h-full focus:outline-none placeholder-secondaryDark"
                  placeholder="Search by ID, FIN, name"
                />
              </div>
              <div className="relative">
                <FormControl sx={{ height: 40, minWidth: 182 }}>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    className="ps-[30px] pe-16 h-full focus:outline-none rounded-[100px]"
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#79747E", // Normal border rəngi
                        borderRadius: "100px",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#79747E", // Hover zamanı border rəngi
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#79747E", // Fokus zamanı border rəngi
                      },
                    }}
                  >
                    <MenuItem value="">Select package</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <div className="absolute left-16 top-0 translate-y-[50%]">
                  <FolderIcon />
                </div>
              </div>
            </div>
            <div>
              <button className="bg-primary rounded-24 p-[10px] px-16 text-white flex items-center gap-8 ">
                <ShareIcon width="18" height="18" fill="white" />
                Export
              </button>
            </div>
          </div>

          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
