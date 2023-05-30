import PropTypes from 'prop-types';

import './style.scss';

// base page structure
const Page = ({ children }) => (
  <main className="page">
    {children}
  </main>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
