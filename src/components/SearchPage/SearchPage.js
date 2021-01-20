import React from 'react'
import './SearchPage.scss'
import { useStateValue } from '../../StateProvider'
import useGoogleSearch from '../../useGoogleSearch'
import Response from '../../response.json'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import SearchIcon from '@material-ui/icons/Search'
import { ArrowDropDown, Description, Image, LocalOffer, MoreVert, Room } from '@material-ui/icons'


const SearchPage = () => {
  const [{term}, dispatch] = useStateValue()
  const {data} = useGoogleSearch(term)

  // const data = Response
  console.log(data)
  return (
    <div className={'searchPage'}>
      <div className="searchPage__header">
        <Link to={'/'}>
          <img className={'searchPage__logo'}
               src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
        </Link>


        <div className="searchPage__headerBody">
          <Search hideButtons/>

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon/>
                <Link to={'/all'}>Все</Link>
              </div>
              <div className="searchPage__option">
                <Image/>
                <Link to={'/images'}>Картинки</Link>
              </div>
              <div className="searchPage__option">
                <Description/>
                <Link to={'/news'}>Новости</Link>
              </div>
              <div className="searchPage__option">
                <LocalOffer/>
                <Link to={'/shopping'}>Покупки</Link>
              </div>
              <div className="searchPage__option">
                <Room/>
                <Link to={'/maps'}>Карты</Link>
              </div>
              <div className="searchPage__option">
                <MoreVert/>
                <Link to={'/more'}>Еще</Link>
              </div>

            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to={'/settings'}>Настройки</Link>
              </div>
              <div className="searchPage__option">
                <Link to={'/tools'}>Инструменты</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            Результатов:
            примерно {data?.searchInformation.formattedTotalResults} ({data?.searchInformation.formattedSearchTime} сек.)
          </p>

          {data?.items.map(item => (
            <div className={'searchPage__result'}>
              <a className={'searchPage__resultLink'} href={item.link}>
                  <img className={'searchPage__resultImage'}
                       src={ item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src }
                       alt=""/>


                {item.displayLink} <ArrowDropDown/>
              </a>
              <a href={item.link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className={'searchPage__resultSnippet'}>
                {item.snippet}
              </p>
            </div>
          ))}
        </div>
      )}


    </div>
  )
}

export default SearchPage
