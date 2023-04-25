import { Link } from "react-router-dom";

export default function TableRows({
  idx,
  data,
  infoAction,
  editAction,
  deleteAction,
}) {
  function triggerInfoAction() {
    return infoAction(data.id);
  }

  function triggerEditAction() {
    return editAction(data.id);
  }

  function triggerDeleteAction() {
    return deleteAction(data.id);
  }

  let tableData = [];
  for (let keys in data) {
    let converted;
    if (keys !== "id") {
      if (keys === "imgUrl") {
        converted = (
          <td key={`${keys}-${data.id}`}>
            <img src={data[keys]} />
          </td>
        );
      } else if (keys === "Category") {
        converted = <td key={`${keys}-${data.id}`}>{data[keys].name}</td>;
      } else if (keys === "User") {
        converted = <td key={`${keys}-${data.id}`}>{data[keys].email}</td>;
      } else if (keys === "Tags") {
        converted = (
          <td key={`${keys}-${data.id}`} className="">
            {data[keys].map((el, idx) => {
              return (
                  <div key={`${keys}-${data.id}-${idx}`} className="flex flex-col badge badge-outline w-full mb-2 items-center">
                    {el.name}
                  </div>
              );
            })}
          </td>
        );
      } else {
        converted = <td key={`${keys}-${data.id}`}>{data[keys]}</td>;
      }
    }

    tableData.push(converted);
  }
  return (
    <tr key={idx}>
      <td>{idx + 1}</td>
      {tableData}
      {infoAction || editAction || deleteAction ? (
        <td>
          <div className="flex gap-4">
            {infoAction ? (
              <button
                onClick={triggerInfoAction}
                className="btn btn-info btn-outline btn-sm btn-square">
                <i className="fa-solid fa-info"></i>
              </button>
            ) : (
              ""
            )}
            {editAction ? (
              <button
                onClick={triggerEditAction}
                className="btn btn-outline btn-sm btn-square">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            ) : (
              ""
            )}
            {deleteAction ? (
              <button
                onClick={triggerDeleteAction}
                className="btn btn-outline btn-sm btn-square btn-warning">
                <i className="fa-solid fa-trash"></i>
              </button>
            ) : (
              ""
            )}
          </div>
        </td>
      ) : (
        ""
      )}
    </tr>
  );
}
