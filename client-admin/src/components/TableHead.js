export default function TableHead({ data, action }) {
  const tableHeads = data.map((tableHead, idx) => {
    if (tableHead !== "id") return <td key={idx}>{tableHead}</td>;
  });
  return (
    <thead>
      <tr>
        <th>#</th>
        {tableHeads}
        {action ? <th>Actions</th> : ""}
      </tr>
    </thead>
  );
}
