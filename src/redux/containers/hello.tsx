import { connect } from "react-redux";
import { Dispatch } from 'redux'
import * as actions from "./../actions";
import { StoreState } from "./../types";
import Hello from "./../../components/hello";


export function mapStateToProps({ dome: { enthusiasmLevel, languageName } }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);