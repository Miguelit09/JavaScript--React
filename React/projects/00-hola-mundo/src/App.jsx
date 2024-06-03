import React from 'react'

import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'miguelit09',
        name: 'Miguel Angel Pasachoa',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H',
        isFollowing: false
    },
    {
        userName: 'midudev',
        name: 'Miguel Angel Durán',
        isFollowing: true
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: false
    },
]

export function App() {
    // const format = (userName) => `@${userName}` --> Se pueden pasar funciones como parametros del componente
    // const formattedUserName = (<span>@{userName}</span>) --> Se pueden pasar elementos como parámetros del componente

    return (
        <>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard 
                            key={userName} // La Key tiene que ser un valor único, como el ID. Esta le permitirá a JS saber el elemento que está renderizando ya que le estamos pasando un array. Tiene que ser ÚNICO, no ALEATORIO.
                            userName = {userName}
                            initialIsFollowing = {isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </>
    )
}