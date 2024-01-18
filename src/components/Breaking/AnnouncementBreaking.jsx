import React from 'react';
import useAnnouncement from '../../hooks/useAnnouncement';
import Marquee from 'react-fast-marquee';

const AnnouncementBreaking = () => {
  const [announcement,refetch] =useAnnouncement()
  console.log(announcement);
  return (
    <div>
      <div>
        <h2>Announcement</h2>
        <Marquee>
  {announcement.map((item, index) => (
    <span key={item._id}>
      {item.title}
      {index < announcement.length  && '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'} {/* Non-breaking spaces */}
    </span>
  ))}
</Marquee>
      </div>
    </div>
  );
};

export default AnnouncementBreaking;