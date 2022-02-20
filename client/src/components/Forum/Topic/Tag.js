import { Chip } from "@material-ui/core";
import { darken, alpha, makeStyles } from "@material-ui/core/styles";

const colors = [
  "#00ddb4",
  "#453dd8",
  "#eb1056",
  "#2682de",
  "#ff595b",
  "#D425F5",
  "#fe9b00",
];

const getTagColor = (tag) => {
  let asciiSum = 0;

  for (let j = 0; j < tag.length; j++) {
    asciiSum += tag[j].charCodeAt(0);
  }

  const denominator = Math.pow(10, Math.ceil(Math.log10(asciiSum)));
  const fraction = asciiSum / denominator;
  return colors[Math.floor(fraction * colors.length)];
};

const useStyles = makeStyles((theme) => ({
  chip: props => ({
    backgroundColor: props.color,
    padding: "0 3px",
    height: "2em",
    "&&:hover": {
      backgroundColor: darken(props.color, 0.2),
    },
  }),
}));

const TagChip = ({ tag }) => {
  const color = getTagColor(tag);
  const classes = useStyles({ color });

  return (
    <Chip
      label={tag}
      size="small"
      color="primary"
      clickable
      component="a"
      href={`/forum/search?searchQuery=none&tags=${tag}`}
      className={classes.chip}
    />
  );
};

export default TagChip;