import PropTypes from 'prop-types';

export const FirstApp = ({
        title,
        subtitle = 'La tierra explota'
    }) =>{

    if(!subtitle){
        throw new Error("Subtitle doesn't exist")
    }

    return (
        <>
        <h1>{title}</h1>
        {/* <h1>{JSON.stringify(newMessage)}</h1> */}
        <p>{subtitle}</p>
        </>
    )
}

FirstApp.propTypes = {
    title : PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    title:"No hay titulo",
    subtitle:'No hay subtitulo',
    name:'Alan'
}