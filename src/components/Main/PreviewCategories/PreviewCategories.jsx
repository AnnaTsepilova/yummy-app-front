import { OtherCatBtn } from 'components/Buttons/Buttons';
import React, { useEffect, useState } from 'react';
import { getMainPageAPI } from 'service/API/dishesApi';
import Category from './Category';
import { Box } from './PreviewCategories.styled';

const PreviewCategories = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getMainPageAPI().then(data => {
      const dishArray = Object.entries(data);
      console.log('log eff', dishArray);
      setAllCategories(dishArray);
    });
  }, []);
  return (
    <>
      {allCategories.map((item, index) => (
        <Category key={index} data={item} />
      ))}
      <Box>
        <OtherCatBtn>Other categories</OtherCatBtn>
      </Box>
    </>
  );
};

export default PreviewCategories;
