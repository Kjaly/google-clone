import React, { useState } from 'react'
import './Search.scss'
import { Mic } from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../reducer'

const Search = ({hideButtons = false}) => {
  const [{},dispatch] = useStateValue()

  const [input,setInput] = useState('')
  const history = useHistory()

  const search = e =>{
    e.preventDefault();

    dispatch({
      type:actionTypes.SET_SEARCH_TERM,
      term: input
    })
    history.push('/search')

  }

  return (
    <div className={'search'}>
      <div className="search__input">
        <SearchIcon className="search__inputIcon"/>
        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
        <Mic/>
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type={'submit'} onClick={search} variant={'outlined'}>Google Search</Button>
          <Button variant={'outlined'}>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
        <Button className={'search__buttonsHidden'} type={'submit'} onClick={search} variant={'outlined'}>Google Search</Button>
        <Button className={'search__buttonsHidden'} variant={'outlined'}>I'm Feeling Lucky</Button>
        </div>
      )}

    </div>
  )
}

export default Search
