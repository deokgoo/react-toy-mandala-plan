import { getCoreAllText } from '../../redux/boxStore/selector';

export const mapStateToProps = (state: any) => {
  const coreAllText = getCoreAllText(state.boxStore);

  return { coreAllText };
};