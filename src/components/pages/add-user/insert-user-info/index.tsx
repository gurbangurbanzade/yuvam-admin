import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import MobilePhoneIcon from "../../../icons/mobile-phone-icon";
import FinIcon from "../../../icons/fin-icon";
import HastagIcon from "../../../icons/hastag-icon";
import { useState } from "react";
import FolderIcon from "../../../icons/folder-icon";
import HomeIcon from "../../../icons/home-icon";
import MoneyIcon from "../../../icons/money-icon";
import PlusIcon from "../../../icons/plus-icon";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 407,
  width: "100%",
  bgcolor: "background.paper",
  padding: "48px 63px",
  borderRadius: "12px",
};
interface IProps {
  handleSuccess: () => void;
}

const InsertUserinfo = ({ handleSuccess }: IProps) => {
  const [age, setAge] = useState<string>("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Box sx={style} className="flex flex-col gap-16">
      <div className="relative">
        <TextField
          label="Mobile Number"
          id="outlined-start-adornment"
          className="w-full p-3"
          sx={{
            "& .MuiInputLabel-root": {
              paddingLeft: "40px",
              transition: "all 0.2s ease-in-out",
              color: "#49454F",
            },
            "& .MuiInputLabel-shrink": {
              paddingLeft: "0px",
            },
            "& .MuiOutlinedInput-input": {
              paddingLeft: "40px",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px", // Input border radius
              "& fieldset": {
                borderColor: "#79747E", // Normal border color
              },
              "&:hover fieldset": {
                borderColor: "#79747E", // Hover zamanı border rəngi
              },
              "&.Mui-focused fieldset": {
                borderColor: "#79747E", // Fokus zamanı border rəngi
                color: "#79747E", // Fokus zamanı rəng
              },
            },

            "& .MuiInputLabel-root.Mui-focused": {
              color: "#49454F", // Fokus zamanı label rəngi
            },
          }}
        />
        <div className="absolute left-[12px] top-1/2 transform -translate-y-1/2">
          <MobilePhoneIcon />
        </div>
      </div>
      <div className="relative">
        <TextField
          label="Mobile Number"
          id="outlined-start-adornment"
          className="w-full p-3"
          sx={{
            "& .MuiInputLabel-root": {
              paddingLeft: "40px",
              transition: "all 0.2s ease-in-out",
              color: "#49454F",
            },
            "& .MuiInputLabel-shrink": {
              paddingLeft: "0px",
            },
            "& .MuiOutlinedInput-input": {
              paddingLeft: "40px",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px", // Input border radius
              "& fieldset": {
                borderColor: "#79747E", // Normal border color
              },
              "&:hover fieldset": {
                borderColor: "#79747E", // Hover zamanı border rəngi
              },
              "&.Mui-focused fieldset": {
                borderColor: "#79747E", // Fokus zamanı border rəngi
                color: "#79747E", // Fokus zamanı rəng
              },
            },

            "& .MuiInputLabel-root.Mui-focused": {
              color: "#49454F", // Fokus zamanı label rəngi
            },
          }}
        />
        <div className="absolute left-[12px] top-1/2 transform -translate-y-1/2">
          <FinIcon />
        </div>
      </div>
      <div className="relative">
        <TextField
          label="Mobile Number"
          id="outlined-start-adornment"
          className="w-full p-3"
          sx={{
            "& .MuiInputLabel-root": {
              paddingLeft: "40px",
              transition: "all 0.2s ease-in-out",
              color: "#49454F",
            },
            "& .MuiInputLabel-shrink": {
              paddingLeft: "0px",
            },
            "& .MuiOutlinedInput-input": {
              paddingLeft: "40px",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px", // Input border radius
              "& fieldset": {
                borderColor: "#79747E", // Normal border color
              },
              "&:hover fieldset": {
                borderColor: "#79747E", // Hover zamanı border rəngi
              },
              "&.Mui-focused fieldset": {
                borderColor: "#79747E", // Fokus zamanı border rəngi
                color: "#79747E", // Fokus zamanı rəng
              },
            },

            "& .MuiInputLabel-root.Mui-focused": {
              color: "#49454F", // Fokus zamanı label rəngi
            },
          }}
        />
        <div className="absolute left-[12px] top-1/2 transform -translate-y-1/2">
          <HastagIcon />
        </div>
      </div>
      <div className="relative">
        <FormControl fullWidth>
          <InputLabel
            sx={{
              paddingLeft: "40px", // Label üçün padding
              transition: "all 0.2s ease-in-out", // Keçid animasiyası
              color: "#49454F",
              "&.MuiInputLabel-shrink": {
                paddingLeft: "0px", // Yuxarı qalxdıqda padding sıfırlanır
              },
              "&.Mui-focused": {
                color: "#49454F", // Fokus zamanı label rəngi
                paddingLeft: "0px", // Fokus zamanı padding sıfırlanır
              },
            }}
            id="demo-simple-select-label"
          >
            Age
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#79747E", // Normal border rəngi
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#79747E", // Hover zamanı border rəngi
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#79747E", // Fokus zamanı border rəngi
              },
            }}
            value={age}
            className="px-[40px]"
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <div className="absolute left-[12px] top-1/2 transform -translate-y-1/2">
          <FolderIcon width="24" height="24" />
        </div>
      </div>
      <div className="relative">
        <FormControl fullWidth>
          <InputLabel
            sx={{
              paddingLeft: "40px", // Label üçün padding
              transition: "all 0.2s ease-in-out", // Keçid animasiyası
              color: "#49454F",
              "&.MuiInputLabel-shrink": {
                paddingLeft: "0px", // Yuxarı qalxdıqda padding sıfırlanır
              },
              "&.Mui-focused": {
                color: "#49454F", // Fokus zamanı label rəngi
                paddingLeft: "0px", // Fokus zamanı padding sıfırlanır
              },
            }}
            id="demo-simple-select-label"
          >
            Coverage
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#79747E", // Normal border rəngi
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#79747E", // Hover zamanı border rəngi
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#79747E", // Fokus zamanı border rəngi
              },
            }}
            value={age}
            className="px-[40px]"
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <div className="absolute left-[12px] top-1/2 transform -translate-y-1/2">
          <HomeIcon />
        </div>
      </div>
      <div className="relative">
        <FormControl fullWidth>
          <InputLabel
            sx={{
              paddingLeft: "40px", // Label üçün padding
              transition: "all 0.2s ease-in-out", // Keçid animasiyası
              color: "#49454F",
              "&.MuiInputLabel-shrink": {
                paddingLeft: "0px", // Yuxarı qalxdıqda padding sıfırlanır
              },
              "&.Mui-focused": {
                color: "#49454F", // Fokus zamanı label rəngi
                paddingLeft: "0px", // Fokus zamanı padding sıfırlanır
              },
            }}
            id="demo-simple-select-label"
          >
            Billing
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#79747E", // Normal border rəngi
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#79747E", // Hover zamanı border rəngi
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#79747E", // Fokus zamanı border rəngi
              },
            }}
            value={age}
            className="px-[40px]"
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <div className="absolute left-[12px] top-1/2 transform -translate-y-1/2">
          <MoneyIcon />
        </div>
      </div>
      <button
        onClick={handleSuccess}
        className="bg-primary font-500 text-14 leading-20 rounded-24 p-8 text-white flex items-center gap-8 justify-center"
      >
        <PlusIcon />
        Add user
      </button>
    </Box>
  );
};

export default InsertUserinfo;
