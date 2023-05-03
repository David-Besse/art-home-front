import PropTypes from 'prop-types';

import './style.scss';

/**
 * Main
 * @param {*} param0
 * @returns {JSX.Element}
 */

const Page = ({ children }) => (
  <main className="page">
    {children}
  </main>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
