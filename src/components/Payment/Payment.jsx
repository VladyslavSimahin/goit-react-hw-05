export const Payment = ({ prices }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {prices.map((price) => (
          <tr key={price.id}>
            <td>{price.type}1</td>
            <td>{price.amount}1</td>
            <td>{price.currency}1</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
