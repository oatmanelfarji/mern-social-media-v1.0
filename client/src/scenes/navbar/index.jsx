import { useEffect, useRef, useState } from "react";
import {
    Box,
    IconButton,
    InputBase,
    Typography,
    MenuList,
    MenuItem,
    useTheme,
    useMediaQuery,
    Popover,
    Badge,
    Divider,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from "@mui/material";
import {
    Search,
    Message,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Menu,
    Close,
    Person,
    Logout,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { Link, useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import { setConvs, setNewMsgCount, setSearchValue } from "state/chatSlice";
import SearchDropdownWidget from "scenes/widgets/SearchDropdownWidget";
import { env } from "../../config";
import AvatarMenu from "./AvatarMenu";

const Navbar = ({ socket, lowerBodyRef }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setNewNotiCounts(0);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [newNotiCounts, setNewNotiCounts] = useState(0);
    const [isBlurred, setIsBlurred] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, users, token } = useSelector((state) => state.authReducer);
    const { searchValue, newMsgCount, convs } = useSelector(
        (state) => state.chatReducer
    );
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const searchRef = useRef(null);

    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const background = theme.palette.background.default;
    const alt = theme.palette.background.alt;
    const main = theme.palette.neutral.main;

    const fullName = `${user.firstName} ${user.lastName}`;

    const getConversations = async () => {
        try {
            const response = await fetch(
                `${env.serverEndpoint()}/conversations/${user._id}`,
                {
                    method: "GET",
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            const data = await response.json();
            dispatch(setConvs(data));
        } catch (error) {
            console.log(error);
        }
    };

    const displayNotification = ({ userName, type }) => {
        let action;
        if (type === 1) {
            action = `${userName} liked your post`;
        } else if (type === 2) {
            action = `${userName} commented your post`;
        } else if (type === 3) {
            action = `${userName} added you as his friend`;
        }
        return (
            <>
                <Divider />
                <Typography sx={{ p: 2 }} color={main}>
                    {action}
                </Typography>
            </>
        );
    };
    // const blurRef = useRef(null)

    useEffect(() => {
        getConversations();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        socket?.on("get-notification", (noti) => {
            setNewNotiCounts((prev) => prev + 1);
            setNotifications((prev) => [...prev, noti]);
        });
        if (searchRef.current) {
            searchRef.current.querySelector("input").onblur = () => {
                lowerBodyRef.current?.addEventListener("click", () => {
                    setIsBlurred(true);
                });
            };
            searchRef.current.querySelector("input").onfocus = () => {
                setIsBlurred(false);
            };
        }
        // eslint-disable-next-line
    }, [socket]);

    useEffect(() => {
        socket?.on("get-newMsg-count", ({ isNewMsg }) => {
            let count = 0;
            if (isNewMsg) {
                convs.forEach((el) => {
                    if (el.checked) count += 1;
                });
            }
            dispatch(setNewMsgCount(count));
        });
        // eslint-disable-next-line
    }, [socket, convs]);

    return (
        <FlexBetween
            padding="1rem 6%"
            backgroundColor={alt}
        // boxShadow="2px 2px 2px #e0e0e0"
        >
            <FlexBetween gap="1.75rem">
                <Typography
                    fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="primary"
                    onClick={() => navigate("/home")}
                    sx={{
                        "&:hover": {
                            // color: primaryLight,
                            cursor: "pointer",
                        },
                    }}
                >
                    <button title="Family Unite, MemoryBook, PrivateBook" style={{ cursor: "pointer", background: "transparent", border: "none" }}>
                        <img src="/assets/logo.png" alt="logo" width="38px" style={{ pointerEvents: "none" }} />
                    </button>
                </Typography>
                {isNonMobileScreens && (
                    <FlexBetween
                        backgroundColor={neutralLight}
                        borderRadius="9px"
                        gap="3rem"
                        padding="0.1rem 1.5rem"
                        position="relative"
                    >
                        <InputBase
                            onChange={(e) =>
                                dispatch(setSearchValue(e.target.value))
                            }
                            value={searchValue}
                            placeholder="Search..."
                            ref={searchRef}
                        />
                        <IconButton>
                            <Search />
                        </IconButton>
                        {!isBlurred && searchValue && (
                            <SearchDropdownWidget
                                socket={socket}
                                users={users}
                                searchValue={searchValue}
                                userId={user._id}
                            />
                        )}
                    </FlexBetween>
                )}
            </FlexBetween>

            {/* DESKTOP NAV */}
            {isNonMobileScreens ? (
                <FlexBetween gap="2rem">
                    <Tooltip title="Dark Mode" placement="bottom">
                        <IconButton onClick={() => dispatch(setMode())}>
                            {theme.palette.mode === "dark" ? (
                                <DarkMode sx={{ fontSize: "25px" }} />
                            ) : (
                                <LightMode sx={{ color: dark, fontSize: "25px" }} />
                            )}
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Messenger" placement="bottom">
                        <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to="/messenger"
                        >
                            <IconButton>
                                <Badge
                                    variant={newMsgCount > 0 ? "dot" : ""}
                                    color="primary"
                                >
                                    <Message sx={{ fontSize: "25px" }} />
                                </Badge>
                            </IconButton>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Notifications" placement="bottom">
                        <IconButton onClick={(e) => handleClick(e)}>
                            <Badge badgeContent={newNotiCounts} color="primary">
                                <Notifications sx={{ fontSize: "25px" }} />
                            </Badge>
                        </IconButton>
                    </Tooltip>

                    <Popover
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                    >
                        {notifications.length === 0 ? (
                            <Typography sx={{ p: 3 }}>
                                No new notifications for you!
                            </Typography>
                        ) : (
                            notifications.map((noti) => (
                                <FlexBetween>
                                    {displayNotification(noti)}
                                </FlexBetween>
                            ))
                        )}
                    </Popover>
                    <Tooltip title="Help" placement="bottom">
                        <Link to="/help" style={{ textDecoration: "none", color: "white" }}>
                            <Help sx={{ fontSize: "25px" }} />
                        </Link>
                    </Tooltip>

                    <AvatarMenu />


                </FlexBetween>
            ) : (
                <IconButton
                    onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                >
                    <Menu />
                </IconButton>
            )}

            {/* MOBILE NAV */}
            {!isNonMobileScreens && isMobileMenuToggled && (
                <Box
                    position="fixed"
                    right="0"
                    bottom="0"
                    height="100%"
                    zIndex="10"
                    maxWidth="500px"
                    minWidth="300px"
                    backgroundColor={background}
                >
                    {/* CLOSE ICON */}
                    <Box display="flex" justifyContent="flex-end" p="1rem">
                        <IconButton
                            onClick={() =>
                                setIsMobileMenuToggled(!isMobileMenuToggled)
                            }
                        >
                            <Close />
                        </IconButton>
                    </Box>

                    {/* MENU ITEMS */}
                    <FlexBetween>
                        <MenuList sx={{
                            width: "300px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2rem"
                        }}>
                            <MenuItem onClick={handleClose} >

                                <ListItemIcon sx={{ width: "4rem" }}>
                                    <Person sx={{ fontSize: "2rem" }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Profile"
                                    secondary={fullName}
                                />
                            </MenuItem>
                            <MenuItem onClick={handleClose} >
                                <ListItemIcon sx={{ width: "4rem" }}>
                                    <Badge variant="dot" color="primary">
                                        <Message sx={{ fontSize: "2rem" }} />
                                    </Badge>
                                </ListItemIcon>
                                <ListItemText primary="Messages" />
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon sx={{ width: "4rem" }}>
                                    <Badge badgeContent={newNotiCounts} color="primary">
                                        <Notifications
                                            onClick={(e) => handleClick(e)}
                                            sx={{ fontSize: "2rem" }}
                                        />
                                    </Badge>
                                </ListItemIcon>
                                <ListItemText primary="Notifications" />
                            </MenuItem>
                            <MenuItem onClose={handleClose} onClick={() => dispatch(setMode())}>
                                <ListItemIcon sx={{ width: "4rem" }}>
                                    {theme.palette.mode === "dark" ? (
                                        <DarkMode sx={{ fontSize: "25px" }} />
                                    ) : (
                                        <LightMode sx={{ color: dark, fontSize: "25px" }} />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary="Toggle Mode" />
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon sx={{ width: "4rem" }}>
                                    <Help sx={{ fontSize: "2rem" }} />
                                </ListItemIcon>
                                <ListItemText primary="Help" />
                            </MenuItem>
                            <MenuItem onClose={handleClose} onClick={() => dispatch(setLogout())}>
                                <ListItemIcon sx={{ width: "4rem" }}>
                                    <Logout sx={{ fontSize: "2rem" }} />
                                </ListItemIcon>
                                <ListItemText primary="Log Out" />
                            </MenuItem>
                        </MenuList>
                    </FlexBetween>
                </Box>
            )}
        </FlexBetween>
    );
};

export default Navbar;
