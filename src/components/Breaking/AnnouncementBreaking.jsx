import React from 'react';
import useAnnouncement from '../../hooks/useAnnouncement';
import Marquee from 'react-fast-marquee';

const AnnouncementBreaking = () => {
  const [announcement] =useAnnouncement()

  return (
    <div>
      <div className='flex mt-2 mb-2' >
        <h2 className='bg-red-300 rounded-lg p-4 font-bold'>Announcement</h2>
        <Marquee pauseOnHover={true} speed={50} className="marquee-item bg-gray-100">
  {announcement.map((item, index) => (
    <span key={item._id}>
      <span className='mt-4'> {item.title}</span>
      {index < announcement.length  && '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'} {/* Non-breaking spaces */}
    </span>
  ))}
</Marquee>
      </div>
    </div>
  );
};

export default AnnouncementBreaking;