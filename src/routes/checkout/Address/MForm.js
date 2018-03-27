import { MForm } from 'modules/Form';
import constraints from './constraints';

export default class MFormImpl extends MForm {
  getDefaultProps() {

  }

  getDefaultConstraints() {
    return constraints;
  }
}
