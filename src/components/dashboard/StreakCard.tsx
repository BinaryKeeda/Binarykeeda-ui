"use client";

import { Card, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function StreakCard() {
  return (
    <Card className="p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">
        Learning Streak
      </h3>

      <div className="flex justify-center items-center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box
            sx={{
              borderRadius: 3,
              border: "2px solid #e5e7eb",
              p: 1,
            }}
          >
            <DateCalendar />
          </Box>
        </LocalizationProvider>
      </div>

      <p className="mt-4 text-green-600 text-sm">
        ● Active days
      </p>
    </Card>
  );
}

