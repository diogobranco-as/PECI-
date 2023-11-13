// atribute for disabled state
interface Props {
  disabledState: boolean;
}

function ProcessPhoto({ disabledState }: Props) {
  return (
    // enable button when photo is selected
    <button className="btn btn-primary" disabled={disabledState}>
      Process Photo
    </button>
  );
}
export default ProcessPhoto;
