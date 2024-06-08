import React from "react";
import { Button, Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div className="Header container mx-auto">
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Chan Movies Channel
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Login</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">Popular</Navbar.Link>
          <Navbar.Link href="#">Coming soon</Navbar.Link>
          <Navbar.Link href="#">Coming soon</Navbar.Link>
          <Navbar.Link href="*">Error Page</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
