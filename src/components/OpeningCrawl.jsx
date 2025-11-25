import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";

const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrawl] = useState(() => sessionStorage.getItem('opening_crawl'));

    useEffect(() => {
        if (!openingCrawl) {
            const episode = Math.floor(Math.random() * 6) + 1
            fetch(`${base_url}/v1/films/${episode}`)
                .then(res => res.json())
                .then(data => {
                    setOpeningCrawl(data.opening_crawl);
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                })
                .catch(() => setOpeningCrawl('Error loading opening crawl'));
        }
    }, [openingCrawl])

    if (openingCrawl) {
        return (
            <p className="text-[2rem] text-justify tracking-[0.1em] leading-[1.5]">{openingCrawl}</p>
        )
    } else {
        return (
            <p className="text-[2rem] text-justify tracking-[0.1em] leading-[1.5]">
                Loading...
            </p>
        )
    }
}

export default OpeningCrawl;