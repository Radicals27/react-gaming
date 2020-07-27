import React, { useState, useEffect, Fragment } from 'react'
import { Input } from '@material-ui/core'
import SearchDropdown, {SearchDropdownNoResult} from './SearchDropdown'
require('dotenv').config()

export default function Search() {
const [data, setData] = useState(null)
const [dataIsReady, setDataIsReady] = useState(false)
const [dropdownIsopened, setDropdownIsopened] = useState(false)
const [keyword, setKeyword] = useState('')

useEffect(() => {
    async function getRawgApi() {
      if (keyword !== '') {
        try {
          const response = await fetch(`${process.env.BACK_END_URL}/videogameAutocomplete?q=${keyword.toLowerCase()}`)
          const json = await response.json()
          setData(json)
          setDataIsReady(true)
        } catch (e) {
          console.error(e)
        }
      }
    }
    getRawgApi()
  }, [keyword])

  const setKeywordInInput = event => {
    setKeyword(event.target.value)
    setDropdownIsopened(true)
  }

  const closeDropdown = () => {
    setDropdownIsopened(false)
    setKeyword('')
  }

    return (
        <>
            <div className="search">
                <Input onChange={setKeywordInInput} value={keyword} placeholder={"Chicken"}/>
                {dataIsReady ? (
                <Fragment>
                    {dropdownIsopened ? (
                    <div className='bg-white w-auto text-dark position-absolute dropdown-position py-2 px-2'>
                        <ul className='list-unstyled mb-0'>
                        {data.count >= 1 ? (
                            // only first eight search results displayed in the dropdown
                            data.results.slice(0, 8).map(result => <SearchDropdown key={result.id} result={result} />)
                        ) : (
                            <SearchDropdownNoResult />
                        )}
                        </ul>
                        <div id='dropdownOverlay' onClick={closeDropdown} className='overlay-style'></div>
                    </div>
                    ) : null}
                </Fragment>
                ) : null}
            </div>
        </>
        
    )
}