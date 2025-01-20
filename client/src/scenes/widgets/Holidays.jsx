import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import MoroccanHolidaysList from "./MoroccanHolidaysList";
import { env } from "config";

const Holidays = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  //const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={`${env.serverEndpoint()}/assets/holidays1.png`}
      />
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
            Holidays
        </Typography>
        <Typography color={medium}>2024/2025</Typography>
      </FlexBetween>
      <MoroccanHolidaysList />
    </WidgetWrapper>
  );
};

export default Holidays;
