import Activity from './Activity';

const activityList = [
  {
    id: 1,
    name: 'Учеба',
    color: '#AAAAAA'
  }, {
    id: 2,
    name: 'Работа',
    color: '#cccccc'
  }
]

function ActivityPage() {

  return (
    <div>
      <h1>ActivityPage</h1>      
      {activityList.map(() => <Activity />)}
    </div>
  );
};

export default ActivityPage;