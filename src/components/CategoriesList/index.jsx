import React, { useState, useEffect } from 'react'
import { Category } from '../Category/index.jsx'
import { List, Item } from './styles.js'
import { useFetchCategories } from '../../hooks/useFetchCategories'

const CategoriesListComponent = () => {
  const { categories, loading } = useFetchCategories()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'><Category /></Item>
          : categories.map(category => (
            <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>
          ))
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const CategoriesList = React.memo(CategoriesListComponent)
