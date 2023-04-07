import { useSelector } from 'react-redux';
import { selectRecipe } from 'redux/userRecipes/userRecipesSelectors';

const RecipeHeroTextAdd = ({ title, description, time, id }) => {
  const recipe = useSelector(selectRecipe);

  console.log(title);
  return (
    <>
      {recipe?.length > 0 &&
        recipe.map(item => (
          <div>
            <h1>{item.title}</h1>
            <p>{item.title}</p>
            <button>knopka</button>
          </div>
        ))}
    </>

    // <div>
    //   <h1>{title}</h1>
    //   <p>{title}</p>
    //   <button>knopka</button>
    // </div>
  );
};

export default RecipeHeroTextAdd;
