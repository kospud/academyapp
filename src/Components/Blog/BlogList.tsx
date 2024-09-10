import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import mockArticle from '../../img/mockArticle.png'
import { marginBottom, marginTop } from '../Gaps'
import { responsiveText } from '../PageBlocks'
import { Link } from 'react-router-dom'
import { BLOG_ROUTE, MobileBreakPoint, TabletBreakPoint } from '../../utils/consts'

interface Article {
    id: number,
    title: string,
    date: string,
    img: string
}

const ArticleContainer = styled.div`
    width: 50%;
    display: flex;
    ${marginBottom(45)}
    align-items: end;
    justify-content: space-between;

    @media (max-width: ${TabletBreakPoint} ) and (orientation: portrait){
        width: 100%;
    }
`

const ArticleImg = styled.img`
    object-fit: cover;
    width: 47%;
    aspect-ratio: 89/100;
`

const ArticleDescription = styled.div`
    width: 50%;
`

const ArticleDate = styled.a`
    display: block;
    color: ${(props) => props.theme.colors.text};
    ${responsiveText(18, 12, 8)}
    ${marginBottom(24)}
`

const ArticleTitle = styled.a`
    display: block;
    color: ${(props) => props.theme.colors.text};
    ${responsiveText(24, 18, 16)}
    text-transform: uppercase;
    font-weight: 700;
    ${marginBottom(45)}
`

const ArticleLink=styled(Link)`
display: block;
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.text};
    ${responsiveText(18, 14, 12)}
    font-weight: 500;
    line-height: 1;
`
function Article({ article }: PropsWithChildren<{ article: Article }>) {

    const { id, title, date, img } = article

    return <ArticleContainer>
        <ArticleImg src={img} alt={title} />
        <ArticleDescription>
            <ArticleDate>{date}</ArticleDate>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleLink to={BLOG_ROUTE+'/'+id}>Читать</ArticleLink>
        </ArticleDescription>
    </ArticleContainer>
}

const mockArticles: Article[] = [
    {
        id: 0,
        title: 'Инструкции для начинающих музыкантов',
        date: '12 сентября 2024',
        img: mockArticle,
    },
    {
        id: 1,
        title: 'Инструкции для начинающих музыкантов',
        date: '12 сентября 2024',
        img: mockArticle,
    },
    {
        id: 2,
        title: 'Инструкции для начинающих музыкантов',
        date: '12 сентября 2024',
        img: mockArticle,
    },
    {
        id: 3,
        title: 'Инструкции для начинающих музыкантов',
        date: '12 сентября 2024',
        img: mockArticle,
    }
]
const BlogListContainer = styled.div`
    width: 100%;
    ${marginTop(90)}
`
function BlogList() {

    const articles = mockArticles
    return (
        <BlogListContainer>
            {
                articles.map((article) => <Article article={article} />)
            }
        </BlogListContainer>
    )
}

export default BlogList