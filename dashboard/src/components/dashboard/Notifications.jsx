import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Badge from '@mui/material/Badge';
import { useState } from 'react';

const menuItems = [
  {
    title: 'Messages',
    number: 5
  },
  {
    title: 'Activities',
    number: 2
  },
  {
    title: 'Proposals',
    number: 3
  }
];

function Notifications() {
  const [notificationsMenu, setNotificationsMenu] = useState(false);

  return (
    <>
      {/* Notifications Badge and Icon */}
      <button
        className='hover:cursor-pointer hover:bg-[#31363c] py-2 px-2 rounded-md mr-4 md:mx-0 md:ml-0 mb-2'
        onClick={() => setNotificationsMenu(!notificationsMenu)}
      >
        <Badge
          badgeContent=''
          color='error'
          variant='dot'
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <NotificationsNoneOutlinedIcon
            sx={{
              color: 'white'
            }}
          />
        </Badge>
      </button>
      {/* Notifications Menu */}
      {notificationsMenu && (
        <div className='absolute top-12 right-4 md:right-0 shadow-lg z-10 bg-[#31363c] border border-gray-100 h-36 w-44 rounded-xl text-white flex flex-col pt-3'>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className='flex justify-between hover:bg-[#2a2c34] py-2 px-4 hover:cursor-pointer'
            >
              <span>{item.title}</span>
              <div className='rounded-full bg-[#3FA268] px-2'>
                {item.number}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Notifications;
