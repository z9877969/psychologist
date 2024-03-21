import Ability from '../Ability/Ability';
import Grid from '../Grid/Grid';

const Abilities = ({ abilities }) => {
  return (
    <Grid>
      {abilities &&
        abilities.map(({ id, text }) => (
          <Ability key={id} id={id} text={text} />
        ))}
    </Grid>
  );
};

export default Abilities;
