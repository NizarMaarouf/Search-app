import React from "react";

export default function Header({ children, title }) {
  return (
    <header>
      <div className="container-fluid">
          <div className="text-center">
            <h1 className="text-home">
              {title}
            </h1>
            {children}
          </div>
        </div>
    </header>
  );
}

Header.defaultProps = {
  title: "default title",
  styleClass: "header-hero"
};
