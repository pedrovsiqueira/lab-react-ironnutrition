import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './App.css';
import FoodBox from './components/FoodBox';
import FoodList from './components/FoodList';
import foods from './foods.json';

function App() {
  const [addFoodType, setAddFoodType] = useState(false);
  const [foodRepository, setFoodRepository] = useState(foods);
  const [originalFoodRepository, setOriginalFoodRepository] = useState(foods);

  const [todaysFood, setTodaysFood] = useState({
    name: '',
    quantity: 0,
    calories: 0,
  });

  const { handleSubmit, register } = useForm();

  const [newFood, setNewFood] = useState({
    name: '',
    calories: '',
    image: '',
  });

  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState('');

  const handleAddFood = (e) => {
    e.preventDefault();
    setAddFoodType(true);
  };

  const handleRegisterFood = (e) => {
    setAddFoodType(false);
    setNewFood({
      name,
      calories,
      image,
    });
    setFoodRepository([...foodRepository, newFood]);
    setOriginalFoodRepository(foodRepository);
  };

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleCaloriesInput = (e) => {
    setCalories(e.target.value);
  };

  const handleImageInput = (e) => {
    setImage(e.target.value);
  };

  const handleSearchInput = (e) => {
    const searchValue = e.target.value.toLowerCase();

    if (searchValue.length > 0) {
      const foodsFiltered = foodRepository.filter((item) =>
        item.name.toLowerCase().includes(searchValue)
      );

      setFoodRepository(foodsFiltered);
    } else {
      setFoodRepository(originalFoodRepository);
    }
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddTodaysFood = (e) => {
    console.log(e.target.id[6][0]);


    // setTodaysFood({
    //   name,
    //   calories,
    //   quantity
    // });
  };

  return (
    <>
      <div className="food-flex">
        <div>
          <input type="text" name="search" onChange={handleSearchInput} />
          <button onClick={handleAddFood}>Adicionar comida</button>
          {addFoodType && (
            <form onSubmit={handleSubmit(handleRegisterFood)}>
              <input
                type="text"
                name="name"
                ref={register({
                  required: 'Required',
                })}
                onChange={handleNameInput}
              />
              <input
                type="number"
                name="calories"
                ref={register({
                  required: 'Required',
                })}
                onChange={handleCaloriesInput}
              />
              <input
                type="file"
                name="image"
                ref={register({
                  required: 'Required',
                })}
                onChange={handleImageInput}
              />
              <button type="submit">Submit</button>
            </form>
          )}
          {foodRepository.map((item) => (
            <FoodBox
              key={item.name}
              food={item}
              handleQuantity={handleQuantity}
              handleAddTodaysFood={handleAddTodaysFood}
            />
          ))}
        </div>
        <FoodList />
      </div>
    </>
  );
}

export default App;
