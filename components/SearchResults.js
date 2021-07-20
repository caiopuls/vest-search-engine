import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <div className="text-[#222222] font-medium text-sm mb-5
        mt-5">
               <span className="text-[#2772F8]"> {results.searchInformation?.
                    formattedTotalResults}</span> RESULTADOS EM {results.searchInformation?.
                        formattedSearchTime} SEGUNDOS
            </div>

            {results.items?.map((result) => (
                <div key={result.link}
                    className="max-w-4xl mb-8">
                    <div className="group">
                        <a href={result.link}>
                            <h2 className="truncate text-2xl
                        text-[#2F2F2F] font-medium group-hover:underline cursor-pointer mb-3">
                                {result.title}
                            </h2>

                        </a>
                            <p className="line-clamp-2 text-[#2B2B2B] font-normal mb-2">{result.snippet}</p>
                     
                        <a href={result.link}
                            className="text-sml text-[#4387F6]">
                            {result.formattedUrl}
                        </a>
                    </div>

                    <hr className="mt-5 border-[#BED7FF]" />
                </div>

            ))}

            <PaginationButtons />
        </div>
    );
}

export default SearchResults;
