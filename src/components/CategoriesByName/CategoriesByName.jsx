import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const CategoriesByName = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
};

export default CategoriesByName;
