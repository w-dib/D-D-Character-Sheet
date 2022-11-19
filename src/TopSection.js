import React from "react"

export default function TopSection(props) {
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    setName(props.randomName);
  }, [props.randomName]);

  return (
    <div className="col text-center">
      <input
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>{props.label}</label>
    </div>
  );
}


