import React from 'react';
//
const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      {(process.env.NODE_ENV === "develop") ? (
          <script type="module" src="/static/AuthCommon.js"></script>
      ): (
        <script type="module" src="/public/static/AuthCommon.js"></script>
      )}
  </div>
  );
};

export default Layout;
