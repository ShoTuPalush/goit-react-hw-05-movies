import { useSearchParams } from 'react-router-dom';

export const SearchMovie = () => {
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';

  const updateQuery = evt => {
    evt.preventDefault();
    const value = evt.target.elements.query.value.trim();
    params.set('query', value);
    setParams(params);
  };

  return (
    <>
      <form onSubmit={updateQuery}>
        <input name="query" type="text" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
