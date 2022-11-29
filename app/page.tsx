import {parse} from '../lib/data';

import {Page as RnaPage} from '../components/standard/Page';

import {parseSlideshow, parseArticles, parseLinkList} from '../lib/upm.js';
import "./global.css";

export default async function Page() {

    const indexResp = await fetch(`https://main--upm--hlxsites.hlx.live/query-index.json?limit=500&offset=0`);
    const indexJson = await indexResp.json();
    const indexData = indexJson.data;

    const source = await parse(
        // "https://main--upm--hlxsites.hlx.live",
        "https://www.hlx.live/home",
        // null,
        [
            {
                blockType: "slideshow",
                parser: parseSlideshow
            },
            {
                blockType: "article",
                parser: parseArticles
            },
            {
                blockType: "link-list",
                parser: parseLinkList
            },
        ]
    );

    return (
        <div className="page">
            <RnaPage data={source} indexData={indexData}/>

            {/*<h1 className="text-xl font-medium text-gray-300">Model</h1>*/}

            {/*<div>*/}
            {/*    <pre>{JSON.stringify(source, null, 2)}</pre>*/}
            {/*</div>*/}

            {/*<Slideshow />*/}
            {/*<ArticleList />*/}

        </div>
    );
}
