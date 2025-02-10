import "./style.scss";

export const Route1 = ({ content, title }) => (
  <div className="route route1">
    <h2 className="route-title">{title}</h2>
    {content}
  </div>
);
