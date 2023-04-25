import { useEffect, useState } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

export default function Table({
  tableData,
  infoAction,
  editAction,
  deleteAction,
}) {
  const [tableHeads, setTableHeads] = useState([]);
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    if (tableData) {
      const tHead = [];
      for (const key in tableData[0]) {
        tHead.push(key);
      }
      setTableHeads(tHead);
      setTableRows(tableData);
    }

  }, [tableData]);

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <TableHead
          data={tableHeads}
          action={infoAction || editAction || deleteAction ? true : false}
        />
        <tbody>
          {tableRows.map((data, idx) => {
            return (
              <TableRow
                idx={idx}
                data={data}
                key={data.id}
                infoAction={infoAction}
                editAction={editAction}
                deleteAction={deleteAction}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
