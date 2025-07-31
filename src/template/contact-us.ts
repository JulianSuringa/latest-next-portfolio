type Sender = {
  [key: string]: string;
};
 const contactUsTemplate = (sender: Sender): string => `
  <h3>Contact Details</h3>
  <table border="1">
    <thead>
      <tr>
        <th>Form Field</th>
        <th>Form Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>First name</td>
        <td>${sender.firstName}</td>
      </tr>
      <tr>
        <td>Last name</td>
        <td>${sender.lastName}</td>
      </tr>
      <tr>
        <td>Email address</td>
        <td>${sender.email}</td>
      </tr>
      <tr>
        <td>Phone number</td>
        <td>${sender.phone}</td>
      </tr>
      <tr>
        <td>Position</td>
        <td>${sender.position}</td>
      </tr>
      <tr>
        <td>Organisation</td>
        <td>${sender.organisation}</td>
      </tr>
      <tr>
        <td>Message</td>
        <td>${sender.message}</td>
      </tr>
    </tbody>
  </table>
`;


export default contactUsTemplate;
