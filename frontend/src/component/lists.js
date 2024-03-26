export function Lists({ lists }) {
  console.log("Lists component received lists:", lists);

  if (!Array.isArray(lists)) {
    console.log("Lists prop is not an array");
    return <div>Error: Invalid or missing lists data</div>;
  }

  return (
    <div>
      {lists.map(function (list) {
        console.log("Rendering list:", list);
        return (
          <div key={list._id}>
            <h1>{list.title}</h1>
            <h2>{list.description}</h2>
           
          </div>
        );
      })}
    </div>
  );
}
