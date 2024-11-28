import WidgetWrapper from "components/WidgetWrapper";
import FlexBetween from "components/FlexBetween";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { Help } from "@mui/icons-material";

const HelpWidget = () => {
    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color="primary" variant="h5" fontWeight="500">
                    Terms of Use
                </Typography>
                <IconButton>
                    <Help />
                </IconButton>
            </FlexBetween>
            <Divider sx={{ margin: "1rem 0" }} />
            <Box>
                <Typography variant="h6">Welcome to the Help Center!</Typography>
                <Typography variant="body1">We agree to provide you with the Instagram Service. The Service includes all of the Instagram products, features, applications, services, technologies and software that we provide to advance Instagram's mission: To bring you closer to the people and things that you love. The Service is made up of the following aspects:</Typography>

                <ul>
                    <li>
                        <span><b>Offering personalised opportunities to create, connect, communicate, discover and share.</b><br/> People are different. So, we offer you different types of accounts and features to help you create, share, grow your presence and communicate with people on and off Instagram. We also want to strengthen your relationships through shared experiences that you actually care about. So we build systems that try to understand who and what you and others care about, and use that information to help you create, find, join and share in experiences that matter to you. Part of that is highlighting content, features, offers and accounts that you might be interested in, and offering ways for you to experience Instagram, based on things that you and others do on and off Instagram. </span>
                    </li>
                    <li >
                        <span><b>Fostering a positive, inclusive and safe environment.</b><br/> We develop and use tools and offer resources to our community members that help to make their experiences positive and inclusive, including when we think that they might need help. We also have teams and systems that work to combat abuse and breaches of our Terms and policies, as well as harmful and deceptive behaviour.  We use all of the information that we have – including your information – to try to keep our platform secure. We may also share information about misuse or harmful content with other Meta Companies or law enforcement. Learn more in the Privacy Policy.</span>
                    </li>
                    <li >
                        <span ><b>Developing and using technologies that help us consistently serve our growing community.</b><br/> Organising and analysing information for our growing community is central to our Service. A big part of our Service is creating and using cutting-edge technologies that help us personalise, protect and improve our Service on an incredibly large scale for a broad global community. Technologies such as artificial intelligence and machine learning give us the power to apply complex processes across our Service. Automated technologies also help us to ensure the functionality and integrity of our Service. </span></li><li ><span ><b>Providing consistent and seamless experiences across other Meta Company Products.</b><br/> Instagram is part of the Meta Companies, which share technology, systems, insights and information, including the information that we have about you (learn more in the Privacy Policy) in order to provide services that are better, safer and more secure. We also provide ways to interact across the Meta Company Products that you use, and designed systems to achieve a seamless and consistent experience across the Meta Company Products depending on your choices.</span>
                    </li>
                    <li >
                        <span ><b>Ensuring access to our Service.</b><br/> To operate our global Service, we must store and transfer data across our systems around the world, including outside of your country of residence. The use of this global infrastructure is necessary and essential to provide our Service. This infrastructure may be owned or operated by Meta Platforms, Inc., Meta Platforms Ireland Limited or their affiliates. </span>
                    </li>
                    <li >
                        <span ><b>Connecting you with brands, products and services in ways that you care about.</b><br/>We use data from Instagram and other Meta Company Products, as well as from third-party partners, to show you ads, offers and other sponsored content that we believe will be meaningful to you. And we try to make that content as relevant as all of your other experiences on Instagram.</span>
                    </li>
                    <li >
                        <span ><b>Research and innovation.</b><br/>
                        We use the information we have to study our Service and collaborate with others on research to make our Service better and contribute to the well-being of our community.
                        </span>
                    </li>
                </ul>
            </Box>
        </WidgetWrapper>
    );
}

export default HelpWidget