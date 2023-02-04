function Tool(props) {
  return (
    <li className="hex">
      <div className="hexIn">
        <a href="" className="hexLink">
          <img src={props.img} alt="" />
        </a>
      </div>
    </li>
  );
}

export default Tool;
