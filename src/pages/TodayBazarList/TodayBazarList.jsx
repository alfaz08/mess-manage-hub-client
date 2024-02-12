import React from 'react';
import useBazar from '../../hooks/useBazar';

const TodayBazarList = () => {
  const [allBazar] = useBazar();

  // Get today's date
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Filter the bazar matches for today
  const todayBazarMatches = allBazar.filter(bazar => {
    const bazarDate = new Date(bazar.date);
    return bazarDate.getTime() === today.getTime();
  });

  console.log('Today Bazar Matches:', todayBazarMatches);

  return (
    <div>
      <div className="overflow-x-auto mt-8 container mx-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="bg-red-200">
            <th>Item Index</th>
              
              <th>Item Name</th>
              
              <th>Weight</th>
             
            </tr>
          </thead>
          <tbody>
            {todayBazarMatches?.map((user, userIndex) => {
              let grandTotalWeight = 0; // Initialize grand total for each bazar man

              return (
                <React.Fragment key={user._id}>
                  <tr>
                  <td>
                      {user.items.map((it, itemIndex) => (
                        <div className='text-lg font-bold' key={itemIndex}>{itemIndex + 1}</div>
                      ))}
                    </td>
                   
                    <td>
                      {user.items.map((it, itemIndex) => (
                        <div className='text-lg font-bold' key={itemIndex}>{it.item}</div>
                      ))}
                    </td>
                    
                    <td>
                      {user.items.map((it, itemIndex) => {
                        grandTotalWeight += parseFloat(it.weight); // Accumulate the weight for grand total
                        return <div  className='text-lg font-bold' key={itemIndex}>{it.weight}</div>;
                      })}
                    </td>
                    
                  </tr>
                  <tr>
                    <td></td>
                   
                    <th colSpan="4">
                    <td>Bazar By: {user.name}</td>
                    <td>Today Total Meal: {user.totalMeal}</td>
                    <td>Bazar Date: {user.date &&
                    new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      day: "numeric",
                      month: "long",
                    }).format(new Date(user.date))}
                </td>
                    </th>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodayBazarList;