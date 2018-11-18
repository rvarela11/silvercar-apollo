// @vendors
import React from 'react';

// @components
import Card from '../Card/Card';

const Locations = (props) => {
    const { data } = props;
    return (
      <>
          {
              data.map(item => <Card key={item.id} item={item} />)
          }
      </>
    );
};

export default Locations;
