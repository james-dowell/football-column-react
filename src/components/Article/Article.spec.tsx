import {shallow} from 'enzyme';
import * as React from 'react';
import Article from './Article';
import {IArticle} from '../../articles';
import {Link} from 'react-router-dom';

const expect: Chai.ExpectStatic = chai.expect;

const MOCK_ARTICLE: IArticle = {
    title: 'Article title',
    published_date: "2017-04-27 07:45:05",
    url: "http://www.bbc.co.uk/sport/football/39729853",
    id: "http://www.bbc.co.uk/sport/football/39729853",
    source: "bbc",
    image: "imagae-src",
    content: "Secret payments made to players, their agents or third parties is the focus of a tax fraud investigation by British and French authorities."
};

describe('ArticlePreviewComponent', () => {

    let component;

    beforeEach(() => {
        component = shallow(<Article article={MOCK_ARTICLE} />)
    });

    it('should render the article title', () => {
        let title = component.find('.article-preview__title');
        expect(title).to.have.lengthOf(1);
        expect(title.text()).to.contain(MOCK_ARTICLE.title);
    });

    it('should render the article image', () => {
        let image = component.find('.article-preview__image');
        expect(image).to.have.lengthOf(1);
        expect(image.props().src).to.equal(MOCK_ARTICLE.image);
    });

    // it('should have a link to the article', () => {
    //     expect(component.find(Link)).to.have.lengthOf(1);
    //     expect(component.find(Link).props().to).to.equal(`/article/${MOCK_ARTICLE.id}`)
    // });

});