import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Navbar from "scenes/navbar";
import Form from "./Form";

const ProfileSettings = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    return (
        <Box>
            <Navbar />
            <Box
                width="100%"
                backgroundColor={theme.palette.background.alt}
                p="1rem 6%"
                textAlign="center"
            >
                <Box
                    width={isNonMobileScreens ? "50%" : "93%"}
                    p="2rem"
                    m="2rem auto"
                    borderRadius="1.5rem"
                    backgroundColor={theme.palette.background.alt}
                >
                    <Form />
                </Box>
            </Box>
        </Box>
    );
};

export default ProfileSettings;
