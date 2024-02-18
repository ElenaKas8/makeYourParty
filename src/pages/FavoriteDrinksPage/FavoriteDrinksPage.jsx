import { Section } from '../../styled/Section';
import { Container } from '../../styled/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchFavoriteDrink } from '../../redux/drinks/drinksOperations';
import DrinkList from '../../components/DrinkList/DrinkList';
import { FavoriteDrinks } from '../../components/FavoriteDrinks/FavoriteDrinks';

const FavoriteDrinksPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteDrink());
  }, [dispatch]);

  const favoriteDrinks = useSelector((state) => state.drinks.favorite);

  const drinksData = Array.isArray(favoriteDrinks)
    ? favoriteDrinks
    : favoriteDrinks.data;

  return (
    <>
      <Section>
        <Container>
          {drinksData.length === 0 ? (
            <FavoriteDrinks />
          ) : (
            <DrinkList drinks={drinksData} text={'See more'} />
          )}
        </Container>
      </Section>
    </>
  );
};

export default FavoriteDrinksPage;
