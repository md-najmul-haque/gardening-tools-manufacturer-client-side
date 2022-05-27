import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faBiking, faChildren, faCloudSunRain, faHeart, faLocationCrosshairs, faPersonBiking, faUsers, faUsersGear } from '@fortawesome/free-solid-svg-icons';


const FeatureProduct = ({ featureProduct }) => {
    const { icon, name, speciality } = featureProduct;
    return (
        <div>
            <p> <span><FontAwesomeIcon icon={icon} /></span> <span>{name}</span></p>
            <p>{speciality}</p>
        </div>
    );
};

export default FeatureProduct;