/* eslint-disable no-unused-vars */
import React from "react";
import { MdOutlineWavingHand } from "react-icons/md";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
const Faq = () => {
  return (
    <div className="my-10">
      <div className="max-w-[1100px] w-[100%] my-6 mx-auto ">
        <h5 className="bg-white w-[70px] border mb-2 text-center flex justify-center items-center py-2 rounded-xl text-purple-500 text-sm gap-2">
          {" "}
          <MdOutlineWavingHand className="text-yellow-600" />
          FAQ
        </h5>
        <h2 className="text-4xl font-bold text-[#121212]">Need</h2>
        <h3 className="text-4xl font-bold text-[#fb923c]">Answers?</h3>
        <p className="text-gray-500 font-semibold py-2">
          Check out our most commonly asked questions below to <br /> find the
          information you need.
        </p>

        <div className="w-[100%] my-6 mx-auto">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    What is Manage Wise and what does it offer?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Manage Wise is a comprehensive management platform designed to
                streamline your business operations, enhance productivity, and
                drive success. It offers a range of features including task
                management, scheduling, communication tools, analytics, and
                more.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    What is Manage Wise and what does it offer?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Manage Wise is a comprehensive management platform designed to
                streamline your business operations, enhance productivity, and
                drive success. It offers a range of features including task
                management, scheduling, communication tools, analytics, and
                more.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
