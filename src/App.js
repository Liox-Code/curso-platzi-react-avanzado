import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/Index'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo/Index'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <><ListOfCategories /><ListOfPhotoCards categoryId={2} /></>
      }
    </>
  )
}

export default App
