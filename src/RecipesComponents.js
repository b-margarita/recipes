function RecipesComponents({label, image, calories, ingredients, diet, link}) {
    return(<div>
        <div className='container'>
            <h2>{label}</h2>
        </div>
        <ul className='container list'>
            {diet.map((diet, index) => (
                <li className="diet" key={index}>{diet} diet</li>
            ))}
        </ul>
        <div className='container'>
            <img src={image} alt="dish" />
        </div>
        <div className='container'>
            <p>{calories.toFixed()} calories</p>
        </div>
        <ul className='container list'>
            {ingredients.map((ingredient, index) => (
                <li className="ingredients" key={index}>{ingredient}</li>
            ))}
        </ul>
        <div className='container'>
            <a href={link} target='_blank' rel="noopener noreferrer">
                <button className="instructions">Instructions</button>
            </a>
        </div>
    </div>)
}
export default RecipesComponents;