async function SearchPage({
  searchParams,
}: {
  searchParams: {
    query: string;
    page: number;
    limit: number;
  };
}) {
  const { query, page, limit } = await searchParams;

  return <div>SearchPage for {query}</div>;
}

export default SearchPage;
