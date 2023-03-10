
import useFetch from '../Hooks/useFetch';
import React, { useState } from 'react';

const Artiste = ({ artiste }) => {
    const [displayDescription, setDisplayDescription] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL;
    const { loading, error, data } = useFetch(API_URL + '/api/programmations?populate=*')
    // if (loading) return <p></p>
    // if (error) return <p>Errror :</p>

    let img = new Image();
    img.src = API_URL + artiste.attributes.ImageArtiste.data.attributes.url
    let aspectRatioImg = img.width / img.height


    return (
        <div style={{ backgroundImage: `url(${API_URL + artiste.attributes.ImageArtiste.data.attributes.url})`, aspectRatio: `${aspectRatioImg}`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', position: "relative" }}>
            {
                displayDescription ?
                    <div className='descriptionContainer'>
                        <button onClick={(e) => { e.preventDefault; setDisplayDescription(false) }}>
                            X
                        </button>
                        <p>{artiste.attributes.DescriptionArtiste}</p>
                    </div>
                    :
                    <div className='grid__textCard'>
                        <h4>{artiste.attributes.NomArtiste.substr(1)}</h4>
                        {
                            (artiste.attributes.LienSpotify).includes("spotify") ?
                                <div className='grid__textCard--link'>
                                    <button className='grid__textCard--link1' onClick={(e) => { e.preventDefault; setDisplayDescription(true) }}>EN SAVOIR +</button>
                                    <a className='grid__textCard--link2' href={artiste.attributes.LienSpotify} target="_blank">
                                        {
                                            (artiste.attributes.LienSpotify).includes("spotify") ?
                                                <img src='/img/icons8-spotify-100.png' alt='spotify logo'></img>
                                                :
                                                <img src='/img/soundcloud.png' className='soundcloudIcone' alt='souncloud logo'></img>
                                        }

                                    </a>
                                </div>
                                :
                                <div className='grid__textCard--link' style={{ paddingBottom: '10px' }}>
                                    <button className='grid__textCard--link1' onClick={(e) => { e.preventDefault; setDisplayDescription(true) }}>EN SAVOIR +</button>
                                    <a className='grid__textCard--link2' href={artiste.attributes.LienSpotify} target="_blank">
                                        {
                                            (artiste.attributes.LienSpotify).includes("spotify") ?
                                                <img src='/img/icons8-spotify-100.png' alt='spotify logo'></img>
                                                :
                                                <img src='/img/soundcloud.png' className='soundcloudIcone' alt='souncloud logo'></img>
                                        }

                                    </a>
                                </div>
                        }

                    </div>
            }

        </div>
    );
};

export default Artiste;