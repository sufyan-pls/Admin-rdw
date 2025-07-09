import React from "react";
import { Table } from "reactstrap";

interface TrainingRow {
    attempt: string;
    score: number;
    date: string;
    result: string;
}

interface TrainingTableProps {
    data?: TrainingRow[];
}

const TrainingTable: React.FC<TrainingTableProps> = ({ data = [] }) => {
    return (
        <div className="border rounded-0 shadow-none">
            <Table borderless className="mb-0">
                <thead className="align-middle bg-light">
                    <tr>
                        <th>Attempt</th>
                        <th>Test Score</th>
                        <th>Date</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan={4} className="text-center text-muted py-4">No data available</td>
                        </tr>
                    ) : (
                        data.map((row, idx) => (
                            <tr key={idx}>
                                <td>{row.attempt}</td>
                                <td>{row.score}</td>
                                <td>{row.date}</td>
                                <td>
                                    <span
                                        className={
                                            row.result === "Passed"
                                                ? "badge rounded-pill bg-success text-white"
                                                : "badge rounded-pill bg-danger text-white"
                                        }
                                        style={{
                                            background: row.result === "Passed" ? "#f3f4f6" : "#f3f4f6",
                                            color: row.result === "Passed" ? "#222" : "#222",
                                            fontWeight: 500,
                                            fontSize: '1rem',
                                            minWidth: 70,
                                            display: 'inline-block',
                                        }}
                                    >
                                        {row.result}
                                    </span>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default TrainingTable;
