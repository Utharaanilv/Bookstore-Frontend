import React from 'react';
import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaDribbble } from 'react-icons/fa6';

function CustomFooter() {
  return (
    <div>
        <FlowbiteFooter bgDark>
      <div className="w-full px-4 lg:px-24">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <FlowbiteFooter.Title title="Company" />
            <FlowbiteFooter.LinkGroup col>
              <FlowbiteFooter.Link href="#">About</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Careers</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Brand Center</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Blog</FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>
          <div>
            <FlowbiteFooter.Title title="help center" />
            <FlowbiteFooter.LinkGroup col>
              <FlowbiteFooter.Link href="#">Discord Server</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Twitter</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Facebook</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Contact Us</FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>
          <div>
            <FlowbiteFooter.Title title="legal" />
            <FlowbiteFooter.LinkGroup col>
              <FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Licensing</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Terms &amp; Conditions</FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>
          <div>
            <FlowbiteFooter.Title title="download" />
            <FlowbiteFooter.LinkGroup col>
              <FlowbiteFooter.Link href="#">iOS</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Android</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Windows</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">MacOS</FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Copyright href="#" by="Books™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FlowbiteFooter.Icon href="#" icon={BsFacebook} />
            <FlowbiteFooter.Icon href="#" icon={BsInstagram} />
            <FlowbiteFooter.Icon href="#" icon={BsTwitter} />
            <FlowbiteFooter.Icon href="#" icon={BsGithub} />
            <FlowbiteFooter.Icon href="#" icon={FaDribbble} />
          </div>
        </div>
      </div>
    </FlowbiteFooter>
    </div>
  )
}

export default CustomFooter;