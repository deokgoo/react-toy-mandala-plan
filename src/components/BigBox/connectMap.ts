import { getCoreBoxTexts } from '../../redux/boxStore/selector';

export const mapStateToProps = (state: any) => {
  const coreBoxTexts: Array<string> = getCoreBoxTexts(state.boxStore);

  return { coreBoxTexts }
};