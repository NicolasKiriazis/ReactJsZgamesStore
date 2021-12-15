import '../Home/Banner.css'

const Banner = ({greeting}) => {
    
    return(
        <>
        <img src="https://i.ibb.co/92LjgTY/banner.jpg" alt="banner-main-zgames"></img>
        <h1 className='greeting'>{greeting}</h1>
        </>
    )
}

export default Banner