import React, { Fragment, useState, useEffect } from 'react';

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getGoals();
    // eslint-disable-next-line
  }, []);

  const getGoals = async () => {
    setLoading(true);
    const res = await fetch('/goals');
    const data = await res.json();

    setGoals(data);
    setLoading(false);
  };

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <Fragment>
      <ul className='collection-with-header' style={{ paddingTop: '150px' }}>
        <li className='collection-header'></li>
        {!loading && goals.length === 0 ? (
          <p className='center'>No goals submitted...</p>
        ) : (
          goals.map((goal) => <li className='white-text'>{goal.message}</li>)
        )}
      </ul>
    </Fragment>
  );
};

export default Goals;
