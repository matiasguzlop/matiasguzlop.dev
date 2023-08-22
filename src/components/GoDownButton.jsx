import { ChevronDown } from '../assets/icons/ChevronDown.tsx';
import { Button } from './GoDownButton.style.js';

function GoDownButton (props) {
  return (
      <Button {...props}>
          {props.text}
          <ChevronDown/>
      </Button>
  );
}

export default GoDownButton;
