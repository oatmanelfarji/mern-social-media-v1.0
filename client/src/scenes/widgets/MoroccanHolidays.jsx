import { Box, Divider, Typography, useTheme } from '@mui/material';
import FlexBetween from 'components/FlexBetween';

const MoroccanHolidays = () => {

    const { palette } = useTheme();
    //const dark = palette.neutral.dark;
    //const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    const holidays = [
        {
            date: 'January 1',
            name: 'New Year',
            arabic: 'رأس السنة الميلادية',
            color: medium
        },
        {
            date: 'January 11',
            name: 'Independence Day',
            arabic: 'عيد العرش',
            color: medium
        },
        {
            date: 'January 14',
            name: 'Amazigh New Year',
            arabic: 'تقديم وثيقة الاستقلال',
            color: medium
        },
        {
            date: 'February 28',
            name: 'Ramadan',
            arabic: 'رمضان',
            color: 'green'
        },
        {
            date: 'March 20',
            name: 'Spring',
            arabic: ' الفصل الربيعي',
            color: 'pink'
        },
        {
            date: 'May 1',
            name: 'Labour Day',
            arabic: 'عيد الشغل',
            color: medium
        },
        {
            date: 'June 21',
            name: 'Summer',
            arabic: ' فصل الصيف',
            color: 'pink'
        },
        {
            date: 'June 25 or 26 ',
            name: 'Islamic New Year',
            arabic: 'فاتح محرم ',
            color: 'green'
        },
        {
            date: 'July 30',
            name: 'Throne Day',
            arabic: 'عيد العرش',
            color: medium
        },
        {
            date: 'August 14',
            name: 'Dikrat Oued Ed-Dahab',
            arabic: 'استرجاع إقليم وادي الذهب',
            color: medium
        },
        {
            date: 'August 20',
            name: 'Revolution Day',
            arabic: 'ثورة الملك والشعب',
            color: medium
        },
        {
            date: 'August 21',
            name: 'Youth Day',
            arabic: 'عيد الشباب',
            color: medium
        },
        {
            date: 'september 5',
            name: 'Eid Mawlid',
            arabic: 'عيد المولد النبوي',
            color: 'green',
            description: '( Arabic : عيد المولد النبوي ) is an annual festival commemorating the birthday of Islamic prophet Muhammad on the traditional date of 12 Rabi al-Awwal, the third month of the Islamic calendar. A day central to the traditions of Sunni Islam, the Mawlid is also celebrated by Shia Muslims.'
        },
        {
            date: 'September 22',
            name: 'Autumn',
            arabic: ' فصل الخريف',
            color: 'pink'
        },
        {
            date: 'November 6',
            name: 'Green March Day',
            arabic: 'ذكرى المسيرة الخضراء',
            color: medium
        },
        {
            date: 'November 18',
            name: 'Independence Day',
            arabic: 'عيد الاستقلال',
            color: medium
        },
        {
            date: 'December 21',
            name: 'Winter',
            arabic: ' فصل الشتاء',
            color: 'pink'
        },
        // Add more holidays here...
    ];
    console.log('holidays - ', holidays);

    return (
        <>
            {holidays.map((holiday) => (
                <Box key={holiday.date} >
                    <FlexBetween>
                        <Typography color={holiday.color} m="0.2rem 0" > {holiday.name} </Typography>
                        <Typography color={holiday.color}> {holiday.date} </Typography>

                    </FlexBetween>

                </Box>
            ))}
            <Divider />
            <Typography color={medium} m="0.5rem 0" textAlign={"justify"}>
                <b>December 21 - Winter start:</b> The start of the winter season, marking the beginning of the cold weather and the arrival of snow.
            </Typography>
        </>
    );
};

export default MoroccanHolidays;