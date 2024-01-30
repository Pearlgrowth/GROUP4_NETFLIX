import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FilterByGenre = ({ genres, searchByGenre, handleSelectChange }) => {

    return (
        <>
            <select value={searchByGenre} onChange={handleSelectChange}>
                {genres.map((genres) => {
                    return (
                        <option key={genres.id} value={genres.id}>{genres.name}</option>
                    )
                })}
            </select>
        </>
    )
}

export default FilterByGenre