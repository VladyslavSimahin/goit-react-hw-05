import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function MoviesFilter({ onSubmit }) {
  const [params, setParams] = useSearchParams();

  const changeFilter = (query) => {
    const newParams = new URLSearchParams(params);
    newParams.set("query", query);
    setParams(newParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryValue = e.target.query.value.trim();
    if (!queryValue) {
      toast.error("Please enter anything in the field of search");
      return;
    }
    if (queryValue.length < 1) {
      toast.error("Too short");
      return;
    }
    if (queryValue.length > 50) {
      toast.error("Too long");
      return;
    }

    changeFilter(queryValue);

    onSubmit(queryValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" autoFocus={true} required />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
