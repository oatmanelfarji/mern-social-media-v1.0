import {  useState } from 'react'
import { Box, Divider, Typography, useTheme } from '@mui/material';
import FlexBetween from 'components/FlexBetween';

const MoroccanHolidaysList = () => {

    const { palette } = useTheme();
    //const dark = palette.neutral.dark;
    //const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    const holidays = [
        {
            id: 1,
            date: 'January 1',
            name: 'New Year',
            arabic: 'رأس السنة الميلادية',
            color: medium
        },
        {
            id: 2,
            date: 'January 11',
            name: 'Independence Day',
            arabic: 'عيد العرش',
            color: medium
        },
        {
            id: 3,
            date: 'January 14',
            name: 'Amazigh New Year',
            arabic: 'تقديم وثيقة الاستقلال',
            color: medium
        },
        {
            id: 4,
            date: 'February 28',
            name: 'Ramadan',
            arabic: 'رمضان',
            color: 'green'
        },
        {
            id: 5,
            date: 'March 20',
            name: 'Spring',
            arabic: ' الفصل الربيعي',
            color: 'pink'
        },
        {
            id: 6,
            date: 'May 1',
            name: 'Labour Day',
            arabic: 'عيد الشغل',
            color: medium
        },
        {
            id: 7,
            date: 'June 6',
            name: 'Eid Al-Adha',
            arabic: 'عيد الأضحى',
            color: 'green'
        },
        {
            id: 8,
            date: 'June 21',
            name: 'Summer',
            arabic: ' فصل الصيف',
            color: 'pink'
        },
        {
            id: 9,
            date: 'June 25 or 26 ',
            name: 'Islamic New Year',
            arabic: 'فاتح محرم ',
            color: 'green'
        },
        {
            id: 10,
            date: 'July 30',
            name: 'Throne Day',
            arabic: 'عيد العرش',
            color: medium
        },
        {
            id: 11,
            date: 'August 14',
            name: 'Dikrat Oued Ed-Dahab',
            arabic: 'استرجاع إقليم وادي الذهب',
            color: medium
        },
        {
            id: 12,
            date: 'August 20',
            name: 'Revolution Day',
            arabic: 'ثورة الملك والشعب',
            color: medium
        },
        {
            id: 13,
            date: 'August 21',
            name: 'Youth Day',
            arabic: 'عيد الشباب',
            color: medium
        },
        {
            id: 14,
            date: 'september 5',
            name: 'Eid Mawlid',
            arabic: 'عيد المولد النبوي',
            color: 'green',
            description: '( Arabic : عيد المولد النبوي ) is an annual festival commemorating the birthday of Islamic prophet Muhammad on the traditional date of 12 Rabi al-Awwal, the third month of the Islamic calendar. A day central to the traditions of Sunni Islam, the Mawlid is also celebrated by Shia Muslims.'
        },
        {
            id: 15,
            date: 'September 22',
            name: 'Autumn',
            arabic: ' فصل الخريف',
            color: 'pink'
        },
        {
            id: 16,
            date: 'November 6',
            name: 'Green March Day',
            arabic: 'ذكرى المسيرة الخضراء',
            color: medium
        },
        {
            id: 17,
            date: 'November 18',
            name: 'Independence Day',
            arabic: 'عيد الاستقلال',
            color: medium
        },
        {
            id: 18,
            date: 'December 21',
            name: 'Winter',
            arabic: ' فصل الشتاء',
            color: 'pink'
        },
        // Add more holidays here...
    ];

    const [scrollTop, setScrollTop] = useState(0);
    const itemsHighlight = 30;
    const innerHighlight = holidays.length * itemsHighlight;
    const windowHighlight = 300;
    const startIndex = Math.max(0, Math.floor(scrollTop / itemsHighlight) - 1);

    const endIndex = Math.min(
        Math.floor((scrollTop + windowHighlight) / itemsHighlight) + 1, 
        holidays.length
    );

    function displayHolidays() {

        const displayedHolidays = holidays.slice(startIndex, endIndex);
        const holidaysList = displayedHolidays.map((holiday) => {

            return (
                <Box 
                    key={holiday.id} 
                    height={itemsHighlight} 
                    position="absolute"
                    width="100%"
                    top={`${holiday.id * itemsHighlight}px`}
                >
                    <FlexBetween>
                        <Typography color={holiday.color} m="0.2rem 0" > {holiday.name} </Typography>
                        <Typography color={holiday.color} mr="0.5rem"> {holiday.date} </Typography>
                    </FlexBetween>
                </Box>
            )
        });
        return holidaysList
    }

    function onScroll(event) {
        setScrollTop(event.currentTarget.scrollTop);
    }

    return (
        <>
            <div className='out-box' style={{ overflowY: 'scroll', scrollbarWidth: 'none', height: `${windowHighlight}px`}} onScroll={onScroll}>
                <div className='in-box' style={{height: `${innerHighlight}px`, position: 'relative'}}>
                    {displayHolidays()}
                </div>
            </div>
            <Divider />
            <Typography color={medium} m="0.5rem 0" textAlign={"justify"}>
                <b>December 21 :</b> The winter season, cold weather and the arrival of snow.
            </Typography>
        </>
    );
};

export default MoroccanHolidaysList;
