import React from "react";
import TrainingProgressCard from "./TrainingProgressCard";
import TrainingTable from "./TrainingTable";

const data = [
    { attempt: "3 of 3", score: 8.8, date: "October 25, 2019", result: "Passed" },
    { attempt: "2 of 3", score: 5.8, date: "October 30, 2017", result: "Failed" },
    { attempt: "1 of 3", score: 4.8, date: "February 29, 2012", result: "Failed" },
  ];
  
const TrainingListing = () => {
    return (
        <div className='d-flex flex-row gap-3 w-100 align-items-stretch'>
            <div style={{ width: '35%' }}>
                <TrainingProgressCard />
            </div>
            <div style={{ width: '65%'}}>
                <TrainingTable data={data} />
            </div>
        </div>
    );
}

export default TrainingListing;