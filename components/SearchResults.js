import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
    return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52"> 
        <p className="text-gray-600 text-md mb-5
        mt-3">
        {results.searchInformation?.
        formattedTotalResults} Resultados de pesquisa em (
        {results.searchInformation?.
        formattedSearchTime} segundos)
        </p>

        {results.items?.map((result) => (
            <div key={result.link}
            className="max-w-xl mb-8">
                <div className="group">
                    <a href={result.link}
                    className="text-sml text-[#8b8b8b]">
                        {result.formattedUrl}
                    </a>
                    <a href={result.link}>
                        <h2 className="truncate text-xl
                        text-[#2E67BD] font-medium group-hover:underline">
                             {result.title}
                        </h2>
                    </a>
                </div>

                <p className="line-clamp-2 text-[#343434] font-normal">{result.snippet}</p>

                <hr className="mt-5 border-[#C1D3E9]" />
            </div>

        ))}

        <PaginationButtons />
    </div>
    );
}

export default SearchResults;
