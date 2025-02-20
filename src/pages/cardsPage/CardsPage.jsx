import React, { useEffect, useState } from 'react'
import stl from './cardsPage.module.scss'
import Card from '../../components/card/Card'

function CardsPage() {

    const [ students, setStudents ] = useState([])

    const getStudents = async()=>{
        const response = await fetch('/students.json')
        const data = await response.json()

        setStudents(data)
    }

    useEffect( ()=>{
        getStudents()
    }, [])

  return (
    <div>
        <h1>Cards Page</h1>
        <div className={stl.wrapper}>
            {
                students.map( (student, ind) =>(
                    <Card name={student.name} phrase={student.phrase} url={student.url} mp={student.mp} keyy={ind}/>
                ))
            }
        </div>
    </div>
  )
}

export default CardsPage