import { ADVENT_DAYS } from '@/assets/constants/adventDays'

export const adventDaysSetup = () => {
    const adventDays = []
    for (const ele in ADVENT_DAYS) {
        const day = ele.split('_')[1]
        adventDays.push({
            route: `/AdventCalendar/day/${day}`,
            name: 'DayDisplayer',
            label: ADVENT_DAYS[ele],
            day: day
        })
    }
    return adventDays
}
