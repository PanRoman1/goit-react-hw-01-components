import PropTypes from 'prop-types';

import {
  AvatarImg,
  Name,
  Label,
  Friend
} from './FriendListItem.styled';

import defaultImage from '../default.jpg';

export const FriendListItem = ({ status, avatar, name }) => {  
  return (<Friend>
    <Label bgColor={status ? 'green' : 'red'}></Label>
      <AvatarImg src={avatar ?? defaultImage} alt={name} width="48"  />
    <Name>{name}</Name>
  </Friend>
    )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,      
  name: PropTypes.string.isRequired,      
  status: PropTypes.bool.isRequired,      
}