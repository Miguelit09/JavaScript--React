import { useState } from "react"

export function TwitterFollowCard({children, userName, initialIsFollowing = false}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing) // useState devuelve un array de dos posiciones. La primera, muestra el estado, el segundo, es una función que cambia el estado. 
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'twitter_card__button twitter_card__button--is_following' : 'twitter_card__button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className="twitter_card">
            <header className='twitter_card__header'>
                <img src={`https://unavatar.io/${userName}`} alt="Avatar" className='twitter_card__avatar'/>
                <div className='twitter_card__info'>
                    <p className='twitter_card__name'>{children}</p>
                    <p className='twitter_card__username'>@{userName}</p>
                </div>
            </header>
            <aside>
                <a className={buttonClassName} onClick={handleClick}>
                    <span className="twitter_card_following_span">{text}</span>
                    <span className="twitter_card__stop_follow_span">Dejar de seguir</span>
                </a>
            </aside>
        </article>
    )
}