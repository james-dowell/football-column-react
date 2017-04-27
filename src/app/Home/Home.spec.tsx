import {shallow} from 'enzyme';
import * as React from 'react';
import Home from './Home';
import {ARTICLES} from '../../articles';

import Article from '../../components/Article/Article';

const expect: Chai.ExpectStatic = chai.expect;

describe('HomeSpec', () => {

    let component;

    beforeEach(() => {
        component = shallow(<Home />)
    });

    it('should render ArticlePreview components for each article', () => {
        expect(component.find(Article)).to.have.lengthOf(ARTICLES.length);
        expect(component.find(Article).at(0).props().article).to.equal(ARTICLES[0]);
        expect(component.find(Article).at(1).props().article).to.equal(ARTICLES[1]);
    });

});