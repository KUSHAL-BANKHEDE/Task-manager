export function Lists({ lists }) {
    return (
      <div>
        {lists.map(function (lists) {
          return (
            <div>
              <h1>{lists.title}</h1>
              <h2>{lists.description}</h2>
              <button>
                {lists.completed === true ? "Completed" : "Mark as completed"}
              </button>
            </div>
          );
        })}
      </div>
    );
  }