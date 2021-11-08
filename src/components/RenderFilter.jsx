/* eslint-disable react/prop-types */
import React from 'react'
import { FilterList } from './RenderFilterStyles'

export default function RenderFilter({ list }) {
  return (
    <FilterList>
      { list.map((movie) => <h1 key={ movie.id } >{ movie.original_title }</h1>) }
    </FilterList>
  )
}
