import React from 'react'

export default function QuizGaleraPage(){
    return(
        <div>
            Desafio da galera
        </div>
    )
}

export async function getServerSideProps(context){
    console.log(context.query.id)
    return{
        props:{},//
    }
}