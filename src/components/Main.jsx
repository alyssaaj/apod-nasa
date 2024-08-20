export default function Main(props){
    const { data } = props

    return (
        <div className="imgContainer">

            {data.media_type == "image" ? <img src={data.hdurl} alt={data.title || 'bg-img'} className="bgImage"/> :
                data.media_type == "video" ? <iframe width="100%" height="100%" src={data.url}></iframe> :
                <div className="loadingState">
                    <i className="fa-solid fa-gear"></i>
                </div>
            }

        </div>
    )

}