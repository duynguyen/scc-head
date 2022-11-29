'use server';

import {ColumnContainer} from './ColumnContainer';
import {CardContainer} from './CardContainer';
import ArticleList from "../article-list";
import Slideshow from "../slideshow";
import {GenericBlock} from "./GenericBlock";

export default function Section({data}) {
    const { type, metadata, blocks } = data;

    let blockComponents = [];

    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        const blockComponent = createBlockComponent(block);
        blockComponents.push(blockComponent);
    }

    return <div className={"section " + metadata?.Style}>
        {blockComponents}
    </div>;
}

function createBlockComponent(block) {
    const { type, 'class': clazz} = block;

    //block type can be column-container, card-container or custom

    if (type === "column-container") {
        return <ColumnContainer data={block}/>
    }

    if (type === "card-container") {
        return <CardContainer data={block}/>
    }

    if (type === "article-list") {
        return <ArticleList data={block}/>
    }

    if (type === "slideshow") {
        return <Slideshow data={block}/>
    }

    return <GenericBlock data={block}/>
}