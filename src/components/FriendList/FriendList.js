import PropTypes from 'prop-types';

import { FriendListStyle } from './FriendList.styled';


import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ friends }) => {  
  return (<FriendListStyle>
    {friends.map(({ avatar, name, isOnline, id }) => (      
        <FriendListItem key={id}
          status={isOnline}
          avatar={avatar}
          name={name}
        />      
    ))}
  </FriendListStyle>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,      
    })
  ),
};