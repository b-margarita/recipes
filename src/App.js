import { useEffect, useState } from 'react';
import './App.css';
import video from './products.mp4'
import RecipesComponents from './RecipesComponents';

function App() {
const MY_ID = "2ddcf862";
const MY_KEY = "138c71ff23a2cc50cdb8e469a1032133";
const [mySearch, setMySearch] = useState("");
const [myRecipes, setMyRecipes] = useState([]);
const [wordSumbitted, setWordSumbitted] = useState("");

useEffect(() => {
  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSumbitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits);
    }
    getRecipe()
}, [wordSumbitted])

const myRecipeSearch = (e) => {
  setMySearch(e.target.value);
}
const finalSearch = (e) => {
  e.preventDefault()
  setWordSumbitted(mySearch)
}

  return (
    <div className="App">
      <div className="container">
       <video autoPlay muted loop>
       <source src={video} type="video/mp4" />
       </video>
       <h1>Let's cook!</h1>
      </div>

      <div className='container'>
       <form onSubmit={finalSearch}>
       <input className='search' placeholder="Search..." onChange={myRecipeSearch} value={mySearch}/>
       </form>
      </div>

       <div className='container'>
       <button className='btn' onClick={finalSearch}>
       <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
       </button>
      </div>

      {myRecipes.map((element, index) => (
        <RecipesComponents key={index}
        label={element.recipe.label}
        image={element.recipe.image} 
        calories={element.recipe.calories}
        ingredients={element.recipe.ingredientLines}
        diet={element.recipe.dietLabels}
        link={element.recipe.url}/>
      ))}
    </div>
  );
}

export default App;
