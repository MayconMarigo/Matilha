import "./Button.styles.css";

const DefaultButton = (props) => {
  return (
    <button
      className="button-style bold"
      style={{
        width: props.width,
        fontWeight: 700,
        height: props.height,
        padding: props.padding,
      }}
    >
      <span style={{ fontSize: props.fontSize }}>{props.text}</span>
    </button>
  );
};

export default DefaultButton;
