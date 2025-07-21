'use client';

import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import '@/styles/react-datepicker-overrides.css'
import { ChevronDown, ChevronUp } from "lucide-react";


export default function MonthYearPicker({date, setDate}) {

   const [opened, setOpened] = useState(false);

   return (
      <div className="relative min-w-64">
         <DatePicker
            onChange={(selectedDate) => setDate(selectedDate)}
            selected={date}
            dateFormat="yyyy MMMM"
            showMonthYearPicker
            className="px-3 py-2 rounded-md border text-sm shadow-sm font-semibold w-full"
            maxDate={new Date()}
            onCalendarOpen={() => setOpened(true)}
            onCalendarClose={() => setOpened(false)}
         />
         {
            !opened ?  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" /> : <ChevronUp className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
         }
        
      </div>
   )
}
