type Props = React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = (props: Props) => {
  return <select className="input" {...props} />;
};

export default Select;
