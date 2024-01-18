import React from "react";
import { TableBody, TableHeader, TableRow } from "./styles";
import { tableHeadingData } from "@/data/tableHeadingData";

interface TableProps {
  data: {
    session: string;
    date: string;
    duration: string;
    node_used: string;
    data_consumed: string;
    location: string;
    color?: string;
  }[];
}

const Table: React.FC<TableProps> = ({ data }: TableProps) => {
  return (
    <>
      <TableHeader>
        {tableHeadingData?.map((item, index) => {
          return (
            <div key={index} className="table-heading">
              <p>{item.title}</p>
            </div>
          );
        })}
      </TableHeader>
      <TableBody>
        {data?.map((item, index) => {
            return (
                <TableRow key={index} color={item.color || ""}>
                    <p>{item.session}</p>
                    <p>{item.date}</p>
                    <p>{item.duration}</p>
                    <div className="node_used">
                        <p>{item.node_used}</p>
                    </div>
                    <p>{item.data_consumed}</p>
                    <p>{item.location}</p>
                </TableRow>
            );
        })}

      </TableBody>
    </>
  );
};

export default Table;
