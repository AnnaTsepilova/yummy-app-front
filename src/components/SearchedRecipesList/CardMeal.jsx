import { Link } from 'react-router-dom';
import {
  CardImg,
  CardTitle,
  CardDish,
  TooltipWrapper,
} from './CardMeal.styled';

export const CardMeal = ({ data }) => {
  return (
    <CardDish>
      <Link to={`/recipe/${data._id}`}>
        <CardImg src={data.preview} alt={data.title} key={data._id} />
        <CardTitle data-tooltip-id={data._id}>{data.title}</CardTitle>
        {data.title.length > 30 && (
          <TooltipWrapper>
            <p>{data.title}</p>
          </TooltipWrapper>
        )}
      </Link>
    </CardDish>
  );
};
