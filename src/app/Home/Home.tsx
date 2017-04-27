import * as React from 'react';
import {ARTICLES} from '../../articles';

import Article from '../../components/Article/Article';

export default () => (
    <div>
        {ARTICLES.map((a, i) => <Article key={i} article={a} />)}
    </div>
);