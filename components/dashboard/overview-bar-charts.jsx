"use client"
import MonthYearPicker from "./month-year-picker";
import {Bar, BarChart, CartesianGrid, XAxis, YAxis} from "recharts"

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {useEffect, useState} from "react";


const chartData = [
    { month: "January", earning: 186 },
    { month: "February", earning: 305 },
    { month: "March", earning: 237 },
    { month: "April", earning: 73 },
    { month: "May", earning: 209 },
    { month: "June", earning: 214 },
    {month: "July", earning: 149},
    {month: "August", earning: 302 },
    { month: "September", earning: 302 },
    { month: "October", earning: 402 },
    { month: "November", earning: 502 },
    { month: "December", earning: 140 },
]

const chartConfig = {
    earning: {
        label: "Earning",
        color: "var(--foreground)",
    },
};


export default function OverviewBarCharts() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
//
    }, [date]);
    return (
    <section>
        <div className="flex items-center justify-between mb-6">
            <h2 className="flex-1 font-semibold text-lg">Overview</h2>
            <MonthYearPicker date={date} setDate={setDate} />
        </div>

        <ChartContainer config={chartConfig} className="h-[20rem] w-full">
            <BarChart accessibilityLayer data={chartData} >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={true}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                    dataKey="earning"
                    tickLine={true}
                    tickMargin={10}
                    axisLine={true}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                />
                <Bar dataKey="earning" fill="var(--foreground)" radius={[8, 8, 0, 0]} />
            </BarChart>
        </ChartContainer>

    </section>
  )
}
